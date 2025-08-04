import { useQuery } from "@tanstack/react-query";
import { getAmineMovies, getChina3dMovies, getLiveActionMovies, getNewCommentMovies } from "../services/Hompage.services";

export const useLiveActionMovies = () => {
  return useQuery({
    queryKey: ["live-action-movies"],
    queryFn: () => getLiveActionMovies(),
  });
};

export const useChina3dMovies = () => {
  return useQuery({
    queryKey: ["china-3d-movies"],
    queryFn: () => getChina3dMovies(),
  });
};

export const useAnimeMovies = () => {
  return useQuery({
    queryKey: ["anime-movies"],
    queryFn: () => getAmineMovies(),
  });
};

export const useNewCommentMovies = () => {
  return useQuery({
    queryKey: ["new-comment-movie"],
    queryFn: () => getNewCommentMovies()
  })
}


