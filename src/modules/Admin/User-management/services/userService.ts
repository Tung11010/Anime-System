import axios from 'axios';
import { User, FormData } from '../types';

const API_BASE_URL = 'http://localhost:3000/auth';

export const getUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(`${API_BASE_URL}/users`);
  return response.data;
};

export const deleteUser = async (id: number): Promise<void> => {
  const token = localStorage.getItem('token');
  await axios.delete(`${API_BASE_URL}/users/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const createUser = async (data: FormData): Promise<void> => {
  const token = localStorage.getItem('token');
  await axios.post(`${API_BASE_URL}/register`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const updateUser = async (id: number, data: Partial<FormData>): Promise<void> => {
  const token = localStorage.getItem('token');
  await axios.put(`${API_BASE_URL}/users/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};