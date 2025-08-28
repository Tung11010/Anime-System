import { useEffect, useState } from "react";
import { Movie } from "../types";
import { movieService } from "../services/movieService";

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  const loadMovies = async () => {
    setLoading(true);
    const data = await movieService.getMovies();
    setMovies(data);
    setLoading(false);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return { movies, loading, reload: loadMovies };
};
