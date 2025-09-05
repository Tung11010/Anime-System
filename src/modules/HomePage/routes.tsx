import { RouteObject } from "react-router-dom";
import HomePage from "./pages/HomePage";

export const homepageRoutes: RouteObject[] = [
  {
    index: true,
    element: <HomePage />,
  },
];
