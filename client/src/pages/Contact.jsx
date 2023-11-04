import React from "react";
import Layout from "../components/Layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="row contactus">
        <div className="col-md-6">
          <img src="/images/contactus.jpeg" alt="contact us" id="image"></img>
        </div>

        <div className="col-md-4">
          <p className="text-justify mt-2">
            Feel Free To Contact if u have Any quries......
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
