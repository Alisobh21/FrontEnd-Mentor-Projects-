import "./Toggle.css";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { DarkMode } from "../store/countrySlicer";
import { useSelector, useDispatch } from "react-redux";

const Toggle = () => {
  const check = useSelector((state) => state.country.check);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(DarkMode());
  };
  return (
    <div
      className={`toggle ${check ? "" : "toggleLight"}`}
      onClick={handleClick}
    >
      <Moon />
      <Sun />
      <div
        className={`t-button ${check ? "" : "t-buttonLight"}`}
        style={check ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
