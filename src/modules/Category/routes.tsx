// src/modules/Category/routes.ts
import { RouteObject } from "react-router-dom";
import Category from "./pages/Categoty";

export const categoryRoutes: RouteObject[] = [
  {
    path: "category/:slug",
    element: <Category />,
  },
];
