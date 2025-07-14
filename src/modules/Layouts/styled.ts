import { themeColor } from "@/configs";
import { Button, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import styled, { css } from "styled-components";

export const StyledCollapsedButton = styled(Button)`
  height: 30px;
  width: 30px;
  padding: 2px;
  position: absolute;
  background: ${({ theme }) => theme.components.Menu.itemBg};
  border: 1px solid;
  border-color: ${({ theme }) => theme.token.colorBorder};

  /* RTL Styles */
  ${({ theme }) =>
    theme.direction === "rtl" &&
    css`
      left: -14px;
    `}
  /* LTR Styles */
      ${({ theme }) =>
    theme.direction !== "rtl" &&
    css`
        right: -14px;~
      `}
`;

export const StyleBrandLogo = styled.div`
  background-color: ${({ theme }) => theme.components.Menu.itemBg};
  display: flex;
  align-items: center;
  height: calc(${themeColor.token.controlHeight}px * 2);
  padding-inline: 14px;
  line-height: 81px;
  justify-content: center;
`;

export const StyleSider = styled(Sider)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  border-right: 1px solid
    ${({ theme }) => {
      return theme.components.Menu.menuBorderColor;
    }};
  background: ${({ theme }) => theme.components.Menu.itemBg};

  .demo-logo {
    .brand-sm-logo {
      display: none;
    }
  }

  .ant-menu-sub {
    .ant-menu-item {
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  .ant-menu-inline {
    border-inline-end: none !important;
  }

  &.ant-layout-sider-collapsed {
    .demo-logo {
      .brand-dark-logo {
        display: none;
      }

      .brand-sm-logo {
        display: inline-block;
      }
    }

    .ant-menu-item-group-title {
      text-align: center;
    }
  }

  .ant-menu-inline-collapsed {
    width: 100px;
  }
`;

export const StyledMenu = styled(Menu)`
  &.ant-menu-light {
    background: ${({ theme }) => theme.backGroundWhite} !important;
  }
  .ant-menu-item-selected {
    font-weight: 600;
    background: rgba(76, 175, 80, 0.8) !important;
    color: ${({ theme }) => theme.menuColor} !important;
    .ant-menu-title-content {
      font-weight: 600;
    }
  }
  .ant-menu-item,
  .ant-menu-submenu-title {
    color: ${({ theme }) => theme.meuDefault};
    .ant-menu-submenu-arrow {
      inset-inline-end: 12px !important;
    }
  }

  .ant-menu-title-content {
    font-size: 0.875rem;
    font-weight: 500;
  }
  &:where(.css-dev-only-do-not-override-q1ej4k).ant-menu-light:not(.ant-menu-horizontal)
    .ant-menu-item:not(.ant-menu-item-selected):hover,
  &:where(.css-dev-only-do-not-override-q1ej4k).ant-menu-light
    > .ant-menu:not(.ant-menu-horizontal)
    .ant-menu-item:not(.ant-menu-item-selected):hover {
    background-color: ${({ theme }) => theme.menuBackground} !important;
  }
  &.ant-menu {
    > .ant-menu-submenu-selected {
      > .ant-menu-submenu-title {
        color: ${({ theme }) => theme.menuColor};
        background: ${({ theme }) => theme.primary} !important;
        svg {
          path {
            fill: ${({ theme }) => theme.menuColor};
          }
        }
      }
      > .ant-menu-sub {
        .ant-menu-submenu-selected {
          .ant-menu-submenu-title {
            color: #ffffff !important;
            background: ${({ theme }) => theme.primaryHover} !important;
            svg {
              path {
                fill: #ffffff !important;
              }
            }
          }
        }
      }
    }
  }
  .ant-menu-title-content {
    font-size: 14px;
  }
`;
