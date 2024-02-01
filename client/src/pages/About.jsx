import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={'About Us'}>
      <div className="row contactus" id="image">
        <div className="col-md-6 ">
          <h1 style={{ color: "white" }}> All About us!</h1>
          <img src="/images/about.jpeg" alt="ABout us" id="image"></img>
        </div>

        <div className="col-md-4">
          {/* <p className="text-justify mt-2 textDesign"> */}
          <p>
            <h3>Welcome to our E-commerce Plateform:</h3>
            <hr></hr>
          </p>
          <h3 style={{ color: "white" }}>Why Choose Us?:</h3>
          <p>
            Experience a seamless journey with our user-friendly dashboards,
            meticulously designed for both customers and shopkeepers.
            <hr></hr>
            For local businesses, our platform is not just a marketplace; it's a
            gateway to new opportunities.
            <hr></hr>
            Our admin dashboard provides a comprehensive suite of tools,
            empowering shopkeepers to effortlessly manage inventory, track
            sales, and optimize their online presence.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
