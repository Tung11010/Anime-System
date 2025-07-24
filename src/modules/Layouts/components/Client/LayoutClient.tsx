import OverlaySearch from "@/component/Search/OverlaySearch";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderClient from "./HeaderClient";
import FooterClient from "./FooterClient";


const UserLayout = () => {
  const [showSearch, setShowSearch] = useState(false)
  return (
    <div className='user-layout'>
        <OverlaySearch  isActive={showSearch} OnClose={() => setShowSearch(false)}/>
        <HeaderClient onSearchClick={() => setShowSearch(true)}/>
        <Outlet />
        <FooterClient/>
    </div>
  );
};

export default UserLayout;