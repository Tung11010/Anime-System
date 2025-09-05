import { API_URL } from "../constants/api";
import { Movie } from "../types";

export const movieService = {
  async getMovies(): Promise<Movie[]> {
    const res = await fetch(`${API_URL}/movie`);
    const data = await res.json();
    if (Array.isArray(data)) return data;
    if (Array.isArray(data.data)) return data.data;
    return [];
  },

  async getMovieDetail(id: number): Promise<Movie> {
    const res = await fetch(`${API_URL}/movie/list-episode/${id}`);
    return res.json();
  },
};
