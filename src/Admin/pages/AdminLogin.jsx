import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import {baseurl} from "../../baseurl/baseurl"
import "./Login.css";
import axios from "axios";
import LoadingButton from '@mui/lab/LoadingButton';

const AdminLogin = () => {
    const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
  const [visible,setvisible]=useState(false)

  const loginUser = async (e) => {

    e.preventDefault();
    setvisible(true)
  
    try {
			const url = baseurl+"/admin/login/users";
			const { data: res } = await axios.post(url, data);
      console.log("user is")
      console.log(res.id)
			localStorage.setItem("admintoken", res.data);
			localStorage.setItem("token", res.data);
      const userlogin=res.user;
      const userimage=userlogin.image;
      const userid=userlogin._id;
			localStorage.setItem("adminloginuserimage", userimage);
			localStorage.setItem("adminloginuserid", userid);
			window.location = "/admin/main";
      setvisible(false)
		} catch (error) {
      setvisible(false)
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
          <div className="h2 text-center d-flex align-items-center justify-content-center px-auto"><Avatar className="" alt="Remy Sharp"  sx={{ width: 150, height: 150 }} src="/assets/images/logopng1231.png" /></div>
          <div className="h6 text-muted text-center pt-2">
            Welcome to Admin Panel
          </div>
          <form className=" pt-3" onSubmit={loginUser}>
            <h4 className="text-center" style={{color:"#400485"}}>Login</h4>
            <div className="form-group py-2 mt-5">
              <div className="input-field">
                {" "}
                <span className="far fa-user p-2"></span>{" "}
                <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
                />{" "}
              </div>
            </div>
            <div className="form-group py-1 pb-2">
              <div className="input-field mt-3">
                {" "}
                <span className="fas fa-lock p-2"></span>{" "}
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                  required
                  className=""
                />{" "}
              
              </div>
            </div>
            <div className="d-flex align-items-start">
              <div className="ml-auto mt-2">
                {" "}
                <a className="text-dark" href="#" id="forgot">
                  Forgot Password?
                </a>{" "}
              </div>
            </div>{" "}
            {error && <div className="text-danger">{error}</div>}
           
            <LoadingButton type={"submit"} loading={visible} className="w-100 mt-5 mb-3 "   variant="contained" sx={{color:"white"}}>
  Submit
</LoadingButton>
          </form>
        </div>
      </section>
    </>
  );
};
export default AdminLogin