import { useState } from "react";
import { Movie } from "../types";
import { Episode } from "../types";
import { movieService } from "../services/movieService";
import { episodeService } from "../services/episodeService";

export const useEpisodes = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [formData, setFormData] = useState<Partial<Episode>>({});
  const [isEditing, setIsEditing] = useState(false);

  const loadMovieDetail = async (id: number) => {
    const data = await movieService.getMovieDetail(id);
    setSelectedMovie(data);
  };

  const saveEpisode = async () => {
    if (!selectedMovie) return;
    const payload = { ...formData, movie_id: selectedMovie.id };
    if (isEditing && formData.id) {
      await episodeService.updateEpisode(formData.id, payload);
    } else {
      await episodeService.createEpisode(payload);
    }
    setFormData({});
    setIsEditing(false);
    loadMovieDetail(selectedMovie.id);
  };

  const deleteEpisode = async (episodeNo: number) => {
    if (!selectedMovie) return;
    await episodeService.deleteEpisode(selectedMovie.id, episodeNo);
    loadMovieDetail(selectedMovie.id);
  };

  return {
    selectedMovie,
    setSelectedMovie,
    formData,
    setFormData,
    isEditing,
    setIsEditing,
    loadMovieDetail,
    saveEpisode,
    deleteEpisode,
  };
};
