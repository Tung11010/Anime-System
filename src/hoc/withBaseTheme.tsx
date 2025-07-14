import { darkThemeColors, themeColor } from "@/configs";
import { ThemModeEnum, useThemModeStore } from "@/modules/Layouts/hooks/useTheme";
import { AnyElement } from "@/types";
import { ConfigProvider } from "antd";
import React, { ComponentType, useMemo } from "react";
import { ThemeProvider } from "styled-components";

// Định nghĩa HOC
export const withBaseTheme = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const WithTheme: React.FC<P> = (props) => {
    const { themeMode } = useThemModeStore();
    const themColor = useMemo(() => {
      return themeMode === ThemModeEnum.dark ? (darkThemeColors as AnyElement) : (themeColor as AnyElement);
    }, [themeMode]);

    return (
      <ThemeProvider theme={themColor}>
        <ConfigProvider theme={themColor}>
          <WrappedComponent {...props} />
        </ConfigProvider>
      </ThemeProvider>
    );
  };

  return WithTheme;
};
