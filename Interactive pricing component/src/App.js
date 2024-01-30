import { useState, useEffect } from "react";
import { Slider } from "@mui/material";
import Switch from "@mui/material/Switch";
import "./App.css";
import { createTheme } from "@mui/material/styles";

function App() {
  const [checked, setChecked] = useState(false);
  const [page, setPage] = useState(100);
  const [price, setPrice] = useState(16);
  const [value, setValue] = useState(2);
  const label = { inputProps: { "aria-label": "Switch demo" } };

  let theme = createTheme({
    palette: {
      primary: {
        main: "#10d5c2",
      },
      secondary: {
        main: "#fff",
      },
    },
  });

  const ChangeSlide = () => {
    if (checked) {
      switch (value) {
        case 0:
          setPage(10);
          setPrice(8 * 12 - 8 * 12 * 0.25);
          break;

        case 1:
          setPage(50);
          setPrice(12 * 12 - 12 * 12 * 0.25);
          break;
        case 2:
          setPage(100);
          setPrice(16 * 12 - 16 * 12 * 0.25);
          break;
        case 3:
          setPage(500);
          setPrice(24 * 12 - 24 * 12 * 0.25);
          break;
        case 4:
          setPage(1000000);
          setPrice(36 * 12 - 36 * 12 * 0.25);
          break;
        default:
          setPage(100);
          setPrice(16 * 12 - 16 * 12 * 0.25);
      }
    } else {
      switch (value) {
        case 0:
          setPage(10);
          setPrice(8);
          break;

        case 1:
          setPage(50);
          setPrice(12);
          break;
        case 2:
          setPage(100);
          setPrice(16);
          break;
        case 3:
          setPage(500);
          setPrice(24);
          break;
        case 4:
          setPage(1000000);
          setPrice(36);
          break;
        default:
          setPage(100);
          setPrice(16);
      }
    }
  };

  useEffect(() => {
    ChangeSlide(value);
  }, [value, checked]);
  return (
    <>
      <div className="title">
        <h1>Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial. No credit card required.</p>
      </div>

      <div className="container">
        <div className="wrapper">
          <div className="top-content">
            <div className="packages">
              <div className="pv">
                <p>
                  <span id="pageView">{page > 10000 ? "1M" : page} </span>
                  Pageviews
                </p>
              </div>
              <div className="cst">
                <p>
                  $<span id="cost">{price}</span>.00
                </p>
                <p className="time">/{checked ? "year" : "month"}</p>
              </div>
            </div>
            <div className="range-slider">
              <Slider
                defaultValue={2}
                sx={{
                  color: "#a5f3eb;",
                }}
                min={0}
                max={4}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className="billing">
              <p>Monthly Billing</p>
              <Switch
                className="sw"
                theme={theme}
                {...label}
                onClick={() => {
                  setChecked(!checked);
                }}
              />
              {/* <label className="switch">
                <input
                  type="checkbox"
                  name="billing"
                  id="billing"
                  onClick={() => {
                    setChecked(!checked);
                  }}
                />
                <span className="toggle-slider"></span>
              </label> */}
              <p>Yearly Billing</p>
              <p className="discount">25% discount</p>
            </div>
          </div>
          <hr />
          <div className="footer">
            <ul>
              <li>
                <img src="icon-check.svg" alt="Check" />
                Unlimited websites
              </li>
              <li>
                <img src="icon-check.svg" alt="Check" />
                100% data ownership
              </li>
              <li>
                <img src="icon-check.svg" alt="Check" />
                Email reports
              </li>
            </ul>
            <a href="##">Start my trial</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
