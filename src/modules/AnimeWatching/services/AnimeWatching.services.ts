import axios from "@/core/axios";

export const getCommentFromMovieDetail = async (slug: string) => {
    const response = await axios.get(`movie/watching/${slug}`)
    return response.data
}

export const postComment = (movieId: number, content: string) => {
  return axios.post("/comments", { content, movie_id: movieId });
};