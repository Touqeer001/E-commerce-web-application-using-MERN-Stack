import React from "react";
import { NavLink } from "react-router-dom";
// import { SiShopee } from "react-icons/si.... ";
import { SiShopee } from "react-icons/si";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  // Check authentication state
  const [userAuth] = useAuthState(auth);
  const handleLogout = () => {
    auth.signOut();
  };

  const truncateUsername = (username, maxLength) => {
    if (!username) {
      return ""; // or handle the case where username is null or undefined
    }
    if (username.length <= maxLength) {
      return username;
    } else {
      return username.slice(0, maxLength) + "...";
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <NavLink
              to="/"
              className="navbar-brand"
              href="#"
              style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}
            >
              <SiShopee style={{ fontSize: "40" }}></SiShopee>E-Commerce App
            </NavLink>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  style={{ color: "white" }}
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  <button type="button" class="btn btn-primary">
                    Home
                  </button>
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  to="/PageNotFound"
                  className="nav-link"
                  href="#"
                  style={{ color: "white" }}
                >
                  <button type="button" class="btn btn-primary">
                    Categories
                  </button>
                </NavLink>
              </li>
              {/* //------------------cart Section-------------------------------- */}
              <li className="nav-item">
                <NavLink
                  to="/PageNotFound"
                  className="nav-link"
                  href="#"
                  style={{ color: "white" }}
                >
                  <button type="button" class="btn btn-primary">
                    Cart(0)
                  </button>
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ color: "white" }}
                >
                  {userAuth ? (
                    <>
                      <FontAwesomeIcon icon={faSignOutAlt} />
                      {truncateUsername(userAuth.displayName, 8)}
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faUser} /> Login
                    </>
                  )}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {userAuth ? (
                    <>
                      
                      {/* <span className="dropdown-item">Welcome, {userAuth.displayName}</span> */}
                      <button
                        className="dropdown-item btn "
                        onClick={handleLogout}
                      >
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        Logout
                      </button>
                      <Link to="/dashboard" className="dropdown-item">
                        Deshboard
                      </Link>
                      <Link to="/admin" className="dropdown-item">
                        Admin
                      </Link>
                    </>
                  ) : (
                    <>
                      {/* Display login/register options */}
                      <Link to="/Login" className="dropdown-item">
                        <FontAwesomeIcon icon={faUser} /> Login
                      </Link>
                      <Link to="/Register" className="dropdown-item">
                        Register
                      </Link>
                    </>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
