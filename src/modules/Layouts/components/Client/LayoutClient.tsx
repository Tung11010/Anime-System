import OverlaySearch from "@/component/Search/OverlaySearch";
import { useState } from "react";
import HeaderClient from "./HeaderClient";
import FooterClient from "./FooterClient";
import { Outlet } from "react-router-dom";
import ScrollToTop from "@/component/Scroll/ScrollToTop";


const UserLayout = () => {
  const [showSearch, setShowSearch] = useState(false)
  return (
    <div className="min-h-screen overflow-x-hidden">
        <ScrollToTop/>
        <OverlaySearch  isActive={showSearch} OnClose={() => setShowSearch(false)}/>
        <HeaderClient onSearchClick={() => setShowSearch(true)}/>
        <Outlet />
        <FooterClient/>
    </div>
  );
};

export default UserLayout;