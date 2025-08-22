
import { categoryRoutes } from "@/modules/Category/routes";
import { dashboardRoutes } from "@/modules/Dashboard/routes";
import { homepageRoutes } from "@/modules/HomePage/routes";
import { RouteObject } from "react-router-dom";
import { AnimeDetailRoutes } from "@/modules/AnimeDetail/routes";
import { AnimeWatchingRoutes } from "@/modules/AnimeWatching/routes";
import { LoginRoutes } from "@/modules/Auth/routers-login";
import { SignUpRoutes } from "@/modules/Auth/routers-signup";
import { ProfileUserRoutes } from "@/modules/ProfileUser/routers";
import { AdminRoutes } from "@/modules/Admin/router";
import { UserListRoutes } from "@/modules/Admin/User-management/routers";
import { AdminMoviesRoutes } from "@/modules/Admin/routers";

export const routesAdmin = [...dashboardRoutes];
export const routesDashboard = [...AdminRoutes, ...UserListRoutes, ...AdminMoviesRoutes];

export const routesUser: RouteObject[] = [
  ...homepageRoutes,
  ...categoryRoutes,
  ...AnimeDetailRoutes,
  ...AnimeWatchingRoutes,
  ...LoginRoutes,
  ...SignUpRoutes,
  ...ProfileUserRoutes,
];



