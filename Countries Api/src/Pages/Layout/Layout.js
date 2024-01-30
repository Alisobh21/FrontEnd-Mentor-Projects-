import React from "react";
// import SwitchCus from "../../Switch";
import Toggle from "../../component/Toggle";
import "./Layout.css";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function Layout() {
  const check = useSelector((state) => state.country.check);
  return (
    <div className={`${check ? "dark" : "light"}`}>
      <nav className={`${check ? "elementDark" : "elementLight"}`}>
        <h1>Where in the world? </h1>
        <Toggle />
      </nav>

      <Outlet />
    </div>
  );
}
export default Layout;
