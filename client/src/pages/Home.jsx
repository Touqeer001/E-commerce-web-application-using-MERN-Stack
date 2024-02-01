import React from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/auth";

const Home = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <h1 style={{ color: "white" }}>Home Page.Coming Soon..</h1>
      <pre style={{ color: "white" }}>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};

export default Home;
