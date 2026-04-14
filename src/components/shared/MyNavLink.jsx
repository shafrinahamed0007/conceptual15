import React from "react";
import { NavLink } from "react-router";

const MyNavLink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `font-semibold rounded-lg p-2 ${isActive ? "bg-[#00313c] underline underline-offset-1" : ""}`
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default MyNavLink;
