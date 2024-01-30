import React from "react";
function Header() {
  const showNav = () => {
    const menuBtn = document.querySelector(".menu-btn");
    const navbar = document.querySelector("nav");

    menuBtn.addEventListener("click", () => {
      navbar.classList.toggle("open");
      menuBtn.classList.toggle("rotate");
    });
  };
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
      </div>
      <nav>
        <div className="nav-logo">
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
      </nav>
      <div className="menu-btn" onClick={() => showNav()}>
        <div className="bar bar-1"></div>
        <div className="bar bar-2"></div>
        <div className="bar bar-3"></div>
      </div>
    </header>
  );
}

export default Header;
