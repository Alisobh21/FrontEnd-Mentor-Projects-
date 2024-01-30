import React from "react";

function Card({ title, annual, month, advangtage, check, i }) {
  return (
    <div className={`pricing-box ${i === 1 ? "featured" : ""}`}>
      <p className="box-title">{title}</p>
      <p className={`price-annually ${check ? " show" : ""}`}>
        &#36;<span className="price">{annual}</span>
      </p>
      <p className={`price-monthly${check ? "" : " show"}`}>
        &#36;<span className="price">{month}</span>
      </p>
      <ul>
        {advangtage.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
      <a href="##">Learn More</a>
    </div>
  );
}

export default Card;
