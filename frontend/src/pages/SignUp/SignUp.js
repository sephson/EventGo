import "./SignUp.css";
import React, { useRef } from "react";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../actions/userActions";

const SignUp = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const userSignup = useSelector((state) => state.userSignup);
  const { loading, error, userInfo } = userSignup;
  console.log(error, loading);
  const dispatch = useDispatch();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password.current.value !== passwordAgain.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };

      dispatch(signup(user.username, user.email, user.password));
    }
  };
  return (
    <>
      <div className="signup">
        <form onSubmit={handleSignup} className="signup-container">
          <h2 className="signup-logo">eventgo</h2>
          <input
            ref={username}
            className="signup-input"
            placeholder="Username"
          />

          <input ref={email} className="signup-input" placeholder="Email" />
          <input
            className="signup-input"
            placeholder="Password"
            ref={password}
            minLength={5}
          />
          <input
            className="signup-input"
            placeholder="PasswordAgain"
            ref={passwordAgain}
          />
          <button type="submit" className="signup-button">
            Sign Up
          </button>
          <Link to="/sign-in">
            <p> already have an account ? </p>
          </Link>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
