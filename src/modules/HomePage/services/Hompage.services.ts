import axios from "@/core/axios";

export const getAddRecentlyMovies = async (limit = 6) => {
  const response = await axios.get(`/movie/recently-added-shows?limit=${limit}`);
  return response.data.data;
};

export const getChina3dMovies = async (limit = 6) => {
  const response = await axios.get(`/movie/category/china-3d?limit=${limit}`);
  return response.data.data;
};

export const getAmineMovies = async (limit = 6) => {
  const response = await axios.get(`/movie/category/anime?limit=${limit}`)
  return response.data.data
}

export const getNewCommentMovies = async (limit = 5) => {
  const response = await axios.get(`/movie/new-comment?limit=${limit}`)
  return response.data
}

export const getTopViews = async (period: 'day' | 'week' | 'month' | 'year') => {
  const { data } = await axios.get(`/movie/top-views?period=${period}`);
  return data;
};