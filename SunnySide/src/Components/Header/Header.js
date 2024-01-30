import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [show, setShow] = useState(false);
  return (
    <div className="header">
      <div className="h-left">
        <img src="logo.svg" alt="Logo" />
      </div>
      <div className="h-right">
        <nav className="desktop">
          <a href="##">About</a>
          <a href="##">Services</a>
          <a href="##">Projects</a>
          <button>Contact</button>
        </nav>
      </div>
      <div className="mobile">
        <img src="icon-hamburger.svg" alt="" onClick={() => setShow(!show)} />
        {show && (
          <nav className="mobile-links">
            <a href="##" onClick={() => setShow(!show)}>
              About
            </a>
            <a href="##" onClick={() => setShow(!show)}>
              Services
            </a>
            <a href="##" onClick={() => setShow(!show)}>
              Projects
            </a>
            <button onClick={() => setShow(!show)}>Contact</button>
          </nav>
        )}
      </div>
    </div>
  );
}

export default Header;
