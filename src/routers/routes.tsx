
import { categoryRoutes } from "@/modules/Category/routes";
import { dashboardRoutes } from "@/modules/Dashboard/routes";
import { homepageRoutes } from "@/modules/HomePage/routes";

import { RouteObject } from "react-router-dom";
import { AnimeDetailRoutes } from "@/modules/AnimeDetail/routes";
import { AnimeWatchingRoutes } from "@/modules/AnimeWatching/routes";
import { SignUpPage } from "@/modules/Auth/SignUp";
import { LoginPage } from "@/modules/Auth/Login";

export const routesAdmin: RouteObject[] = [...dashboardRoutes];

export const routesUser: RouteObject[] = [...homepageRoutes, ...categoryRoutes, ...AnimeDetailRoutes,
...AnimeWatchingRoutes, 
{ path: "/login", element: <LoginPage /> }, 
{ path: "/signup", element: <SignUpPage /> }];



