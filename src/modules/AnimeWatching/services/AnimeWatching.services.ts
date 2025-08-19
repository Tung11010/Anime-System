import axios from "@/core/axios";

export const getCommentFromMovieDetail = async (slug: string) => {
    const response = await axios.get(`movie/watching/${slug}`)
    return response.data
}