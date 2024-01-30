import { useState } from "react";
import "./App.css";
import QRCode from "react-qr-code";

function App() {
  const [text, setText] = useState("Ali Hassan");
  return (
    <div className="container">
      <div className="card">
        <QRCode
          style={{
            maxHeight: "90%",
            maxWidth: "90%",
            width: "100%",
          }}
          bgColor="#3685ff"
          fgColor="#fff"
          value={text}
        />

        <div className="text">
          <h2>Make Your Own QR Code For Projects</h2>
          <input
            className="txt"
            type="text"
            onChange={(e) => setText(e.target.value)}
            placeholder="Put your text here"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
