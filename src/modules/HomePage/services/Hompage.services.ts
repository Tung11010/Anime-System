import axios from "@/core/axios";

export const getLiveActionMovies = async (limit = 6) => {
  const response = await axios.get(`/movie/category/live-action?limit=${limit}`);
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