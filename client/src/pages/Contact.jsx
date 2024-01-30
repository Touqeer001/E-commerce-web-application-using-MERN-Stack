import React from "react";
import Layout from "../components/Layout/Layout";
import { BsLinkedin } from "react-icons/bs";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../pages/Contact.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "this msg from E-commerce",
      to_email: email,
      message: msg,
    };

    emailjs
      .send(
        "service_iigbxzj",
        "template_hhx3r0a",
        templateParams,
        "aIDExbCzRAjv8ZovD"
      )
      .then(
        (response) => {
     alert("Email Sent Successfully!", response);
          setName("");
          setEmail("");
          setMsg("");
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  const linkedinProfileUrl = "https://www.linkedin.com/in/touqeer-ansari/";

  return (
    <Layout>
      
      <div className="row contactus" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img
                    src="/images/contactus.jpeg"
                    alt="contact us"
                    id="image"
                  ></img>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6>
                      Contact With
                      <a
                        href={linkedinProfileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ms-2"
                      >
                        <BsLinkedin color="blue" size={30} />
                      </a>
                      <a
                        // href={GitHubProfileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ms-2"
                      >
                     
                      </a>
                    </h6>
                  </div>
                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      className="mb-3"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email Address"
                      className="mb-3"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="msg"
                      placeholder="Write your message"
                      className="mb-3"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                    />
                  </div>
                  <div className="row px-3">
                    <button className="button" onClick={handleSubmit}>
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
