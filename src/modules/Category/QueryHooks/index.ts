import { useQuery } from "@tanstack/react-query";
import { getMovieByAddRencently, getMoviesByCategorySlug, getNewCommentMovies, getTopViews } from "../services/Category.services";

export interface MovieTopView {
  id: number;
  title: string;
  slug: string;
  img_url: string;
  viewsCount: number;
  episodesCount?: number; 
}

export const useCategoryMoviesSlug = (slug: string, page: number, limit?: number) => {
  return useQuery({
    queryKey: ["category-movies", slug, page, limit],
    queryFn: () => getMoviesByCategorySlug(slug, page, limit),
    placeholderData: (prev) => prev
  });
};

export const useNewCommentMovies = () => {
  return useQuery({
    queryKey: ["new-comment-movie"],
    queryFn: () => getNewCommentMovies()
  })
}

export const useRecentlyAddedMovies = (page: number, limit?: number) => {
  return useQuery({
    queryKey: ["add-recently-movie", page, limit],
    queryFn: () => getMovieByAddRencently(page, limit),
    placeholderData: (prev) => prev
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

export const useTrendingMovies = () => {

}

export const usePopularMovies = () => {

}
