import OverlaySearch from "@/component/Search/OverlaySearch";
import { useState } from "react";
import HeaderClient from "./HeaderClient";
import FooterClient from "./FooterClient";
import { Outlet } from "react-router-dom";
import HomePage from "@/modules/HomePage/pages/HomePage";


const UserLayout = () => {
  const [showSearch, setShowSearch] = useState(false)
  return (
    <div className="min-h-screen overflow-x-hidden">
        <OverlaySearch  isActive={showSearch} OnClose={() => setShowSearch(false)}/>
        <HeaderClient onSearchClick={() => setShowSearch(true)}/>
        <HomePage />
        <FooterClient/>
    </div>
  );
};

export default UserLayout;