import React from "react";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
  const navItem = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/apps",
      text: "Apps",
    },
    {
      path: "/installApps",
      text: "Installation",
    },
  ];
  return (
    <div className=" shadow ">
      <nav className="flex justify-between gap-4 items-center  py-4 container mx-auto ">
        <img src={logo} alt="" className="max-w-[40px]" />
        <ul className="flex justify-between gap-2 items-center">
          {
            navItem.map((item) =>(
              <MyNavLink to={item.path}>{item.text}</MyNavLink>
            ))
          }

        </ul>
        {/* <ul className="flex justify-between gap-4 items-center">
          <MyNavLink to={"/"}>Home</MyNavLink>
          <MyNavLink to={"/apps"}>Apps</MyNavLink>
          <MyNavLink to={"/installApps"}>Installation</MyNavLink>
        </ul> */}

        <button className="btn btn-neutral">
          <FaGithub /> Contribute
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
