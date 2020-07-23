import React from "react";
import Spin from "../images/spinner.gif";

const Spinner = () => {
  return (
    <img
      src={Spin}
      alt=""
      style={{ display: "block", margin: "auto", borderRadius: "30px" }}
    />
  );
};

export default Spinner;
