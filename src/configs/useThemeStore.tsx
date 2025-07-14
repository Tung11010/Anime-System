import { ThemeConfig } from "antd";

export interface ThemesType {
  primary: string;
  secondary: string;
  primaryHover: string;
  menuDefault: string;
  menuDisableDark: string;
  actionActive: string;
  actionActive2: string;
  activeButton: string;
  menuBackground: string;
  menuColor: string;
  menuColorActive: string;
  contentDropdown13: string;
  contentTable: string;
  contentTableDisable: string;
  contentPlaceholder: string;
  strokeLineLight: string;
  strokeLightDark: string;
  strokeCheckbox: string;
  titleTable: string;
  titleDefault: string;
  buttonInput: string;
  buttonPrimary: string;
  buttonInActive: string;
  buttonWhite: string;
  buttonOutline: string;
  statusGreen: string;
  statusRed: string;
  statusGreenHover: string;
  statusRedHover: string;
  statusNotSync: string;
  statusYellow: string;
  statusBlue: string;
  tableSelectedActive: string;
  tableTitleBackground: string;
  backGroundContent: string;
  backGroundWhite: string;
}

export const theme: ThemesType = {
  primary: "#4caf50",
  secondary: "#2e7d32",
  buttonPrimary: "#4caf50",
  primaryHover: "#66bb6a",
  menuDefault: "rgba(0, 0, 0, 0.8)",
  menuColor: "rgba(0, 0, 0, 1)",
  menuDisableDark: "#8E8E8E",
  actionActive: "#81c784",
  actionActive2: "#FFFFFF",
  activeButton: "#4caf50",
  menuBackground: "rgba(76, 175, 80, 0.1)",
  menuColorActive: "rgba(0, 0, 0, 1)",
  contentDropdown13: "#565656",
  contentTable: "#292929",
  contentPlaceholder: "#616774",
  strokeLineLight: "#F3F3F4",
  strokeLightDark: "#3E3E40",
  strokeCheckbox: "#D9D9D9",
  titleTable: "#292929",
  contentTableDisable: "#666666",
  titleDefault: "#151515",
  buttonInput: "#F5F5F5",
  buttonInActive: "#C3C3C3",
  buttonWhite: "#FFFFFF",
  buttonOutline: "#DCDCDC",
  statusGreen: "#4caf50",
  statusRed: "#E51616",
  statusGreenHover: "#66bb6a",
  statusRedHover: "#ff0213d1",
  statusNotSync: "#F6D300",
  statusYellow: "#FF9900",
  statusBlue: "#1365E1",
  tableSelectedActive: "#F6F6F6",
  tableTitleBackground: "#ECECEC",
  backGroundContent: "#F8F8F8",
  backGroundWhite: "#FFFFFF",
};

export const ComponentThemeConfig: ThemeConfig["components"] = {
  Form: {
    itemMarginBottom: 10,
  },
  Input: {
    colorTextDisabled: "black",
  },
  Select: {
    colorTextDisabled: "black",
  },
  DatePicker: {
    colorTextDisabled: "black",
  },
  InputNumber: {
    colorTextDisabled: "black",
  },
  Button: {
    primaryColor: "black",
    defaultHoverColor: "black",
  },
  Modal: {
    titleColor: "black",
    headerBg: theme.primary,
  },
  Menu: {
    itemColor: theme.menuColor,
    itemSelectedColor: theme.menuColor,
    itemActiveBg: theme.menuColorActive,
    itemSelectedBg: theme.menuColorActive,
    itemHoverBg: theme.menuBackground,
  },
};
