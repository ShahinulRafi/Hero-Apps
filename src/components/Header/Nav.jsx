// import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from "react";
import { NavLink } from "react-router";
const Nav = () => {
  return (
    <nav className="flex justify-between items-center">
      <NavLink Link to="/home">
        <div class="flex justify-between items-center gap-2">
          <img src="/public/assets/logo.png" className="h-10" alt="" />
          <h2 className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-bold text-xl text-transparent bg-clip-text">Hero.IO</h2>
        </div>
      </NavLink>
      <div className="flex gap-5">
        <NavLink
          Link
          to="/home"
          className={({ isActive }) => (isActive ? "text-[#632EE3] underline font-semibold text-xl" : "font-semibold text-xl")}
        >
          Home
        </NavLink>
        <NavLink
          Link
          to="/apps"
          className={({ isActive }) => (isActive ? "text-[#632EE3] underline font-semibold text-xl" : "font-semibold text-xl")}
        >
          Apps
        </NavLink>
        <NavLink
          Link
          to="/installation"
          className={({ isActive }) => (isActive ? "text-[#632EE3] underline font-semibold text-xl" : "font-semibold text-xl")}
          
        >
          Installation
        </NavLink>
      </div>

      <button>
        <a href="www.github.com">
          <FontAwesomeIcon icon={faGithub} />
          <h2 className="text-xl font-semibold">Contribute</h2>
        </a>
      </button>
    </nav>
  );
};

export default Nav;
