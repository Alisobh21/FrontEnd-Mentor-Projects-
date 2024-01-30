import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <div>
          <img src="logo.svg" alt="" />
        </div>

        <ul>
          <li>
            <button>About</button>
          </li>
          <li>
            <button>Careers</button>
          </li>
          <li>
            <button>Events</button>
          </li>
          <li>
            <button>products</button>
          </li>
          <li>
            <button>Support</button>
          </li>
        </ul>
      </div>

      <div>
        <ul className="social">
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaPinterest />
          </li>
          <li>
            <FaInstagram />
          </li>
        </ul>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Loopstudios. All rights reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
