import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";

const User = () => {
  return (
    <Layout>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu></AdminMenu>
          </div>
          <div className="col-md-9">
            <h1 style={{ color: "white" }}>USer Related info</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default User;
