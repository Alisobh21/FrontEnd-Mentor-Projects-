import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="header">
          <img src="logo.svg" alt="Logo" />
        </div>
        <div className="main">
          <div className="hero-img">
            <img src="illustration-mockups.svg" alt="Main" />
          </div>
          <div className="hero-text">
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.{" "}
            </p>
            <a href="##">Register</a>
          </div>
        </div>
        <div className="social">
          <a href="##">
            <i className="fab fa-facebook-f b"></i>
          </a>
          <a href="##">
            <i className="fab fa-twitter b "></i>
          </a>
          <a href="##">
            <i className="fab fa-instagram b"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
