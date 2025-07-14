import { customStyle } from "@/configs";
import { useConfigAppStore, BREAKPOINT_MD, useWindowResize } from "@/hooks";
import { Row } from "antd";
import { Footer } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyleFooter = styled(Footer)`
  z-index: 9;
  color: ${customStyle.token.colorTextDisabled};
  background-color: ${({ theme }) => theme.token.colorBgContainer};
  border-top: 1px solid;
  border-color: ${({ theme }) => theme.token.colorBorder};
`;

const FooterLayout = () => {
  const { collapsed } = useConfigAppStore();
  const { width } = useWindowResize();
  return (
    <StyleFooter className={`ml-${collapsed ? "[100px]" : width > BREAKPOINT_MD ? "64" : "0"} !px-6`}>
      <Row align="middle">
        <div
          style={{ display: "flex", justifyContent: "space-between", width: "100%", whiteSpace: "nowrap", zIndex: "9" }}
        >
          <p style={{ marginRight: "16px", marginBottom: "0" }}>
            2024 ©
            <Link to="https://github.com/ChuNguyenChuong" target="_blank">
              Decode team.
            </Link>
          </p>
          <p style={{ marginBottom: "0" }}>
            Design & Develop by{" "}
            <Link to="https://www.facebook.com/cnchuongvenn/" target="_blank">
              Chuongcn
            </Link>
          </p>
        </div>
      </Row>
    </StyleFooter>
  );
};

export default FooterLayout;
