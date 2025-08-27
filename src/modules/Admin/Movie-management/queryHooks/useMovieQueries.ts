
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Movie } from "../types";
import { movieService } from "../service/movieService";
import axios from "axios";

export const useMovies = () => {
  const queryClient = useQueryClient();

  const { data: movies = [], isLoading: loading, error } = useQuery({
    queryKey: ["movies"],
    queryFn: movieService.getAll,
  });

  const createMovie = useMutation({
    mutationFn: (data: Omit<Movie, "id">) => movieService.create(data),
    onSuccess: (newMovie) => {
      queryClient.setQueryData(["movies"], (old: Movie[] | undefined) => [
        ...(old || []),
        newMovie,
      ]);
    },
    onError: (error) => {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        return `Phim với ID ${error.response.data.id || "unknown"} không tồn tại.`;
      }
      return "Không thể thêm phim mới.";
    },
  });

  const updateMovie = useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<Movie> }) =>
      movieService.update(id, data),
    onSuccess: (updatedMovie) => {
      queryClient.setQueryData(["movies"], (old: Movie[] | undefined) =>
        old?.map((m) => (m.id === updatedMovie.id ? updatedMovie : m))
      );
    },
    onError: (error) => {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        return `Phim với ID ${error.response.data.id || "unknown"} không tồn tại.`;
      }
      return "Không thể cập nhật phim.";
    },
  });

  const deleteMovie = useMutation({
    mutationFn: (id: number) => movieService.remove(id),
    onSuccess: (_, id) => {
      queryClient.setQueryData(["movies"], (old: Movie[] | undefined) =>
        old?.filter((m) => m.id !== id)
      );
    },
    onError: (error) => {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        return `Phim với ID ${error.response.data.id || "unknown"} không tồn tại.`;
      }
      return "Không thể xóa phim.";
    },
  });

  const fetchMovies = () => {
    queryClient.invalidateQueries({ queryKey: ["movies"] });
  };

  return {
    movies,
    loading,
    error: error ? (typeof error === "string" ? error : error.message) : null,
    fetchMovies,
    createMovie: createMovie.mutateAsync,
    updateMovie: (id: number, data: Partial<Movie>) =>
      updateMovie.mutateAsync({ id, data }),
    deleteMovie: deleteMovie.mutateAsync,
  };
};