import React from "react";
import "./box.css";

function Box({ number, text }) {
  return (
    <div>
      <p className="num">{number}</p>
      <p className="txt">{text}</p>
    </div>
  );
}

export default Box;
