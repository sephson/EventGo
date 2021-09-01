import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { signin } from "../../actions/userActions";

const Navbar = () => {
  // const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

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
              <h1 className="navbarLogo">eventgo</h1>
            </Link>
          </div>

          <div className="rightside-nav">
            <Link to="/create-event">
              <li className="nav-links" onClick={closeMobileMenu}>
                Create Event
              </li>
            </Link>

            <>
              <div className="username-user">{userInfo?.user.username}</div>
            </>
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
          <Link to={`/dashboard`}>
            <li
              className="nav-links"
              onClick={closeMobileMenu}
              // className="username-user"
            >
              {userInfo?.user.username}
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
