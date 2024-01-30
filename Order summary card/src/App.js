import "./App.css";
function App() {
  return (
    <div className="container">
      <div className="hero">
        <img src="hero.svg" alt="Hero" />
      </div>
      <div className="text-content">
        <h2 className="title">Order Summary</h2>
        <p className="subtitle">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="box">
          <div className="left-box">
            <img src="icon-music.svg" alt="Music" />
            <div>
              <h5>Annual Plan</h5>
              <p>$59.99/year</p>
            </div>
          </div>
          <a href="##">Change</a>
        </div>
        <a href="##" className="proceed">
          Proceed to Payment
        </a>
        <a href="##" className="cancel">
          Cancel Order
        </a>
      </div>
    </div>
  );
}

export default App;
