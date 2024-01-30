import "./App.css";
import Card from "./Component/Card";

function App() {
  const cards = [
    {
      img: "icon-sedans.svg",
      title: "Sedans",
      p: `Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.`,
    },
    {
      img: "icon-suvs.svg",
      title: "SUVs",
      p: ` Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.`,
    },
    {
      img: "icon-luxury.svg",
      title: "Luxury",
      p: `  Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.`,
    },
  ];

  return (
    <div className="container">
      <div className="wrapper">
        {cards.map((card, i) => (
          <Card title={card.title} img={card.img} p={card.p} i={i} key={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
