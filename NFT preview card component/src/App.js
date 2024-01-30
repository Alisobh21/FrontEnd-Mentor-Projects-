import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="img-top">
          <img src="image-equilibrium.jpg" alt="Top" />
          <div className="img-overlay">
            <img src="icon-view.svg" alt="icon" />
          </div>
        </div>

        <div className="box-text">
          <a href="##">Equilibrium #3429</a>
          <p>Our Equilibrium collection promotes balance and calm.</p>
          <div className="flex">
            <div className="eth">
              <img src="icon-ethereum.svg" alt="ethereum" />
              <p>0.041 ETH</p>
            </div>
            <div className="days">
              <img src="icon-clock.svg" alt="clock" />
              <p>3 days left</p>
            </div>
          </div>
          <hr />
          <div className="author">
            <img src="image-avatar.png" alt="" />
            <p>
              Creation of{" "}
              <a href="##" className="name">
                Jules Wyvern
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
