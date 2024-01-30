import "./App.css";
import Header from "./Components/Header";
import Showcase from "./Components/Showcase";
import Interactive from "./Components/Interactive";
import Creations from "./Components/Creations";
import Footer from "./Components/Footer";
import CreationsDesktop from "./Components/CreationsDesktop";
function App() {
  return (
    <div>
      <Header />
      <Showcase />
      <Interactive />
      <CreationsDesktop />
      <Creations />

      <Footer />
    </div>
  );
}

export default App;
