import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout title={"go back- page not found"}>
      <div className="pnf">
        <h1 className="pnf-title" style={{ color: "white" }}>
          404
        </h1>
        <h2 className="pnf-heading" style={{ color: "white" }}>
          Working.....
        </h2>
        <Link
          to="/"
          className="pnf-btn"
          style={{ background: "white", color: "black" }}
        >
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
