import { RouteObject } from "react-router-dom";

export const dashboardRoutes: RouteObject[] = [
  {
    index: true,
    lazy: async () => {
      const { default: Dashboard } = await import("@/modules/Dashboard/pages");
      return { element: <Dashboard /> };
    },
  },
];
