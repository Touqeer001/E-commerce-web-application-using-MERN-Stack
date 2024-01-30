import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="row contactus">
        <div className="col-md-6">
          <img src="/images/contactus.jpeg" alt="contact us" id="image"></img>
        </div>

        <div className="col-md-4">
          {/* <p className="text-justify mt-2 textDesign"> */}
          <p>
            <h1>Privacy Policy:</h1>
            <hr></hr>
          </p>
          <h3 style={{ color: "white" }}></h3>
          <p>
            we are committed to safeguarding your privacy. When you use our
            services, we collect necessary personal information, such as your
            name, email address, and shipping details, to process orders and
            enhance your user experience.
            <hr></hr>
            Additionally, non-personal information, like browser type and IP
            address, is collected for analytical purposes
            <hr></hr>
            We do not sell or trade your personal information to third parties
            without your consent.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
