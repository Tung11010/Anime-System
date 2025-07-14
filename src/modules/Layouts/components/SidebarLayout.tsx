import BrandLogo from "@/assets/images/logo-text.png";
import BrandlightLogo from "@/assets/images/logo-text.png";
import BrandSmLogo from "@/assets/images/logo.png";
import { customStyle, themeColor } from "@/configs";
import { useConfigAppStore, BREAKPOINT_MD, useWindowResize } from "@/hooks";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { MenuProps, Spin } from "antd";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IMenuItem, useGetMenu } from "../hooks/useGetMenu";
import { ThemModeEnum, useThemModeStore } from "../hooks/useTheme";
import { StyleBrandLogo, StyleSider, StyledCollapsedButton, StyledMenu } from "../styled";

type MenuItem = Required<MenuProps>["items"][number];
const buildTree = (menu: IMenuItem[]): MenuItem[] => {
  const children = menu.map((item: IMenuItem) => {
    return {
      key: item.url ? item.url : item.id,
      label: item.url ? <Link to={item.url}>{item.name}</Link> : item.name,
      children: item.children && item.children.length > 0 ? buildTree(item.children) : undefined,
    };
  });
  return children;
};

export const SidebarLayout = () => {
  const { themeMode } = useThemModeStore();
  const { pathname } = useLocation();
  const { collapsed, setCollapsed } = useConfigAppStore();
  const [openMenuKeys, setOpenMenuKeys] = useState<string[]>([]);
  const { data: menu = [], isLoading: loadingMenu, isSuccess } = useGetMenu();

  const items = useMemo(() => {
    return buildTree(menu);
  }, [menu]);

  const { width } = useWindowResize();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const findKeysPath = useCallback((tree: IMenuItem[], targetKey: string): string[] => {
    const path: string[] = [];
    function dfs(node: IMenuItem): boolean {
      path.push(node.key);
      if (node.key === targetKey) {
        return true;
      }
      if (node.children) {
        for (const child of node.children) {
          if (dfs(child)) {
            return true;
          }
        }
      }
      path.pop();
      return false;
    }
    for (const root of tree) {
      if (dfs(root)) {
        return path;
      }
    }
    return [];
  }, []);

  useEffect(() => {
    if (isSuccess) {
      const keys = findKeysPath(menu, pathname);
      setOpenMenuKeys(keys);
    }
  }, [pathname, isSuccess, findKeysPath, menu]);

  return (
    <StyleSider
      id="sidebar-layout"
      width={themeColor.components.Menu.verticalSidebarWidth}
      collapsed={collapsed}
      collapsedWidth="100"
      breakpoint="lg"
    >
      <StyleBrandLogo className="demo-logo ant-mx-auto">
        <img
          alt="Brand logo"
          src={themeMode === ThemModeEnum.dark ? BrandlightLogo : BrandLogo}
          height={110}
          style={{ lineHeight: "24px" }}
          className="brand-dark-logo ant-mx-auto h-[110px]"
        />
        <img
          alt="Brand sm logo"
          src={BrandSmLogo}
          height={110}
          style={{ lineHeight: "24px" }}
          className="brand-sm-logo ant-mx-auto"
        />
        {width > BREAKPOINT_MD && (
          <StyledCollapsedButton type="link" onClick={toggleCollapsed}>
            {collapsed ? <LeftOutlined /> : <RightOutlined />}
          </StyledCollapsedButton>
        )}
      </StyleBrandLogo>
      <Spin spinning={loadingMenu}>
        <StyledMenu
          openKeys={openMenuKeys}
          onOpenChange={setOpenMenuKeys}
          selectedKeys={[pathname]}
          theme={customStyle.token}
          items={items}
          inlineIndent={12}
          mode="inline"
        />
      </Spin>
    </StyleSider>
  );
};
