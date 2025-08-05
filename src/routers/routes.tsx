import { RouteObject } from "react-router-dom";
import { dashboardRoutes } from "@/modules/Dashboard/routes";
import { AnimeDetailRoutes } from "@/modules/AnimeDetail/routes";
import { AnimeWatchingRoutes } from "@/modules/AnimeWatching/routes";

export const routesAdmin: RouteObject[] = [...dashboardRoutes];

export const routesUser: RouteObject[] = [
  ...AnimeDetailRoutes,
  ...AnimeWatchingRoutes,
];
