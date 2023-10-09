import React from "react";
import Layout from "../../components/Layout/Layout";

const Register = () => {
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
              <h3 style={{ color: "white" }}>Registration Page</h3>
              <form>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="phone"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter phone"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="phone"
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
