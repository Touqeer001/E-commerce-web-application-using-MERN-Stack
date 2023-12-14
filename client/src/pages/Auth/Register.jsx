import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { toast } from "react-toastify";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";

import auth from "../../firebase.init";

import { useSignInWithGoogle } from "react-firebase-hooks/auth";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    createUserWithEmailAndPassword(email, password, address);
    toast.success("Register successfuly....");
  };
  const handleLogin = () => {
    // e.preventDefault();

    signInWithGoogle();
    setEmail("");
    setPassword("");
  };

  const [signInWithGoogle, gooleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  if (error || googleError) {
    console.log("googleErro");
    // console.log("googleErro");
  }
  if (loading || googleLoading) {
    return <p>Loading...</p>;
  }
  if (user || gooleUser) {
    console.log("gooleUser");
    //navigate("/");
    toast.success("signin successfuly...");
  }

  return (
    <>
      <Layout>
        <div className="row registers">
          <div className="col-md-6">
            <img
              id="image"
              src="/images/registration.png"
              alt="Registration"
            ></img>
          </div>

          <div className="col-md-4 registerBorder">
            <div className="registers">
              <h3 style={{ color: "white" }}>Registration</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="mb-3"></div>
                <div className="mb-3"></div>

                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </form>
              <hr></hr>
              <div>
                {" "}
                <GoogleButton
                  className="g-btn"
                  type="light"
                  onClick={handleLogin}
                ></GoogleButton>
              </div>
              <div className="signUpText">
                ALready Have an Account
                <Link
                  to="/Login"
                  style={{
                    color: "var(--twitter-color)",
                    fontWeight: "600",
                    marginLeft: "5px",
                  }}
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Register;
