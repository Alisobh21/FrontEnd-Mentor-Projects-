import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Work from "./Components/Work";
import Social from "./Components/Social";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="container">
      <Header />

      <Hero />
      <Services />

      <Work />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
