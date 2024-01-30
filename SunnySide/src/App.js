import "./App.css";
import Top from "./Components/Top/Top";
import Card from "./Components/Card/Card";
import Testimonials from "./Components/Testimonials/Testimonials";
import Images from "./Components/Images/Images";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="container">
      <Top />
      <div className="card-container">
        <Card
          c="card1"
          h1="Transform your brand"
          p=" We are a full-service creative agency specializing in helping brands
        grow fast. Engage your clients through compelling visuals that do most
        of the marketing for you."
        />
        <div className="card-img1"></div>
        <div className="card-img2"></div>

        <Card
          c="card2"
          h1=" Stand out to the right audience"
          p="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. "
        />
        <div className="card-img-mix  card-img3">
          <h3> Graphic design</h3>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
        <div className="card-img-mix  card-img4">
          <h3>Photography</h3>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
      <Testimonials />
      <Images />
      <Footer />
    </div>
  );
}

export default App;
