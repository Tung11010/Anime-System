import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

export interface RegisterData {
  email: string;
  username: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export const registerUser = async (data: RegisterData) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/auth/register`, data, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || "Registration failed");
    }
    throw new Error("Network error");
  }
};

export const loginUser = async (data: LoginData) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/auth/login`, data, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || "Login failed");
    }
    throw new Error("Network error");
  }
};
