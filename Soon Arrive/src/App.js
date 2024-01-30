import { useEffect, useState } from "react";
import "./App.css";
import { AiFillFacebook } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const countDown = () => {
  const endDate = new Date("Jan 30 , 2024 00:00:00");
  // const endDate = new Date().getTime() + 691200000;
  const now = new Date().getTime();
  const diffrence = endDate - now;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  let timeDays = Math.floor(diffrence / days);
  let timeHours = Math.floor((diffrence % days) / hours);
  let timeMinutes = Math.floor((diffrence % hours) / minutes);
  let timeSeconds = Math.floor((diffrence % minutes) / seconds);

  timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
  timeDays = timeDays < 10 ? "0" + timeDays : timeDays;
  timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
  timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;

  document.getElementById("days").innerHTML = timeDays;
  document.getElementById("hours").innerHTML = timeHours;
  document.getElementById("minutes").innerHTML = timeMinutes;
  document.getElementById("seconds").innerHTML = timeSeconds;
};

function App() {
  const interval = setInterval(countDown, 1000);

  return (
    <div className="container">
      <h1>We're launching soon</h1>

      <div className="content">
        <div className="box">
          <div className="card">
            <div className="dot dot1"></div>
            <span id="days">08</span>
            <div className="dot dot2"></div>
          </div>

          <p>Days</p>
        </div>
        <div className="box">
          <div className="card">
            <div className="dot dot1"></div>
            <span id="hours">23</span>
            <div className="dot dot2"></div>
          </div>

          <p> Hours</p>
        </div>
        <div className="box">
          <div className="card">
            <div className="dot dot1"></div>
            <span id="minutes">23</span>
            <div className="dot dot2"></div>
          </div>

          <p>Minutes</p>
        </div>
        <div className="box">
          <div className="card">
            <div className="dot dot1"></div>
            <span id="seconds">59</span>
            <div className="dot dot2"></div>
          </div>

          <p>Seconds</p>
        </div>
      </div>
      <div className="icons">
        <AiFillFacebook className="i" />

        <FaPinterest className="i" />

        <FaInstagram className="i" />
      </div>
    </div>
  );
}

export default App;
