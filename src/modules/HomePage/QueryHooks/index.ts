import { useQuery } from "@tanstack/react-query";
import { getAddRecentlyMovies, getAmineMovies, getChina3dMovies,  getNewCommentMovies, getTopViews } from "../services/Hompage.services";

export interface MovieTopView {
  id: number;
  title: string;
  slug: string;
  img_url: string;
  viewsCount: number;
  episodesCount?: number; 
}


export const useAddRecentlyMovies = () => {
  return useQuery({
    queryKey: ["live-action-movies"],
    queryFn: () => getAddRecentlyMovies(),
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

export const useTopViews = (period: 'day' | 'week' | 'month' | 'year') => {
  return useQuery<MovieTopView[]>({
    queryKey: ['topViews', period],
    queryFn: () => getTopViews(period),
    staleTime: 1000 * 60,
    placeholderData: (prev?: MovieTopView[]) => prev ?? [], 
  });
};


