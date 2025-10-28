import React from "react";
import { NavLink } from "react-router-dom";

const baseLink =
  "inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-xl font-semibold">GovAssist</div>
        </div>

        <nav className="flex items-center gap-1">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${baseLink} ${
                isActive
                  ? "bg-slate-900 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`
            }
            aria-current="page"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${baseLink} ${
                isActive
                  ? "bg-slate-900 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/users"
            className={({ isActive }) =>
              `${baseLink} ${
                isActive
                  ? "bg-slate-900 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`
            }
          >
            Users
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
