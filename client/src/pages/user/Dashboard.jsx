import React from "react";
import Layout from "../../components/Layout/Layout";
import auth from "../../firebase.init";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuthState } from "react-firebase-hooks/auth";

const Dashboard = () => {
  const [userAuth] = useAuthState(auth);
  
  const truncateUsername = (username, maxLength) => {
    if (!username) {
      return ""; // or handle the case where username is null or undefined
    }
    if (username.length <= maxLength) {
      return username;
    } else {
      return username.slice(0, maxLength) + "...";
    }
  };
  return (
    <Layout>
      <div className="container-flui m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
             
              <h3>{`UserName:${truncateUsername(userAuth.displayName, 8)}`}</h3>
              <h3>{`UserEmail:${userAuth.email}`}</h3>
             
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
