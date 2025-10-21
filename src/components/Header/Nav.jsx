// import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import { NavLink } from "react-router";
const Nav = () => {
  return (
    <nav className="mx-10 mt-10 md:flex md:justify-between items-center">
      <NavLink Link to="/home">
        <div class="flex justify-center md:mb-0 mb-6 md:justify-between items-center gap-2">
          <img src="/public/logo.png" className="h-10" alt="" />
          <h2 className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-bold text-xl text-transparent bg-clip-text">
            Hero.IO
          </h2>
        </div>
      </NavLink>
      <div className="flex justify-center md:mb-0 mb-6 gap-5">
        <NavLink
          Link
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#632EE3] underline font-semibold text-xl"
              : "font-semibold text-xl"
          }
        >
          Home
        </NavLink>
        <NavLink
          Link
          to="/apps"
          className={({ isActive }) =>
            isActive
              ? "text-[#632EE3] underline font-semibold text-xl"
              : "font-semibold text-xl"
          }
        >
          Apps
        </NavLink>
        <NavLink
          Link
          to="/installation"
          className={({ isActive }) =>
            isActive
              ? "text-[#632EE3] underline font-semibold text-xl"
              : "font-semibold text-xl"
          }
        >
          Installation
        </NavLink>
      </div>
      <a href="https://www.github.com/ShahinulRafi">
        <button className="btn btn-primary mx-auto flex md:justify-between items-center gap-1">
          <FontAwesomeIcon icon={faGithub} className="mt-[1px]"/>
          <h2 className="text-xl font-semibold">Contribute</h2>
        </button>
      </a>
    </nav>
  );
};

export default Nav;
