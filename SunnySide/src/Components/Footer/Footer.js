import React from "react";
import "./Footer.css";

import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <img src="logo.svg" alt="" />
      <div className="links">
        <a href="##">About</a>
        <a href="##">Services</a>
        <a href="##">Projects</a>
      </div>
      <div className="icons">
        <FaFacebookSquare className="i" />
        <FaInstagram className="i" />
        <FaTwitter className="i" />
        <FaPinterest className="i" />
      </div>
    </div>
  );
}

export default Footer;
