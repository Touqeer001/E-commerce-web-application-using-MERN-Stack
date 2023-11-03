import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="row contactus">
        <div className="col-md-6 ">
          <img src="/images/about.jpeg" alt="ABout us" id="image"></img>
        </div>

        <div className="col-md-4">
          <p className="text-justify mt-2 textDesign">
            This is E-Commerce About Page Where User Have any query regarding
            website then they can directly contact.....
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
