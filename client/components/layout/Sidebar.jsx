import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  PlusCircle,
  History,
  BarChart2,
  User,
} from "lucide-react";
import Logo from "../../src/assets/logo.png";

const navLinks = [
  { to: "/dashboard", label: "Dashboard", icon: <LayoutDashboard /> },
  { to: "/add-entry", label: "Add Entry", icon: <PlusCircle /> },
  { to: "/history", label: "History", icon: <History /> },
  { to: "/stats", label: "Stats", icon: <BarChart2 /> },
  { to: "/profile", label: "Profile", icon: <User /> },
];

const Sidebar = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1e293b] text-white shadow-md flex flex-col">
        {/* Logo section */}
        <div className="flex items-center justify-center gap-2 px-4 py-4">
          <img src={Logo} alt="MediCurve Logo" className="w-30" />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2 px-4 py-4">
          {navLinks.map((link) => (
            <NavLink
              to={link.to}
              key={link.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-md transition duration-200 
           ${isActive ? "bg-[#334155]" : "hover:bg-[#475569]"}`
              }
            >
              {link.icon}
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
