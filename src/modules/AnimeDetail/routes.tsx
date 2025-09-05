import { RouteObject } from "react-router-dom";
import AnimeDetail from "./pages/AnimeDetail";
export const AnimeDetailRoutes: RouteObject[] = [
  {
    path: "/movie-detail/:slug",
    element: < AnimeDetail/>,
  },
];
