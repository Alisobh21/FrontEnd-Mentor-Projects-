import React from "react";

function Hero() {
  return (
    <div className="hero">
      <img
        className="img-left"
        src="bg-pattern-intro-left-desktop.svg"
        alt=""
      />

      <div className="content hero-content">
        <div className="left">
          <hr />
          <h2>Humanizing your insurance.</h2>
          <p className="hero-p">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <button className="hero-btn">View Plans</button>
        </div>
        <div className="right">
          <img className="person" src="image-intro-desktop.jpg" alt="" />
        </div>
      </div>
      <img
        className="img-right"
        src="bg-pattern-intro-right-desktop.svg"
        alt=""
      />
    </div>
  );
}

export default Hero;
