import axios from "@/core/axios";

export const getMoviesByCategorySlug = async (slug: string, page: number, limit = 15) => {
  const response = await axios.get(`/movie/category/${slug}?page=${page}&limit=${limit}`);
  return response.data;
};

export const getNewCommentMovies = async (limit = 4) => {
  const response = await axios.get(`/movie/new-comment?limit=${limit}`)
  return response.data
}

export const getMovieByAddRencently = async (page: number, limit = 15) => {
  const response = await axios.get(`/movie/recently-added-shows?page=${page}&limit=${limit}`)
  return response.data
}

export const getTopViews = async (period: 'day' | 'week' | 'month' | 'year') => {
  const { data } = await axios.get(`/movie/top-views?period=${period}`);
  return data;
};