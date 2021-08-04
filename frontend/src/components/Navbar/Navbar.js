import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <>
      <nav className="navbarItems">
        <div className="desktop">
          <div className="left-side-nav">
            <Link to="/">
              <h1 className="navbarLogo">eventGo</h1>
            </Link>
          </div>

          <div className="rightside-nav">
            <Link to="/create-event">
              <li className="nav-links" onClick={closeMobileMenu}>
                Create Event
              </li>
            </Link>
            <Link to="/sign-up">
              <li className="nav-links" onClick={closeMobileMenu}>
                Sign up
              </li>
            </Link>
          </div>

          <div className="hamburger-menu">
            <div
              onClick={handleClick}
              className={click ? "line line-1 change " : "line line-1"}
            ></div>
            <div
              onClick={handleClick}
              className={click ? " line line-2 change" : "line line-2"}
            ></div>
            <div
              onClick={handleClick}
              className={click ? "line line-3 change" : "line line-3"}
            ></div>
          </div>
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <Link to="/create-event">
            <li className="nav-links" onClick={closeMobileMenu}>
              Create Event
            </li>
          </Link>
          <Link to="/sign-up">
            <li className="nav-links" onClick={closeMobileMenu}>
              Sign up
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
