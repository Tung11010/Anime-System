import { useQuery } from "@tanstack/react-query"
import { getMovieDetailBySlug } from "../services/AnimeDetaild.services"


export const useMovieDetailSlug = (slug: string) => {
    return useQuery({
        queryKey: ['movie-detail', slug],
        queryFn: () => getMovieDetailBySlug(slug),
    })
}

