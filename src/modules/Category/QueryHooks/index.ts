import { useQuery } from "@tanstack/react-query";
import { getMoviesByCategorySlug, getNewCommentMovies } from "../services/Category.services";

export const useCategoryMoviesSlug = (slug : string) => {
  return useQuery({
    queryKey: ["live-action-movies", slug],
    queryFn: () => getMoviesByCategorySlug(slug),
  });
};

export const useNewCommentMovies = () => {
  return useQuery({
    queryKey: ["new-comment-movie"],
    queryFn: () => getNewCommentMovies()
  })
}
