import React from "react";
import { NavLink } from "react-router-dom";
// import { SiShopee } from "react-icons/si.... ";
import { SiShopee } from "react-icons/si";
const Header = () => {
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
              <li className="nav-item">
                <NavLink
                  to="/Register"
                  className="nav-link"
                  href="#"
                  style={{ color: "white" }}
                >
                  <button type="button" class="btn btn-primary">
                    Register
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Register"
                  className="nav-link"
                  href="#"
                  style={{ color: "white" }}
                >
                  <button type="button" class="btn btn-primary">
                    Categories
                  </button>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className="nav-link"
                  href="#"
                  style={{ color: "white" }}
                >
                  <button type="button" class="btn btn-primary">
                    Login
                  </button>
                </NavLink>
              </li>
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
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
