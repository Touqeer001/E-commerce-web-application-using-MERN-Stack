//rafce react arrow function with component
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <ToastContainer />

        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
