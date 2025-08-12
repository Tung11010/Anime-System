import { pathRoutes } from "@/constants";
import { FiveHundred } from "@/modules/Errors";
import Layouts from "@/modules/Layouts";
import { createHashRouter } from "react-router-dom";
import { routesAdmin } from "./routes";

export const routers = createHashRouter([
  {
    path: pathRoutes.dashboard,
    element: <Layouts />,
    errorElement: <FiveHundred />,
    children: routesAdmin,
  },
  {
    path: "*",
    lazy: async () => {
      const { LoginPage } = await import("@/modules/pages/Login");
      return { element: <LoginPage /> };
    },
    errorElement: <FiveHundred />,
  },
]);
