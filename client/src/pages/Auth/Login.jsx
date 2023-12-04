import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { toast } from "react-toastify";
import GoogleButton from "react-google-button";
import "./Login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  //Form  Function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, address, phone);
    toast.success("Register successfuly...");
    setEmail("");
    setPassword("");
  };

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
                {/* <div className="mb-3"> */}
                {/* <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-contro"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Email.."
                  />
                </div> */}
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
                  //onClick={handleLogin}
                ></GoogleButton>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Login;
