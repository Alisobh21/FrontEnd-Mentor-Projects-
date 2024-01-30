import React from "react";

function Social() {
  return (
    <div className="content">
      <div className="social">
        <div className="social-items">
          <img src="logo.svg" alt="" />
          <div className="icons">
            <ul className="social-ul">
              <li>
                <img src="icon-facebook.svg" alt="" />
              </li>
              <li>
                <img src="icon-twitter.svg" alt="" />
              </li>
              <li>
                <img src="icon-pinterest.svg" alt="" />
              </li>
              <li>
                <img src="icon-instagram.svg" alt="" />
              </li>
            </ul>
          </div>
        </div>
        <hr className="hr-social" />
      </div>
    </div>
  );
}

export default Social;
