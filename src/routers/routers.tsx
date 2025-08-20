import { pathRoutes } from "@/constants";
import { FiveHundred } from "@/modules/Errors";
import Layouts from "@/modules/Layouts";
import { createHashRouter } from "react-router-dom";

import { routesAdmin, routesUser } from "./routes";
import UserLayout from "@/modules/Layouts/components/Client/LayoutClient";

export const routers = createHashRouter([

  {
    path: "/",
    element: <UserLayout />,
    errorElement: <FiveHundred />,
    children: routesUser, 
  },
  {
    path: pathRoutes.dashboard,
    element: <Layouts />,
    errorElement: <FiveHundred />,
    children: routesAdmin,
  },
  {
    path: "/login",
    lazy: async () => {
      const { LoginPage } = await import("@/modules/Auth/pages/Login");
      return { element: <LoginPage /> };
    },
    errorElement: <FiveHundred />,
  },

]);
