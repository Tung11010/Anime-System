import { RouteObject } from "react-router-dom";
import AdminMovies from "./pages/AdminMovies";


export const AdminMoviesRoutes: RouteObject[] = [
  {
    path: "/admin/movies",
    element: <AdminMovies />,
    
  },
];