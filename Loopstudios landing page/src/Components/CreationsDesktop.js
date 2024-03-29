import React, { useState } from "react";
import data from "../data.desktop";

function CreationsDesktop() {
  const [cards, setCards] = useState(data);
  return (
    <section className="creations-desktop">
      <div className="title">
        <h2>Our Creations</h2>
        <div className="btn-container">
          <button className="btn">See All</button>
        </div>
      </div>
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
    </section>
  );
}

export default CreationsDesktop;
