import "./App.css";
import Switch from "@mui/material/Switch";
import { createTheme } from "@mui/material/styles";
import { useState } from "react";
import Card from "./Component/Card";
function App() {
  const [check, setChecked] = useState(false);
  const info = [
    {
      title: "Basic",
      annual: "199.99",
      month: "19.99",
      advangtage: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
      check,
    },

    {
      title: "Professional",
      annual: "249.99",
      month: "24.99",
      advangtage: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
      check,
    },
    {
      title: "Master",
      annual: "399.99",
      month: "39.99",
      advangtage: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
      check,
    },
  ];

  const label = { inputProps: { "aria-label": "Switch demo" } };
  let theme = createTheme({
    palette: {
      primary: {
        main: "#a3a8f0",
      },
      secondary: {
        main: "#fff",
      },
    },
  });
  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="title">Our Pricing</h1>
        <div className="pricing">
          <p>Annually</p>
          <Switch
            theme={theme}
            {...label}
            onChange={() => setChecked(!check)}
          />
          <p>Monthly</p>
        </div>
        <div className="pricing-main">
          {info.map((data, i) => {
            return <Card key={i} {...data} i={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
