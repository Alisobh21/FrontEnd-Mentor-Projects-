import React from "react";

function Box({ h, p, img, clss }) {
  return (
    <div className={`box ${clss}`}>
      <div className="box-text">
        <h5>{h} </h5>
        <p>{p}</p>
      </div>
      <img src={img} alt={h} />
    </div>
  );
}

export default Box;
