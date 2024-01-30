import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <div className="hero">
      <div className="content h-contianer">
        <div className="h-left">
          <h1>
            Nice to meet you! i'm <br className="br" />
            <span className="s">Ali Hassan.</span>
          </h1>
          <p>
            Based in EGYPT, I'm a front-end developer passionate about building
            accessible web apps that users love.
          </p>

          <a href="###">Contact Me</a>
        </div>
        <div className="h-right">
          <img src="Oval.svg" alt="" />
        </div>
      </div>
      <hr className="hr-hero" />
      <div className="content skills">
        <div className="card">
          <p className="skill"> HTML</p>
          <p className="time">4 Years Experience</p>
        </div>

        <div className="card">
          <p className="skill"> CSS</p>
          <p className="time">4 Years Experience</p>
        </div>

        <div className="card">
          <p className="skill"> JavaScript</p>
          <p className="time">4 Years Experience</p>
        </div>

        <div className="card">
          <p className="skill"> Accessibility</p>
          <p className="time">4 Years Experience</p>
        </div>

        <div className="card">
          <p className="skill"> React</p>
          <p className="time">3 Years Experience</p>
        </div>

        <div className="card">
          <p className="skill"> Sass</p>
          <p className="time">4 Years Experience</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
