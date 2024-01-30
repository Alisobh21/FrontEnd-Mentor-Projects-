import "./App.css";
import Top from "./Components/Top";
import Future from "./Components/Future";
import Mobile from "./Components/Mobile";
import Laptop from "./Components/Laptop";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="container">
      <Top />
      <Future />
      <Mobile />
      <Laptop />
      <Footer />
    </div>
  );
}

export default App;
