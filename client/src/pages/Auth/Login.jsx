import Layout from "../../components/Layout/Layout";
import { toast } from "react-toastify";

import "./Login.css";

import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

import {
  useSignInWithEmailAndPassword,
  useAuthState,
} from "react-firebase-hooks/auth";

import auth from "../../firebase.init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };

  const handleLogin = () => {
    // e.preventDefault();

    signInWithGoogle();
  };

  const [signInWithGoogle, gooleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  // console.log(user);
  // console.log(gooleUser);
  if (error || googleError) {
    // console.log("googleErro");
  }
  if (loading || googleLoading) {
    return toast.success("signin successfuly....");
  }
  if (user || gooleUser) {
    console.log("gooleUser");
    navigate("/");
    toast.success("signin successfuly....");
  }

  return (
    <>
      <Layout>
        <div className="row registers">
          <div className="col-md-6">
            <img id="image" src="/images/login.png" alt="Login"></img>
          </div>

          <div className="col-md-4 registerBorder">
            <div className="registers">
              <h3 style={{ color: "white" }}>Login</h3>
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

                <button type="submit" className="btn btn-primary">
                  Login
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
                Dont Have Account
                <Link
                  to="/Register"
                  style={{
                    //textDecoration: "none",
                    color: "white",
                    fontWeight: "600",
                    marginLeft: "5px",
                  }}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Login;
