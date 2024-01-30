import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import Country from "./Pages/Country/Country";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="country/:id" element={<Country />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
