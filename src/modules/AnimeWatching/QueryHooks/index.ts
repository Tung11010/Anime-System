import { useQuery } from "@tanstack/react-query"
import { getCommentFromMovieDetail } from "../services/AnimeWatching.services"



export const useMovieWatchingSlug = (slug: string) => {
    return useQuery({
        queryKey: ['movie-watching', slug],
        queryFn: () => getCommentFromMovieDetail(slug),
    })
}

