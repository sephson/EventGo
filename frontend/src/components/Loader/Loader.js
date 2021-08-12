import React from "react";
import ReactLoading from "react-loading";
import "./Loader.css";

const Loading = ({ type, color }) => (
  <ReactLoading
    className="loading"
    type={type}
    color={color}
    height={200}
    width={155}
  />
);

export default Loading;
