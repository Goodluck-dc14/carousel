import react, { useState } from "react";
import Header from "../Header/Header";
import BodyHolder from "../Homes/BodyHolder";
import MainBody from "../Homes/MainBody";

// import HomeScreen from "../Homes/HomeScreen";

const Structure = () => {
  const [change, setChange] = useState(false);
  const getPosition = () => {
    if (window.scrollY >= 80) {
      setChange(true);
    } else {
      setChange(false);
    }
  };
  window.addEventListener("scroll", getPosition);
  return (
    <div>
      <Header clr={change ? "#1D8CF8" : "#040714"} />
      {/* <HomeScreen /> */}
      <BodyHolder />
      <MainBody />
    </div>
  );
};

export default Structure;
