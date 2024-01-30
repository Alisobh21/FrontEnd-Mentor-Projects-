import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

import "./Header.css";
function Header() {
  return (
    <div className="content">
      <div className="header ">
        <h1>ALi Hassan</h1>
        <div className="icons">
          <a href="###">
            <FaFacebookSquare className="i" />
          </a>
          <a href="###">
            <IoLogoGithub className="i" />
          </a>
          <a href="###">
            <FaLinkedin className="i" />
          </a>
          <a href="###">
            <FaTwitter className="i" />
          </a>
        </div>
      </div>
      <img src="Ali1.png" alt="" />
    </div>
  );
}

export default Header;
