import "./SignIn.css";
import React from "react";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <div className="signup">
        <div className="signup-container">
          <h2 className="signup-logo">eventgo</h2>
          <input className="signup-input" placeholder="Email" type="email" />
          <input
            className="signup-input"
            placeholder="Password"
            type="password"
          />

          <button className="signup-button">Sign In</button>
          <Link to="/sign-up">
            <p> don't have an account ? </p>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
