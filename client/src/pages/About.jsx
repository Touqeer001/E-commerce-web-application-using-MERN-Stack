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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,
            dolores.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
