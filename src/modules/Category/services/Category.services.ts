import axios from "@/core/axios";

export const getMoviesByCategorySlug = async (slug: string, page = 1, limit = 15) => {
  const response = await axios.get(`/movie/category/${slug}?page=${page}&limit=${limit}`);
  return response.data;
};

export const getNewCommentMovies = async (limit = 4) => {
  const response = await axios.get(`/movie/new-comment?limit=${limit}`)
  return response.data
}