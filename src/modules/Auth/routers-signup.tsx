import { RouteObject } from "react-router-dom";
import SignUpPage from "./pages/SignUp";
export const SignUpRoutes: RouteObject[] = [
  {
    path: "/signup",
    element: <SignUpPage />,
  },
];