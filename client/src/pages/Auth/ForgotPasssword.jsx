import React from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";

import { toast } from "react-toastify";

import "./Login.css";

import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/forgot-password",
        {
          email,
          newPassword,
          answer,
        }
      );
      if (res && res.data.success) {
        alert("Password reset succesful..!!");
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Login-E-commerce"}>
      <div className="row registers">
        <div className="col-md-6">
          <img
            id="image"
            src="images\resetpassword.jpg"
            alt="ResetPassword"
          ></img>
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
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter New Password"
                />
              </div>
              <div className="mb-3">
                <input
                  type=""
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Your Sport "
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Reset Password
              </button>
            </form>
            <hr></hr>

            <div className="signUpText">
              Dont Have an Account
              <Link
                to="/register"
                style={{
                  //textDecoration: "none",
                  color: "white",
                  fontWeight: "600",
                  marginLeft: "5px",
                }}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
