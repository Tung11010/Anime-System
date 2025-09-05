import { RouteObject } from "react-router-dom";
import ProfileUser from "./profileuser";

export const ProfileUserRoutes: RouteObject[] = [
  {
    path: "/profile",
    element: <ProfileUser />,
  }];