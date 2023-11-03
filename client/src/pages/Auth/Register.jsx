import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  //Form  Function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, address, phone);
    toast.success("Register successfuly..");
  };

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
              <h3 style={{ color: "white" }}>Registration Form</h3>
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
                <div className="mb-3">
                  <input
                    type="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter phone"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Your Address"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Register;
