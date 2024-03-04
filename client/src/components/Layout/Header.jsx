import React from "react";

import { SiShopee } from "react-icons/si";
import useCategory from "../../components/hooks/useCategory.js";
import { useAuth } from "../../context/auth";
import SearchInput from "./Form/SearchInput";
import { NavLink, Link } from "react-router-dom";
import { Badge } from "antd";
import { useCart } from "../../pages/Contax/cart";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: null,
    });
    localStorage.removeItem("auth");
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
              <SiShopee style={{ fontSize: "40" }}></SiShopee>
            </NavLink>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <SearchInput></SearchInput>
              <li className="nav-item">
                <NavLink
                  style={{ color: "white" }}
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  {/* <button type="button" class="btn btn-primary"> */}
                  Home
                  {/* </button> */}
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/cart"
                  className="nav-link"
                  style={{ color: "white" }}
                >
                  cart
                  <Badge
                    count={cart?.length}
                    showZero
                    offset={[-3, -22]}
                  ></Badge>
                </NavLink>
              </li>
              {!auth.user ? (
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    className="nav-link"
                    style={{ color: "white" }}
                  >
                    {/* <button type="button" class="btn btn-primary"> */}
                    Login
                    {/* </button> */}
                  </NavLink>
                </li>
              ) : (
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    // style={{ backgroundColor:: "black" }}
                    style={{
                      color: "white",
                      marginTop: "16px",
                      /* margin-left: -2px; */
                      marginRight: "67px",
                      border: "none",
                    }}
                  >
                    {auth?.user?.name}
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink
                        style={{ backgroundColor: "white", color: "black" }}
                        to={`/dashboard/${
                          auth?.user?.role === 1 ? "admin" : "user"
                        }`}
                        className="dropdown-item"
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/login"
                        className="nav-link"
                        style={{ color: "white" }}
                        onClick={handleLogout}
                      >
                        <button type="button" class="btn btn-primary">
                          Logout
                        </button>
                      </NavLink>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
