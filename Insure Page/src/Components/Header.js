import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import React, { useState } from "react";
function Header() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="top">
      <div className="content header">
        <div>
          <img src="logo.svg" alt="Logo" />
        </div>
        <div>
          {toggle ? (
            <IoMenuSharp className="icon" onClick={() => setToggle(!toggle)} />
          ) : (
            <IoClose className="icon" onClick={() => setToggle(!toggle)} />
          )}

          <ul className="list">
            <li>How We work</li>
            <li>Blog</li>
            <li>Account</li>
            <li>
              <button>View Plans</button>
            </li>
          </ul>
        </div>
      </div>
      {toggle ? (
        <></>
      ) : (
        <ul className="list-mobile">
          <li>How We work</li>
          <li>Blog</li>
          <li>Account</li>
          <li>
            <button className="btn-list">View Plans</button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
