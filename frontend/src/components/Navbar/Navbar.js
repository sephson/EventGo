import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { signout } from "../../actions/userActions";
import "./Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const [openDropDown, setOpenDropDown] = useState(false);

  const closeMobileMenu = () => {
    setClick(false);
  };

  const signOutHandler = () => {
    dispatch(signout())
  }

  return (
    <main className="navbar-main-wrapper">
      <nav className="navbarItems">
        <div className="desktop">
          <div className="left-side-nav">
            <Link to="/">
              <h1 className="navbarLogo">eventgo</h1>
            </Link>
          </div>

          <div className="rightside-nav">
            <Link to="/create-event">
              <li className="nav-links" onClick={closeMobileMenu}>
                Create Event
              </li>
            </Link>
            {userInfo ? (
              <div className="ddmenu">
                <div
                  onClick={() => setOpenDropDown(!openDropDown)}
                  className="username-user"
                >
                  {userInfo?.user.username}
                </div>
                <ArrowDropDownIcon />
              </div>
            ) : (
              <Link to="/sign-up">
                <li className="nav-links" onClick={closeMobileMenu}>
                  Sign up
                </li>
              </Link>
            )}
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
          {userInfo ? (
            <>
              <Link to={`/dashboard`}>
                <li
                  className="nav-links"
                  onClick={closeMobileMenu}
                  // className="username-user"
                >
                  {userInfo?.user.username}
                </li>
              </Link>
              <li
                className="nav-links"
                onClick={(closeMobileMenu, signOutHandler)}
              >
                Logout
              </li>
            </>
          ) : (
            <Link to="/sign-up">
              <li className="nav-links" onClick={closeMobileMenu}>
                Sign up
              </li>
            </Link>
          )}
        </ul>
      </nav>
      <div className={openDropDown ? " dropdown " : "drop"}>
        <Link to={`/dashboard`}>
          <div className="drop-down-logout">Dashboard</div>
        </Link>
        <div onClick={signOutHandler} className="drop-down-logout">
          Logout
        </div>
      </div>
    </main>
  );
};

export default Navbar;
