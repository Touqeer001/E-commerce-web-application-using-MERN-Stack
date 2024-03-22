import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <h5 className="text-center">All Right Reserve &copy;Touqeer </h5>
        <p className="text-center mt-3">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/Policy">Policy</Link>
        </p>
      </div>
    </>
  );
};

export default Footer;
