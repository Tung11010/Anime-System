// src/services/movieService.ts
import axios from "axios";
import { Movie } from "../types";

const API_URL = "http://localhost:3000/movie";

export const movieService = {
  getAll: async (): Promise<Movie[]> => {
    const res = await axios.get<Movie[]>(API_URL);
    return res.data;
  },

  create: async (data: Omit<Movie, "id">): Promise<Movie> => {
    const res = await axios.post<Movie>(API_URL, data);
    return res.data;
  },

  update: async (id: number, data: Partial<Movie>): Promise<Movie> => {
    const res = await axios.put<Movie>(`${API_URL}/${id}`, data);
    return res.data;
  },

  remove: async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
  },
};
