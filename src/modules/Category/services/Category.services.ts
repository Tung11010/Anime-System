import axios from "@/core/axios";

export const getMoviesByCategorySlug = async (slug:string) => {
  const response = await axios.get(`/movie/${slug}`);
  return response.data;
};

export const getNewCommentMovies = async (limit = 5) => {
  const response = await axios.get(`/movie/new-comment?limit=${limit}`)
  return response.data
}