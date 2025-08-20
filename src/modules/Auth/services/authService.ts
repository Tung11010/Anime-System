import axios, { AxiosError } from "axios";

const API_BASE_URL = "http://localhost:3000";

// ====== TYPES ======
export interface RegisterData {
  email: string;
  username: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

// Login response (có token + user)
export interface AuthResponse {
  user: {
    id: string;
    email: string;
    username: string;
    role: string;
  };
  accessToken: string;
  refreshToken: string;
  success: boolean;
  message: string;
}

// Register response (chỉ success + message)
export interface RegisterResponse {
  success: boolean;
  message: string;
}

// ====== SERVICES ======
export const registerUser = async (
  data: RegisterData
): Promise<RegisterResponse> => {
  try {
    const res = await axios.post<RegisterResponse>(
      `${API_BASE_URL}/auth/register`,
      data,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return res.data;
  } catch (error) {
    const err = error as AxiosError<{ message?: string }>;
    if (err.response) {
      throw new Error(err.response.data?.message || "Registration failed");
    }
    throw new Error("Network error");
  }
};

export const loginUser = async (data: LoginData): Promise<AuthResponse> => {
  try {
    const res = await axios.post<AuthResponse>(
      `${API_BASE_URL}/auth/login`,
      data,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return res.data;
  } catch (error) {
    const err = error as AxiosError<{ message?: string }>;
    if (err.response) {
      throw new Error(err.response.data?.message || "Login failed");
    }
    throw new Error("Network error");
  }
};
