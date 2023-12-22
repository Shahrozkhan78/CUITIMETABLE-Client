// import { React, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import Avatar from "@mui/material/Avatar";
// import { baseurl } from "../../baseurl/baseurl";
// import "./Login.css";
// import axios from "axios";
// import LoadingButton from "@mui/lab/LoadingButton";
// const Login = () => {
//   const [data, setData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");

//   const handleChange = ({ currentTarget: input }) => {
//     setData({ ...data, [input.name]: input.value });
//   };
//   const [visible, setvisible] = useState(false);

//   const loginUser = async (e) => {
//     e.preventDefault();
//     setvisible(true);

//     try {
//       const url = baseurl + "/login/users";
//       const { data: res } = await axios.post(url, data);
//       console.log("user is");
//       console.log(res.id);
//       localStorage.setItem("token", res.data);
//       const userlogin = res.user;
//       const userimage = userlogin.image;
//       const userid = userlogin._id;
//       localStorage.setItem("itloginuserimage", userimage);
//       localStorage.setItem("itloginuserid", userid);
//       window.location = "/Admin/Adminpanel";
//       setvisible(false);
//     } catch (error) {
//       setvisible(false);
//       if (
//         error.response &&
//         error.response.status >= 400 &&
//         error.response.status <= 500
//       ) {
//         setError(error.response.data.message);
//       }
//     }
//   };

//   return (
//     <>
//       <section className="login">
//         <div className="wrapperslogin bg-white">
//           <div className="h2 text-center d-flex align-items-center justify-content-center px-auto">
//             <Avatar
//               className=""
//               alt="Remy Sharp"
//               sx={{ width: 150, height: 150 }}
//               src="/assets/images/logopng1231.png"
//             />
//           </div>
//           <div className="h6 text-muted text-center pt-2">
//             Welcome to Monitering System
//           </div>
//           <form className=" pt-3" onSubmit={loginUser}>
//             <h4 className="text-center" style={{ color: "#400485" }}>
//               Login
//             </h4>
//             <div className="form-group py-2 mt-5">
//               <div className="input-field">
//                 {" "}
//                 <span className="far fa-user p-2"></span>{" "}
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   name="email"
//                   onChange={handleChange}
//                   value={data.email}
//                   required
//                 />{" "}
//               </div>
//             </div>
//             <div className="form-group py-1 pb-2">
//               <div className="input-field mt-3">
//                 {" "}
//                 <span className="fas fa-lock p-2"></span>{" "}
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   name="password"
//                   onChange={handleChange}
//                   value={data.password}
//                   required
//                   className=""
//                 />{" "}
//               </div>
//             </div>
//             <div className="d-flex align-items-start">
//               <div className="ml-auto mt-2">
//                 {" "}
//                 <a className="text-dark" href="#" id="forgot">
//                   Forgot Password?
//                 </a>{" "}
//               </div>
//             </div>{" "}
//             {error && <div className="text-danger">{error}</div>}
//             <LoadingButton
//               type={"submit"}
//               loading={visible}
//               className="w-100 mt-5 mb-3 "
//               variant="contained"
//               sx={{ color: "white" }}
//             >
//               Submit
//             </LoadingButton>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Login;
import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { baseurl } from "../../baseurl/baseurl";
import "./Login.css";
import axios from "axios";
import LoadingButton from "@mui/lab/LoadingButton";

const Login = () => {
  const [error, setError] = useState("");
  const [visible, setvisible] = useState(false);

  const loginUser = async (e) => {
    e.preventDefault();
    setvisible(true);

    try {
      // Simulate a successful login
      // In a real application, this should involve actual authentication logic
      // and a secure communication with a server
      // For demonstration purposes, we'll use a setTimeout to simulate an API call
      setTimeout(() => {
        // Set some dummy data in localStorage
        localStorage.setItem("token", "fakeToken");
        localStorage.setItem("itloginuserimage", "dummyImageURL");
        localStorage.setItem("itloginuserid", "dummyUserID");
        // Redirect to the next page
        window.location = "/Admin/Adminpanel";
        setvisible(false);
      }, 1000);
    } catch (error) {
      setvisible(false);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
      <section className="login">
        <div className="wrapperslogin bg-white">
          <div className="h2 text-center d-flex align-items-center justify-content-center px-auto">
            <Avatar
              className=""
              alt="Remy Sharp"
              sx={{ width: 150, height: 150 }}
              src="/assets/images/logopng1231.png"
            />
          </div>
          <div className="h6 text-muted text-center pt-2">
            Welcome to Monitoring System
          </div>
          <form className=" pt-3" onSubmit={loginUser}>
            <h4 className="text-center" style={{ color: "#400485" }}>
              Login
            </h4>
            <div className="d-flex align-items-start">
              <div className="ml-auto mt-2">
                {" "}
                <a className="text-dark" href="#" id="forgot">
                  Forgot Password?
                </a>{" "}
              </div>
            </div>{" "}
            {error && <div className="text-danger">{error}</div>}
            <LoadingButton
              type={"submit"}
              loading={visible}
              className="w-100 mt-5 mb-3 "
              variant="contained"
              sx={{ color: "white" }}
            >
              Submit
            </LoadingButton>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
