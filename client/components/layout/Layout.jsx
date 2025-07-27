import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar on left */}
      <Sidebar />

      {/* Right section: Header + Main Content */}
      <div className="flex flex-col flex-1">
        <Header />

        <main className="p-6 bg-gray-100 overflow-auto flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
