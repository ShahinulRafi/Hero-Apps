import {
  faAppStoreIos,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="mt-10 mx-10">
      <h1 className="text-center font-bold text-4xl">We Build</h1>
      <h1 className="text-center font-bold text-4xl">
        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
          Productive
        </span>{" "}
        Apps
      </h1>

      <p className="mt-5 text-center">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br /> Our goal is to turn your
        ideas into digital experiences that truly make an impact.
      </p>
      <div className="mt-10 flex justify-center gap-5">
        <div className="btn btn-outline">
          <FontAwesomeIcon icon={faGooglePlay} />
          <Link to="https://play.google.com/store/games">
            <h1>Google Play</h1>
          </Link>
        </div>
        <div className="btn btn-outline">
          <FontAwesomeIcon icon={faAppStoreIos} />
          <Link to="https://www.apple.com/app-store/">
            <h1>App Store</h1>
          </Link>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <img src="/public/assets/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
