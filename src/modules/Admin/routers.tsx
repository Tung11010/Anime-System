import { RouteObject } from "react-router-dom";
import AdminMovies from "./AdminMovies";


export const AdminMoviesRoutes: RouteObject[] = [
  {
    path: "/admin/movies",
    element: <AdminMovies />,
    
  },
];