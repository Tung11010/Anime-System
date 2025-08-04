import { useQuery } from "@tanstack/react-query";
import { getMoviesByCategorySlug, getNewCommentMovies } from "../services/Category.services";


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
