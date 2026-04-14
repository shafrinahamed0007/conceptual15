import React from "react";
import { NavLink } from "react-router";

const MyNavLink = ({to, children}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `font-semibold rounded-lg p-2 ${isActive ? "bg-[#00313C] underline underline-offset-1" : ""}`
      }
    >{children}</NavLink>
  );
};

export default MyNavLink;
