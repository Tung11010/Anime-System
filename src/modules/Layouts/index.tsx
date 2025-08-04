import { darkThemeColors, themeColor } from "@/configs";
import { pathRoutes } from "@/constants";
import { useConfigAppStore, BREAKPOINT_MD, useWindowResize } from "@/hooks";
import { AnyElement } from "@/types";
import { ConfigProvider, Layout } from "antd";
import { FC, useEffect, useMemo } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import FooterLayout from "./components/Footer";
import HeaderLayout from "./components/Header";
import { SidebarLayout } from "./components/SidebarLayout";
import { ThemModeEnum, useThemModeStore } from "./hooks/useTheme";

const { Content } = Layout;

const MainLayout: FC = () => {
  const { themeMode } = useThemModeStore();
  const { logoutStore, isAuthenticated, collapsed } = useConfigAppStore();
  const { width } = useWindowResize();
  useEffect(() => {
    window.addEventListener("vite:preloadError", () => {
      window.location.reload();
    });
    return () => {
      window.removeEventListener("vite:preloadError", () => {
        window.location.reload();
      });
    };
  }, []);
  useEffect(() => {
    if (!isAuthenticated) {
      logoutStore();
    }
  }, [isAuthenticated, logoutStore]);

  const themColor = useMemo(() => {
    return themeMode === ThemModeEnum.dark ? (darkThemeColors as AnyElement) : (themeColor as AnyElement);
  }, [themeMode]);

  if (!isAuthenticated) {
    return <Navigate to={pathRoutes.login} replace={true} />;
  }

  return (
    <ThemeProvider theme={themColor}>
      <ConfigProvider theme={themColor}>
        <SidebarLayout />
        <Layout className="min-h-screen">
          <HeaderLayout />
          {/* <StyleLayout> */}
          <Content className={`${collapsed ? "ml-[100px]" : width > BREAKPOINT_MD ? "ml-64" : "ml-0"} px-6`}>
            <Outlet />
          </Content>
          {/* </StyleLayout> */}
          <FooterLayout />
        </Layout>
      </ConfigProvider>
    </ThemeProvider>
  );
};

export default MainLayout;
