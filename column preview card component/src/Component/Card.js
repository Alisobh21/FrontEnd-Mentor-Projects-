import React from "react";

function Card({ img, title, p, i }) {
  return (
    <div className={`box box${i + 1}`}>
      <img src={img} alt="SEDANS" />
      <h2>{title}</h2>
      <p>{p}</p>
      <a href="##">Learn More</a>
    </div>
  );
}

export default Card;
