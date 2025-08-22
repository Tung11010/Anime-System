import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Link } from "react-router-dom";

const data = [
  { name: "Mon", uv: 400, pv: 240, amt: 2400 },
  { name: "Tue", uv: 300, pv: 139, amt: 2210 },
  { name: "Wed", uv: 200, pv: 980, amt: 2290 },
  { name: "Thu", uv: 278, pv: 390, amt: 2000 },
  { name: "Fri", uv: 189, pv: 480, amt: 2181 },
  { name: "Sat", uv: 239, pv: 380, amt: 2500 },
  { name: "Sun", uv: 349, pv: 430, amt: 2100 },
];

const widgets = [
  { title: "Visitors Today", value: "6,022", color: "bg-sky-400" },
  { title: "Follows", value: "1,023", color: "bg-sky-400" },
  { title: "Comments", value: "$8,221", color: "bg-yellow-400" },
  { title: "Active Users", value: "9,003", color: "bg-red-400" },
];

export default function Admin() {
  const [collapsed, setCollapsed] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [dark]);

  return (
    <div className={`flex min-h-screen bg-gray-100 dark:bg-gray-900`}>
      {/* Sidebar */}
      <aside className={`${collapsed ? "w-20" : "w-64"} bg-gray-900 text-white flex flex-col justify-between transition-all duration-300`}>
        <div>
          <div className="h-16 flex items-center border-b border-gray-800 relative">
            <button
              className="absolute left-4 focus:outline-none"
              onClick={() => setCollapsed(c => !c)}
              title={collapsed ? "Mở rộng" : "Thu gọn"}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
            </button>
            <span className={`text-2xl font-bold mx-auto ${collapsed ? "" : ""}`}>{collapsed ? "A" : "Admin"}</span>
          </div>
          <nav className="flex-1 px-2 py-6 space-y-2">
            <Link
              to="/admin"
              className={`flex items-center gap-3 py-2 px-3 rounded ${!collapsed ? "bg-gray-800 font-semibold" : "justify-center"}`}
            >
              {collapsed ? <span className="text-lg">🏠</span> : "Dashboard"}
            </Link>
            <Link
              to="/admin/users"
              className={`flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-800 ${collapsed ? "justify-center" : ""}`}
            >
              {collapsed ? <span className="text-lg">👤</span> : "Users"}
            </Link>
            <Link
              to="/admin/movies"
              className={`flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-800 ${collapsed ? "justify-center" : ""}`}
            >
              {collapsed ? <span className="text-lg">👤</span> : "Movies"}
            </Link>
            <Link
              to="/admin/episodes"
              className={`flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-800 ${collapsed ? "justify-center" : ""}`}
            >
              {collapsed ? <span className="text-lg">📝</span> : "Episodes"}
            </Link>
            <Link
              to="/admin/blogs"
              className={`flex items-center gap-3 py-2 px-3 rounded hover:bg-gray-800 ${collapsed ? "justify-center" : ""}`}
            >
              {collapsed ? <span className="text-lg">📝</span> : "Blogs"}
            </Link>
          </nav>
        </div>
        <button
          className={`m-4 py-2 ${collapsed ? "px-2 text-xs" : "px-4"} bg-red-600 hover:bg-red-700 rounded text-white font-semibold w-auto`}
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
          }}
        >
          {collapsed ? <span className="text-lg">⏻</span> : "Logout"}
        </button>
      </aside>
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white dark:bg-gray-800 shadow flex items-center justify-between px-8">
          <div className="text-xl font-bold dark:text-white">Dashboard</div>
          <div className="flex items-center space-x-4">
            <button
              className="focus:outline-none"
              onClick={() => setDark(d => !d)}
              title={dark ? "Chế độ sáng" : "Chế độ tối"}
            >
              {dark ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-yellow-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 19.5V21M4.219 4.219l1.061 1.061M17.657 17.657l1.061 1.061M3 12h1.5M19.5 12H21M4.219 19.781l1.061-1.061M17.657 6.343l1.061-1.061M12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0 1 12 21.75c-5.385 0-9.75-4.365-9.75-9.75 0-4.136 2.635-7.64 6.348-9.123a.75.75 0 0 1 .908.325.75.75 0 0 1-.082.976A7.501 7.501 0 0 0 12 19.5a7.48 7.48 0 0 0 6.072-3.075.75.75 0 0 1 .976-.082.75.75 0 0 1 .325.908z" />
                </svg>
              )}
            </button>
            <span className="text-gray-600 dark:text-gray-200">admin@example.com</span>
            <img src="https://i.pravatar.cc/40" alt="avatar" className="rounded-full w-10 h-10" />
          </div>
        </header>
        {/* Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8">
          {widgets.map((w, i) => (
            <div key={i} className={`rounded-lg shadow p-6 text-white ${w.color} flex flex-col justify-between dark:bg-gray-800 dark:text-white transition-colors`}>
              <div className="text-lg font-semibold">{w.title}</div>
              <div className="text-3xl font-bold mt-2">{w.value}</div>
              <div className="mt-4 opacity-60 text-xs">Compared to last week</div>
            </div>
          ))}
        </div>
        {/* Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow mx-8 mb-8 p-6 transition-colors">
          <div className="text-lg font-bold mb-4 dark:text-white">Traffic</div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}