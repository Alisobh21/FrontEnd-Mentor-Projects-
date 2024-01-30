import React from "react";
import "./Footer.css";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <div className="content">
        <hr className="f-hr" />
        <div className="f-all">
          <div className="f-left">
            <h1>ALi Hassan</h1>
          </div>
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
      </div>
    </div>
  );
}

export default Footer;
