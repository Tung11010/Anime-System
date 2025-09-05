import { RouteObject } from "react-router-dom";
import Admin from "./Admin-dashboard";


export const AdminRoutes: RouteObject[] = [
  {
    path: "/admin",
    element: <Admin />,
    
  },
];