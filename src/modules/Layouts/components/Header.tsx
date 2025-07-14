import BrandLogo from "@/assets/images/logo-text.png";
import profileImages from "@/assets/images/users/multi-user.jpg";
import { customStyle } from "@/configs";
import { useConfigAppStore, BREAKPOINT_MD, useWindowResize } from "@/hooks";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Badge, Button, Col, Popover, Row, Typography } from "antd";
import { Header } from "antd/es/layout/layout";
import {
  CalendarCheck,
  FileOutput,
  LifeBuoy,
  Lock,
  MessageSquare,
  Moon,
  Settings,
  Sun,
  UserCircle2,
  Wallet,
} from "lucide-react";
import { useCallback, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { ThemModeEnum, useThemModeStore } from "../hooks/useTheme";

const { Text } = Typography;

const StyleHeader = styled(Header)`
  padding-inline: 24px;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.token.colorBorder};
  z-index: 999;
  background: ${({ theme }) => theme.token.colorBgContainer};
`;

const HeaderContainer = styled.ul`
  font-size: 15px;
  padding-inline: 0;
  display: flex;
  gap: 24px;
  margin: 0;
  justify-content: end;

  .ant-avatar {
    background-color: transparent;
    transition: all 0.5s ease;
    &:hover {
      background-color: ${({ theme }) => theme.token.colorBorder};
    }
  }
`;

const StyleFlagDropdown = styled.div`
  min-width: 145px;

  ul {
    li {
      padding: 5px 0;
      a {
        transition: all 0.5s ease;
        &:hover {
          color: ${customStyle.token.colorPrimary};
        }
      }
    }
  }
`;

const HeaderLayout = () => {
  const { themeMode, handleToggleMode } = useThemModeStore();
  const { logoutStore, collapsed, setCollapsed } = useConfigAppStore();
  const { width } = useWindowResize();
  const handleLogout = useCallback(() => {
    logoutStore();
  }, [logoutStore]);

  const profileContentPopover = useMemo(
    () => (
      <StyleFlagDropdown>
        <ul style={{ padding: "6px", listStyleType: "none" }} className="pl-0 mb-0">
          <li>
            <Text type="secondary" style={{ fontSize: "13px" }}>
              Welcome Admin!
            </Text>
          </li>
          <li>
            <Link to="/user-profile" className="flex items-center gap-2">
              <Text type="secondary">
                <UserCircle2 className="ant-mr-1" size={16} />
              </Text>
              <Text> Profile</Text>
            </Link>
          </li>
          <li>
            <Link to="/app-chat" className="flex items-center gap-2">
              <Text type="secondary">
                <MessageSquare className="ant-mr-1" size={16} />
              </Text>
              <Text> Messages</Text>
            </Link>
          </li>
          <li>
            <Link to="/#" className="flex items-center gap-2">
              <Text type="secondary">
                <CalendarCheck className="ant-mr-1" size={16} />
              </Text>
              <Text> Taskboard</Text>
            </Link>
          </li>
          <li style={{ borderBottom: "1px solid", borderBottomColor: "#eff2f7" }}>
            <Link to="/#" className="flex items-center gap-2">
              <Text type="secondary">
                {" "}
                <LifeBuoy className="ant-mr-1" size={16} />
              </Text>
              <Text> Help</Text>
            </Link>
          </li>
          <li>
            <Link to="/#" className="flex items-center gap-2">
              <Text type="secondary">
                <Wallet className="ant-mr-1" size={16} />
              </Text>
              <Text>
                Balance:<b>$8451.36</b>
              </Text>
            </Link>
          </li>
          <li>
            <Link to="/#" className="flex items-center gap-2">
              <Text type="secondary">
                {" "}
                <Settings className="ant-mr-1" size={16} />
              </Text>
              <Text> Settings</Text>{" "}
              <Badge
                count={"New"}
                style={{
                  marginLeft: customStyle.token.marginSM,
                  backgroundColor: customStyle.token.colorSuccessBg,
                  color: customStyle.token.colorSuccess,
                }}
              ></Badge>
            </Link>
          </li>
          <li>
            <Link to="/auth-lockscreen" className="flex items-center gap-2">
              <Text type="secondary">
                {" "}
                <Lock className="ant-mr-1" size={16} />
              </Text>
              <Text> Lock Screen</Text>
            </Link>
          </li>
          <li className="cursor-pointer" onClick={handleLogout}>
            <div className="flex items-center gap-2">
              <Text type="secondary">
                <FileOutput className="ant-mr-1" size={16} />
              </Text>
              <Text>Logout</Text>
            </div>
          </li>
        </ul>
      </StyleFlagDropdown>
    ),
    [handleLogout]
  );

  const handleToggleButton = () => {
    setCollapsed(!collapsed);
    const sidebarLayout = document.getElementById("sidebar-layout");
    if (sidebarLayout) {
      sidebarLayout.style.display = collapsed ? "none" : "block";
    }
  };

  useEffect(() => {
    const sidebarLayout = document.getElementById("sidebar-layout");
    if (sidebarLayout) {
      if (width < BREAKPOINT_MD) {
        sidebarLayout.style.display = "none";
      } else {
        sidebarLayout.style.display = "block";
      }
    }
  }, [width]);

  return (
    <StyleHeader className={`ml-${collapsed ? "[100px]" : width > BREAKPOINT_MD ? "64" : "0"}`}>
      <Row align="middle" justify={"space-between"} gutter={[16, 24]} className="h-full">
        {width < BREAKPOINT_MD && (
          <Col span={4} lg={1}>
            <img src={BrandLogo} height={24} style={{ display: "none" }} alt="" />
            <Button type="primary" onClick={handleToggleButton}>
              <MenuUnfoldOutlined />
            </Button>
          </Col>
        )}
        <Col span={18} md={24} lg={24} className="ant-ml-auto">
          <HeaderContainer>
            <li>
              <Link to={"#"}>{/* <CartDropdown /> */}</Link>
            </li>
            <li>
              <Link to={"#"}>{/* <NotificationDropdown /> */}</Link>
            </li>
            <li className="flex items-center">
              <div onClick={handleToggleMode}>
                {themeMode === ThemModeEnum.dark ? (
                  <Moon size={22} className="cursor-pointer" />
                ) : (
                  <Sun size={22} className="cursor-pointer" />
                )}
              </div>
            </li>
            <li className="flex items-center">
              <Popover placement="bottomRight" content={profileContentPopover} trigger={["click"]}>
                <Badge dot offset={[-3, 5]}>
                  <Link to="#">
                    <img src={profileImages} alt="" className="size-9 rounded-full" />
                  </Link>
                </Badge>
              </Popover>
            </li>
          </HeaderContainer>
        </Col>
      </Row>
    </StyleHeader>
  );
};

export default HeaderLayout;
