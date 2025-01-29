import React from "react";
import { NavLink } from "react-router-dom";
import { User, FolderKanban } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <NavLink
            to="/"
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
          >
            Henry Liu
          </NavLink>
          <div className="flex space-x-8">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `flex items-center space-x-1 text-sm font-medium ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`
              }
            >
              <User size={18} />
              <span>About</span>
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `flex items-center space-x-1 text-sm font-medium ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`
              }
            >
              <FolderKanban size={18} />
              <span>Projects</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
