import axios from "@/core/axios";

export const getLiveActionMovies = async (limit = 6) => {
  const response = await axios.get(`/movie/live-action?limit=${limit}`);
  return response.data;
};

export const getChina3dMovies = async (limit = 6) => {
  const response = await axios.get(`/movie/china-3d?limit=${limit}`);
  return response.data;
};

export const getAmineMovies = async (limit = 6) => {
  const response = await axios.get(`/movie/anime?limit=${limit}`)
  return response.data
}

export const getNewCommentMovies = async (limit = 5) => {
  const response = await axios.get(`/movie/new-comment?limit=${limit}`)
  return response.data
}