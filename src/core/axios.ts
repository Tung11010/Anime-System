import { setAccessToken } from "@/modules/Auth/store/authSlice";
import { store } from "@/modules/Auth/store/store";
import axios from "axios";


const getAccessToken = () => store.getState().auth.accessToken;
const getRefreshToken = () => store.getState().auth.refreshToken;

const instance = axios.create({
  baseURL: "http://localhost:3000", 
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: xử lý khi token hết hạn
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Nếu bị 401 Unauthorized và chưa retry
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // Gọi API refresh token
        const refreshToken = getRefreshToken();
        const res = await axios.post("http://localhost:3000/auth/refresh", {
          refreshToken,
        });

        const newAccessToken = res.data.accessToken;

        // Lưu lại token mới
        localStorage.setItem("accessToken", newAccessToken);
        store.dispatch(setAccessToken(newAccessToken));

        // Update header Authorization
        instance.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        // Retry request ban đầu
        return instance(originalRequest);
      } catch (refreshError) {
        console.error("Refresh token failed", refreshError);
        // Nếu refresh cũng fail → logout
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
)

export default instance;