import React from "react";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
  return (
    <div className=" shadow ">
      <nav className="flex justify-between gap-4 items-center  py-4 container mx-auto ">
        <img src={logo} alt="" className="max-w-[40px]" />
        <ul className="flex justify-between gap-4 items-center">
          <li>
            <MyNavLink to={"/"}>Home</MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/apps"}>Apps</MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/installApps"}>Installation</MyNavLink>
          </li>
          
        </ul>

        <button className="btn btn-neutral">
          <FaGithub /> Contribute
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
