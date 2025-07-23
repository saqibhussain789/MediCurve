import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen bg-[#F5F7FA]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#2A7D9B] text-white p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-6">MediCurve</h2>
        <nav className="space-y-2">
          <Link to="/dashboard" className="block hover:text-[#F2B138]">Dashboard</Link>
          <Link to="/add-entry" className="block hover:text-[#F2B138]">Add Entry</Link>
          <Link to="/history" className="block hover:text-[#F2B138]">History</Link>
          <Link to="/stats" className="block hover:text-[#F2B138]">Stats</Link>
          <Link to="/profile" className="block hover:text-[#F2B138]">Profile</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
