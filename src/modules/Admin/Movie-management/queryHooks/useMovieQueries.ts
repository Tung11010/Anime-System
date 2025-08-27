import { useEffect, useState } from "react";
import { Movie } from "../types";
import { movieService } from "../service/movieService";
import axios from "axios";

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const data = await movieService.getAll();
      setMovies(data);
      setError(null);
    } catch (err) {
      setError("Không thể tải danh sách phim. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  const createMovie = async (data: Omit<Movie, "id">) => {
    try {
      const newMovie = await movieService.create(data);
      setMovies((prev) => [...prev, newMovie]);
    } catch {
      setError("Không thể thêm phim mới.");
    }
  };

  const updateMovie = async (id: number, data: Partial<Movie>) => {
    try {
      const updated = await movieService.update(id, data);
      setMovies((prev) => prev.map((m) => (m.id === id ? updated : m)));
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 404) {
        setError(`Phim với ID ${id} không tồn tại.`);
      } else {
        setError("Không thể cập nhật phim.");
      }
    }
  };

  const deleteMovie = async (id: number) => {
    try {
      await movieService.remove(id);
      setMovies((prev) => prev.filter((m) => m.id !== id));
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 404) {
        setError(`Phim với ID ${id} không tồn tại.`);
      } else {
        setError("Không thể xóa phim.");
      }
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return { movies, loading, error, fetchMovies, createMovie, updateMovie, deleteMovie };
};
