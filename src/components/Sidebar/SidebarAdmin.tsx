import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/Button/ButtonAdmin";
import {
  LayoutDashboard,
  Users,
  Film,
  ListVideo,
  NotebookText,
  LogOut,
  Menu,
} from "lucide-react";

interface SidebarProps {
  onLogout: () => void;
  onToggle?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onLogout, onToggle }) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setCollapsed((c) => !c);
    if (onToggle) onToggle();
  };

  // Danh sách menu với màu icon riêng
  const menuItems = [
    { to: "/admin", label: "Dashboard", icon: LayoutDashboard, color: "text-green-400" },
    { to: "/admin/users", label: "Users", icon: Users, color: "text-blue-400" },
    { to: "/admin/movies", label: "Movies", icon: Film, color: "text-purple-400" },
    { to: "/admin/episodes", label: "Episodes", icon: ListVideo, color: "text-yellow-400" },
    { to: "/admin/blogs", label: "Blogs", icon: NotebookText, color: "text-pink-400" },
  ];

  return (
    <aside
      className={`bg-gray-900 text-white flex flex-col justify-between fixed top-0 left-0 h-screen transition-all duration-300 shadow-lg ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <div>
        {/* Header */}
        <div className="h-16 flex items-center border-b border-gray-800 relative">
          <button
            className="absolute left-4 focus:outline-none"
            onClick={toggleSidebar}
            title={collapsed ? "Mở rộng" : "Thu gọn"}
          >
            <Menu className="w-7 h-7 text-gray-300 hover:text-white transition-colors" />
          </button>
          <span
            className={`text-2xl font-bold mx-auto transition-opacity ${
              collapsed ? "opacity-0 w-0" : ""
            }`}
          >
            Admin
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 py-6 space-y-2">
          {menuItems.map(({ to, label, icon: Icon, color }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-3 py-2 px-3 rounded transition-all duration-200 ${
                  collapsed ? "justify-center" : ""
                } ${
                  isActive
                    ? "bg-gray-800 font-semibold"
                    : "hover:bg-gray-800 hover:scale-[1.02]"
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${color} ${
                    isActive ? "drop-shadow-md" : "opacity-80"
                  }`}
                />
                {!collapsed && label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout */}
      <Button
        variant="danger"
        className={`m-4 flex items-center gap-2 ${
          collapsed ? "w-12 justify-center" : ""
        }`}
        onClick={onLogout}
      >
        <LogOut className="w-5 h-5 text-red-400" />
        {!collapsed && "Logout"}
      </Button>
    </aside>
  );
};
