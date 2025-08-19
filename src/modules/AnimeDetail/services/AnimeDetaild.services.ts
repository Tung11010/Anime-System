import axios from "@/core/axios";

export const getMovieDetailBySlug = async (slug: string) => {
    const response = await axios.get(`movie/movie-detail/${slug}`)
    return response.data
}


