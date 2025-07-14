import { endpoint } from "@/constants";
import { useConfigAppStore } from "@/hooks";
import { AnyElement } from "@/types.ts";
import { notification } from "antd";
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { baseApiUrl } from "../constants/app";
import { StorageService } from "@/helpers";

const STATUS_TOKEN_EXPIRED = 401;
const API_REQUEST_TIMEOUT = 60000; // 20s

let isRefreshing = false;
let failedQueue: AnyElement[] = [];

const processQueue = (error: AnyElement, token: AnyElement = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

const axiosClient = axios.create({
  baseURL: baseApiUrl,
  timeout: API_REQUEST_TIMEOUT,
  responseType: "json",
  withCredentials: false,
});

const handleRequest = (req: InternalAxiosRequestConfig) => {
  req.headers = req.headers ?? {};
  const token = StorageService.getAccessToken();
  if (token) {
    if (!req.headers["Authorization"]) {
      req.headers["Authorization"] = `Bearer ${token}`;
    }
  }
  req.headers["Accept-Language"] = "vi-VN";
  req.headers["Accept"] = "*";
  return req;
};

const handleRequestError = (error: AnyElement) => {
  return Promise.reject(error);
};

//handle response api
const resInterceptor = (response: AxiosResponse) => {
  return response;
};

const errInterceptor = (error: AnyElement) => {
  const httpCode = error?.response?.status;
  const config = error?.response?.config;
  if (httpCode === STATUS_TOKEN_EXPIRED && config?.url !== endpoint.refreshToken && config?.url !== endpoint.login) {
    const refreshToken = StorageService.getRefreshToken();

    if (isRefreshing) {
      return new Promise(function (resolve, reject) {
        failedQueue.push({ resolve, reject });
      })
        .then((token) => {
          error.config.headers["Authorization"] = "Bearer " + token;
          return axiosClient(error.config);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }

    error.config._retry = true;
    isRefreshing = true;

    if (!refreshToken) {
      notification.destroy();
      return window.location.reload();
    }
    return axios
      .post<AnyElement>(
        endpoint.refreshToken,
        {
          refresh_token: refreshToken,
        },
        {
          baseURL: baseApiUrl,
        }
      )
      .then((response) => {
        const token = response?.data?.accessToken;
        console.log(`Trigger refresh token, getting new access token: ${token}`);
        StorageService.setAccessToken(token);
        processQueue(null, token);
        return new Promise((resolve, reject) => {
          axiosClient
            .request({
              ...config,
              headers: {
                ...config?.headers,
                Authorization: `Bearer ${token}`,
              },
            })
            .then((response: AnyElement) => {
              resolve(response);
            })
            .catch((error: AnyElement) => {
              reject(error);
            });
        });
      })
      .catch((errorRefresh) => {
        processQueue(errorRefresh, null);
        if (errorRefresh.status === 401 || errorRefresh?.config?.url === endpoint.refreshToken) {
          notification.warning({
            message: "Cảnh báo",
            description: "Phiên đăng nhập hết hạn, vui lòng đăng nhập lại",
          });
          useConfigAppStore.getState().logoutStore();
        }
        return Promise.reject(errorRefresh?.response?.data);
      })
      .finally(() => {
        isRefreshing = false;
      });
  }
  const CError: AnyElement = error?.response?.data;

  if (CError?.message && !CError?.errors) {
    notification.error({
      message: "Lỗi",
      description: CError?.message,
    });
  }
  return Promise.reject(CError);
};

axiosClient.interceptors.request.use(handleRequest as AnyElement, handleRequestError);
axiosClient.interceptors.response.use(resInterceptor, errInterceptor);

export const safeRequest = async <T>(
  requestPromise: Promise<T>,
  errorHandler?: (error: unknown) => unknown
): Promise<T> => {
  try {
    return await requestPromise;
  } catch (error) {
    console.error("Lỗi API request:", error);
    if (errorHandler) {
      return errorHandler(error) as T;
    }
    throw error;
  }
};

const safeApiClient = {
  get: <T>(url: string, config?: object) => safeRequest(axiosClient.get<T>(url, config)),
  post: <T>(url: string, data?: unknown, config?: object) => safeRequest(axiosClient.post<T>(url, data, config)),
  put: <T>(url: string, data?: unknown, config?: object) => safeRequest(axiosClient.put<T>(url, data, config)),
  delete: <T>(url: string, config?: object) => safeRequest(axiosClient.delete<T>(url, config)),
  patch: <T>(url: string, data?: unknown, config?: object) => safeRequest(axiosClient.patch<T>(url, data, config)),
};

export { safeApiClient };
