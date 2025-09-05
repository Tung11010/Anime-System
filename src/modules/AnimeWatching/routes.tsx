import { RouteObject } from "react-router-dom";
import AnimeWatching from "./pages/AnimeWatching";

export const AnimeWatchingRoutes: RouteObject[] = [
  {
    path: "/movie-watching/:slug",
    element: <AnimeWatching />,
  },
];
