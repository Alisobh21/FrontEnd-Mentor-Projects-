import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <img src="bg-pattern-card.svg" alt="Card" />
        <div className="content">
          <img src="Ali2.png" alt="Profile" />
          <h2>
            Ali Hassan <span>27</span>
          </h2>
          <p>Cairo</p>
          <div className="footer">
            <div>
              <p className="num">80K</p>
              <p> Followers</p>
            </div>
            <div>
              <p className="num">803K</p>
              <p> Likes</p>
            </div>
            <div>
              <p className="num"> 300</p>
              <p> Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
