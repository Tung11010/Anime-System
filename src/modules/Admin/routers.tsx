import { RouteObject } from "react-router-dom";
import EpisodesManagement from "./Episodes-management";


export const EpisodesManagementRoutes: RouteObject[] = [
  {
    path: "/admin/episodes",
    element: <EpisodesManagement />,
    
  },
];