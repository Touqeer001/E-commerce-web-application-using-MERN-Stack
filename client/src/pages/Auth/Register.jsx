// import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
// import GoogleButton from "react-google-button";
// import { Link } from "react-router-dom";
// import auth from "../../firebase.init";
// import { useSignInWithGoogle } from "react-firebase-hooks/auth";
// import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
// import toast from 'react-hot-toast';

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(email, password);

//     createUserWithEmailAndPassword(email, password, address);
//     toast.success("Register successfuly....");
//   };
//   const handleLogin = () => {
//     // e.preventDefault();

//     signInWithGoogle();
//     setEmail("");
//     setPassword("");
//   };

//   const [signInWithGoogle, gooleUser, googleLoading, googleError] =
//     useSignInWithGoogle(auth);

//   const [createUserWithEmailAndPassword, user, loading, error] =
//     useCreateUserWithEmailAndPassword(auth);
//   if (error || googleError) {
//     console.log("googleErro");
//     // console.log("googleErro");
//   }
//   if (loading || googleLoading) {
//     return <p>Loading...</p>;
//   }
//   if (user || gooleUser) {
//     console.log("gooleUser");
//     //navigate("/");
//     toast.success("signin successfuly...");
//   }

//   return (
//     <>
//       <Layout>
//         <div className="row registers">
//           <div className="col-md-6">
//             <img
//               id="image"
//               src="/images/registration.png"
//               alt="Registration"
//             ></img>
//           </div>

//           <div className="col-md-4 registerBorder">
//             <div className="registers">
//               <h3 style={{ color: "white" }}>Registration</h3>
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="form-control"
//                     id="exampleInputEmail1"
//                     placeholder="Enter Email"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="form-control"
//                     id="exampleInputPassword1"
//                     placeholder="Enter Password"
//                   />
//                 </div>
//                 <div className="mb-3"></div>
//                 <div className="mb-3"></div>

//                 <button type="submit" className="btn btn-primary">
//                   Sign Up
//                 </button>
//               </form>
//               <hr></hr>
//               <div>
//                 {" "}
//                 <GoogleButton
//                   className="g-btn"
//                   type="light"
//                   onClick={handleLogin}
//                 ></GoogleButton>
//               </div>
//               <div className="signUpText">
//                 ALready Have an Account
//                 <Link
//                   to="/Login"
//                   style={{
//                     color: "var(--twitter-color)",
//                     fontWeight: "600",
//                     marginLeft: "5px",
//                   }}
//                 >
//                   Log in
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Layout>
//     </>
//   );
// };
import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../Style/Auth.css";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {
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
    <Layout title="Register - Ecommer App">
      <div className="form-container" style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}>
          <h4 className="title">REGISTER FORM</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Address"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="What is Your Favorite sports"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
        </form>
      </div>
    </Layout>
  );
};


 export default Register;
