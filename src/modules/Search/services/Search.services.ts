import axios from "@/core/axios";


export const getNewCommentMovies = async (limit = 4) => {
  const response = await axios.get(`/movie/new-comment?limit=${limit}`)
  return response.data
}

export const getMoviesBySearch = async (keyword: string, page: number, limit = 15) => {
    const response = await axios.get(`/movie/search?q=${keyword}&page=${page}&limit=${limit}`);
    return response.data;
  };

export const getTopViews = async (period: 'day' | 'week' | 'month' | 'year') => {
  const { data } = await axios.get(`/movie/top-views?period=${period}`);
  return data;
};