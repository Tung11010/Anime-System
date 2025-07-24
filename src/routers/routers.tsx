import { pathRoutes } from "@/constants";
import { FiveHundred } from "@/modules/Errors";
import Layouts from "@/modules/Layouts";
import { createHashRouter } from "react-router-dom";
import { routesAdmin } from "./routes";
import UserLayout from "@/modules/Layouts/components/Client/LayoutClient";
import HomePage from "@/modules/HomePage/HomePage";

export const routers = createHashRouter([
  {
    path: '/',
    element: <UserLayout />,
    errorElement: <FiveHundred />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: pathRoutes.dashboard,
    element: <Layouts />,
    errorElement: <FiveHundred />,
    children: routesAdmin,
  },
  {
    path: "*",
    lazy: async () => {
      const { NotFoundPage } = await import("@/modules/Errors");
      return { element: <NotFoundPage /> };
    },
    errorElement: <FiveHundred />,
  },
]);
