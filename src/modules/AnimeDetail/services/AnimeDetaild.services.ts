import axios from "@/core/axios";

export const getMovieDetailBySlug = async (slug: string) => {
    const response = await axios.get(`movie/movie-detail/${slug}`)
    return response.data
}

export const postComment = (movieId: number, content: string) => {
  return axios.post("/comments", { content, movie_id: movieId });
};

export const handleFollowApi = (movieId: number, userId: number) => {
  return axios.post("/follow/toggle", {
    user_id: userId,
    movie_id: movieId
  })
}