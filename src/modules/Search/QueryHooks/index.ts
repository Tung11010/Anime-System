import { useQuery } from "@tanstack/react-query";
import { getMoviesBySearch, getNewCommentMovies, getTopViews } from "../services/Search.services";

export interface MovieTopView {
    id: number;
    title: string;
    slug: string;
    img_url: string;
    viewsCount: number;
    episodesCount?: number; 
  }

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
  
export const useMoviesBySearch = (keyword: string, page: number, limit?: number) => {
    return useQuery({
      queryKey: ["search-movies", keyword, page, limit],
      queryFn: () => getMoviesBySearch(keyword, page, limit),
      placeholderData: (prev) => prev,
      enabled: !!keyword // chỉ fetch khi có từ khóa
    });
  };