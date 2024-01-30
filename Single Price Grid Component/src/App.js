import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="box join">
          <h1>Join our community</h1>
          <h3>30-day, hassle-free money back guarantee</h3>
          <p>
            Gain access to our full library of tutorials along with expert code
            reviews.
          </p>
          <p>
            Perfect for any developers who are serious about honing their
            skills.
          </p>
        </div>
        <div className="box sub">
          <h2> Monthly Subscription </h2>
          <h5>
            <span className="price">&#36; 29</span>
            <span>per month</span>
          </h5>
          <p>Full access for less than &#36;1 a day</p>
          <a href="##">Sign Up</a>
        </div>
        <div className="box why">
          <h2>Why Us</h2>
          <ul>
            <li> Tutorials by industry experts</li>
            <li>Peer &amp; expert code review</li>
            <li>Coding exercises</li>
            <li> Access to our GitHub repos</li>
            <li>Community forum</li>
            <li> Flashcard decks</li>
            <li>New videos every week</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
