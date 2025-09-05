import { RouteObject } from "react-router-dom";
import EpisodesManagement from "./pages/EpisodesManagement";


export const EpisodesManagementRoutes: RouteObject[] = [
  {
    path: "/admin/episodes",
    element: <EpisodesManagement />,
    
  },
];