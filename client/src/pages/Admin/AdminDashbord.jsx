import React from "react";
import Layout from "../../components/Layout/Layout";
import auth from "../../firebase.init";
import AdminMenu from "../../components/Layout/AdminMenu";
import { useAuthState } from "react-firebase-hooks/auth";

export const AdminDashbord = () => {
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
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              {/* <h3> Admin Name : {auth?.user?.name}</h3>
              <h3> Admin Email : {auth?.user?.email}</h3>
              <h3> Admin Contact : {auth?.user?.phone}</h3> */}
                 
                 <h3>{`Admin Name:${truncateUsername(userAuth.displayName)}`}</h3>
              <h3>{`Admin Email:${userAuth.email}`}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default AdminDashbord;
