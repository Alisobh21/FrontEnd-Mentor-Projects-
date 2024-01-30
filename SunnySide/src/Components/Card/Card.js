import React from "react";
import "./Card.css";
function Card({ h1, p, c }) {
  return (
    <div className={`card ${c}`}>
      <h1>{h1}</h1>
      <p>{p}</p>
      <a href="##">Learn More</a>
    </div>
  );
}

export default Card;
