import React from "react";
import "./RegSuccess.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Link } from "react-router-dom";

const RegSuccess = () => {
  return (
    <div className="success-container">
      <div className="success-wrap">
        <h3>You have successfully registered for this event!</h3>

        <CheckCircleIcon className="check-circle" />
      </div>
      <Link to="/">
        <button className="success-btn"> Go Home</button>
      </Link>
    </div>
  );
};

export default RegSuccess;
