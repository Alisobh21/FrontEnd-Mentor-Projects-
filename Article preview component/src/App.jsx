import "./App.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="image">
          <img src="drawers.jpg" alt="Draw" />
        </div>
        <div className="info">
          <h1>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home.
          </h1>
          <p>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
          <figure className="profile">
            <img src="avatar-michelle.jpg" alt="Profile" />
            <figcaption>
              <h2>Michelle Appleton</h2>
              <p>28 Jun 2020</p>
            </figcaption>
            <div className="share">
              <Link
                to="#"
                className={`button-share ${show ? "active" : ""} `}
                onClick={() => setShow(!show)}
              >
                <img src="icon-share.svg" alt="Share Button" />
              </Link>
              <div className={`social-media ${show ? "social-active" : ""} `}>
                <span>Share</span>
                <Link to="https://facebook.com" target="_blank">
                  <img src="icon-facebook.svg" alt="Facebook Icon Button" />
                </Link>
                <Link to="https://twitter.com" target="_blank">
                  <img
                    src="icon-twitter.svg"
                    alt="Twitter Icon Button"
                    target="_blank"
                  />
                </Link>
                <Link to="https://pinterest.com" target="_blank">
                  <img src="icon-pinterest.svg" alt="Pinterest Icon Button" />
                </Link>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default App;
