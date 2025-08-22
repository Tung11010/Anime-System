import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

interface SidebarProps {
  onLogout: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((c) => !c);
  };

  return (
    <aside
      className={`bg-gray-900 text-white flex flex-col justify-between fixed top-0 left-0 h-screen transition-all duration-300 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div>
        <div className="h-16 flex items-center border-b border-gray-800 relative">
          <button
            className="absolute left-4 focus:outline-none"
            onClick={toggleSidebar}
            title={collapsed ? 'Mở rộng' : 'Thu gọn'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              />
            </svg>
          </button>
          <span
            className={`text-2xl font-bold mx-auto transition-opacity ${
              collapsed ? 'opacity-0 w-0' : ''
            }`}
          >
            Admin
          </span>
        </div>
        <nav className="flex-1 px-2 py-6 space-y-2">
          <Link
            to="/admin"
            className={`flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-800 ${
              collapsed ? 'justify-center' : ''
            }`}
          >
            {collapsed ? (
              <span className="text-lg">🏠</span>
            ) : (
              'Dashboard'
            )}
          </Link>
          <Link
            to="/admin/users"
            className={`flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-800 ${
              collapsed ? 'justify-center' : 'bg-gray-800 font-semibold'
            }`}
          >
            {collapsed ? (
              <span className="text-lg">👤</span>
            ) : (
              'Users'
            )}
          </Link>
          <Link
            to="/admin/movies"
            className={`flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-800 ${
              collapsed ? 'justify-center' : ''
            }`}
          >
            {collapsed ? (
              <span className="text-lg">🎬</span>
            ) : (
              'Movies'
            )}
          </Link>
          <Link
            to="/admin/blog"
            className={`flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-800 ${
              collapsed ? 'justify-center' : ''
            }`}
          >
            {collapsed ? (
              <span className="text-lg">📝</span>
            ) : (
              'Episodes'
            )}
          </Link>
          <Link
            to="/admin/blog"
            className={`flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-800 ${
              collapsed ? 'justify-center' : ''
            }`}
          >
            {collapsed ? (
              <span className="text-lg">📝</span>
            ) : (
              'Blogs'
            )}
          </Link>
        </nav>
      </div>
      <Button
        variant="danger"
        className={`m-4 ${collapsed ? 'w-12 justify-center' : ''}`}
        onClick={onLogout}
      >
        {collapsed ? <span>🚪</span> : 'Logout'}
      </Button>
    </aside>
  );
};