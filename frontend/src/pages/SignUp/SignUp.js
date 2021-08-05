import "./SignUp.css";
import React from "react";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="signup">
        <div className="signup-container">
          <input
            className="signup-input"
            placeholder="First Name"
            type="text"
          />
          <input className="signup-input" placeholder="Last Name" type="text" />
          <input className="signup-input" placeholder="Email" type="email" />
          <input
            className="signup-input"
            placeholder="Password"
            type="password"
          />
          <input
            className="signup-input"
            placeholder="PasswordAgain"
            type="password"
          />
          <button className="signup-button">Sign Up</button>
          <Link to="/sign-in">
            <p> already have an account ? </p>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
