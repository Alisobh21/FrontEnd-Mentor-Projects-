import "./App.css";
import Box from "./Box";

function App() {
  return (
    <div className="container">
      <header>
        <h2>Reliable, efficient delivery</h2>
        <h3>Powered by Technology</h3>
        <p>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </header>
      <section className="main ">
        <Box
          h="Supervisor"
          p="Monitors activity to identify project roadblocks"
          clss="box1"
          img="icon-supervisor.svg"
        />

        <div className="box-container">
          <Box
            h="Team Builder"
            p="Scans our talent network to create the optimal team for your
                project"
            clss="box2"
            img="icon-team-builder.svg"
          />
          <Box
            h="Karma"
            p="Regularly evaluates our talent to ensure quality"
            clss="box3"
            img="icon-karma.svg"
          />
        </div>

        <Box
          h="Calculator"
          p="Uses data from past projects to provide better delivery estimates"
          clss="box4"
          img="icon-calculator.svg"
        />
      </section>
    </div>
  );
}

export default App;
