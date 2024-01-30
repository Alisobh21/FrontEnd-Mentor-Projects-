import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <img src="logo.svg" alt="Logo" className="logo" />

        <div className="top">
          <h1>
            We are launching <span>soon!</span>
          </h1>
          <p>Subscribe and get notified</p>
        </div>
        <div className="sub">
          <form action="">
            <input type="email" placeholder="Your email address" />
            <button type="submit">Notify Me</button>
          </form>
        </div>
        <img src="illustration-dashboard.png" alt="Dashbord" className="dash" />
        <div className="social">
          <li>
            <a href="##">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="##">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="##">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </div>
      </div>
    </div>
  );
}

export default App;
