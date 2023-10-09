//rafce react arrow function with component

import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "70vh" }}>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
