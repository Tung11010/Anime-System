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
    path: "/login",
    lazy: async () => {
      const { LoginPage } = await import("@/modules/Auth/Login");
      return { element: <LoginPage /> };
    },
    errorElement: <FiveHundred />,
  },
  {
    path: "/signup",
    lazy: async () => {
      const { SignUpPage } = await import("@/modules/Auth/SignUp");
      return { element: <SignUpPage /> };
    },
    errorElement: <FiveHundred />,
  }
]);
