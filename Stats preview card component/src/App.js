import "./App.css";
import Box from "./component/box";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="text-component">
          <h1 className="title">
            Get <span>insights</span> that help your business grow.
          </h1>
          <p className="subtitle">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="stat-box">
            <Box number="10k+" text="companies" />
            <Box number="314" text="templates" />
            <Box number="12m+" text="queries" />
          </div>
        </div>
        <div className="img-component">
          <img src="image-header-desktop.jpg" alt="Header" />
        </div>
      </div>
    </div>
  );
}

export default App;
