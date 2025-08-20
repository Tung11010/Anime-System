import { RouteObject } from "react-router-dom";
import LoginPage from "./pages/Login";
export const LoginRoutes: RouteObject[] = [
  {
    path: "/login",
    element: <LoginPage />,
  },
];