import React, { useState } from "react";
import data from "../data.mobile";

function Creations() {
  const [cards, setCards] = useState(data);
  return (
    <section className="creations-mobile">
      <h2>Our Creations</h2>
      <section>
        {cards.map((card) => {
          const { id, img, title } = card;
          return (
            <article key={id}>
              <div>
                <img src={img} alt={title} />
              </div>
              <h3>{title}</h3>
            </article>
          );
        })}
      </section>
      <div className="btn-container">
        <button className="btn">See All</button>
      </div>
    </section>
  );
}

export default Creations;
