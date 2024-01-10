// import React from "react";
// import Layout from "../../components/Layout/Layout";
// import auth from "../../firebase.init";
// import UserMenu from "../../components/Layout/UserMenu";

// const Dashboard = () => {
//   return (
//     <Layout>
//       <div className="container-flui m-3 p-3 dashboard">
//         <div className="row">
//           <div className="col-md-3">
//             <UserMenu />
//           </div>
//           <div className="col-md-9">
//             <div className="card w-75 p-3">
//               <h3>{auth?.user?.name}</h3>
//               <h3>{auth?.user?.email}</h3>
//               <h3>{auth?.user?.address}</h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import auth from "../../firebase.init";
import UserMenu from "../../components/Layout/UserMenu";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Assuming you have a 'users' collection in Firestore
    const userDoc = auth?.user ? firebase.firestore().collection('users').doc(auth.user.uid) : null;

    if (userDoc) {
      userDoc.get().then((doc) => {
        if (doc.exists) {
          setUserData(doc.data());
        }
      });
    }
  }, [auth?.user]);

  return (
    <Layout>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>{userData?.name}</h3>
              <h3>{auth?.user?.email}</h3>
              <h3>{userData?.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;