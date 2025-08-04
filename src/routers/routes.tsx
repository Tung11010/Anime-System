import { categoryRoutes } from "@/modules/Category/routes";
import { dashboardRoutes } from "@/modules/Dashboard/routes";
import { homepageRoutes } from "@/modules/HomePage/routes";
import { RouteObject } from "react-router-dom";

export const routesAdmin: RouteObject[] = [...dashboardRoutes];
export const routesUser: RouteObject[] = [...homepageRoutes, ...categoryRoutes]