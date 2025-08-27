import { RouteObject } from "react-router-dom";
import UserListPage from "./pages/UserListPage";


export const UserListRoutes: RouteObject[] = [
  {
    path: "/admin/users",
    element: <UserListPage />,
    
  },
];

