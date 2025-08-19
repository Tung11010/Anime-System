import OverlaySearch from "@/components/Search/OverlaySearch";
import { useEffect, useState } from "react";
import HeaderClient from "./HeaderClient";
import FooterClient from "./FooterClient";
import { Outlet } from "react-router-dom";
import ScrollToTop from "@/components/Scroll/ScrollToTop";




const UserLayout = () => {
  const [showSearch, setShowSearch] = useState(false)
  useEffect(() => {
    if (showSearch) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showSearch]);
  return (
    <div className="min-h-screen overflow-x-hidden">
        <ScrollToTop />
        <OverlaySearch  isActive={showSearch} OnClose={() => setShowSearch(false)}/>
        <HeaderClient onSearchClick={() => setShowSearch(true)}/>
        <Outlet/>
        <FooterClient/>
    </div>
  );
};

export default UserLayout;