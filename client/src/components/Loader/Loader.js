import React from "react";
import ReactLoading from "react-loading";
import "./Loader.css";

const Loading = ({ type, color }) => (
  <ReactLoading
    className="loading"
    type={type}
    color={color}
    height={100}
    width={75}
  />
);

export default Loading;
