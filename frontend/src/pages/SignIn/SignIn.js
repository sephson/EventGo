import "./SignIn.css";
import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../../actions/userActions";
// import { useHistory } from "react-router-dom";

const SignIn = ({ location, history }) => {
  // let history = useHistory();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  // const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo?.success === true) {
      history.push("/");
    } else {
      history.push("/sign-in");
    }
  }, [history, userInfo]);

  const handleSignup = (e) => {
    e.preventDefault();

    dispatch(signin(email, password));
  };

  return (
    <>
      <div className="signup">
        <form onSubmit={handleSignup} className="signup-container">
          <h2 className="signup-logo">eventgo</h2>
          <input
            className="signup-input"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="signup-input"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button type="submit" className="signup-button">
            Sign In
          </button>
          <Link to="/sign-up">
            <p> don't have an account ? </p>
          </Link>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SignIn;
