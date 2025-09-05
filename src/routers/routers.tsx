import { pathRoutes } from "@/constants";
import { FiveHundred } from "@/modules/Errors";
import Layouts from "@/modules/Layouts";
import { createHashRouter } from "react-router-dom";

import { routesAdmin, routesDashboard, routesUser } from "./routes";
import UserLayout from "@/modules/Layouts/components/Client/LayoutClient";

export const routers = createHashRouter([

  {
    path: "/",
    element: <UserLayout />,
    errorElement: <FiveHundred />,
    children: routesUser, 
  },
  {
    path: pathRoutes.dashboard ,
    element: <Layouts />,
    errorElement: <FiveHundred />,
    children: routesAdmin,
  },
  {
    path: "/",
    children: routesDashboard,
  }  

]);
