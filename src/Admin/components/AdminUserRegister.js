import React, { useState,useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import { baseurl } from '../../baseurl/baseurl';
import axios from "axios";
import swal from 'sweetalert';
const AdminUserRegister = () => {
    const [file, setFile] = useState(null);
    const [image, setimage] = useState("");
      const [getname,setname]=useState("")
      const [getlastname,setlastname]=useState("")
      const [getemail,setemail]=useState("")
      const [getnumber,setnumber]=useState("")
      const [getpassword,setpassword]=useState("")
      const [getconfirm,setconfirm]=useState("")
      const [getdepartment,setdepartment]=useState("")
      const [getposition,setposition]=useState("")
      const onChangimage = (events) => {
        setimage(events.target.files[0]);
        if (events.target.files.length > 0) {
          const file = URL.createObjectURL(events.target.files[0]);
          setFile(file);
          
      }
      };
      const changeOnClick = (e) => {
        
        const formData = new FormData();
        formData.append("name", getname);
        formData.append("lastname", getlastname);
        formData.append("email",getemail );
        formData.append("number", getnumber);
        if(getconfirm===getpassword){
          formData.append("password", getpassword);
        }else{
          setpassword("")
          setconfirm("")
        }
        formData.append("department", getdepartment);
        formData.append("position", getposition);
        formData.append("image", image);
      
        axios
          .post(baseurl+ "/admin/register/newuser", formData)
          .then((res) => {
            
            swal("Your Record save successfully!",{
              icon: "success",     
              buttons:false,
              timer: 800,
              margin: "300px"
            });
           
          })
          .catch((err) => {
            console.log(err);
          });
      };
    return (
      <>
       <div className='content-wrapper'>
      <div className='container mt-5 p-4 p-lg-5 d-felx align-items-start justify-content-center'>
        <h3 classname="mb-5">Admin Users &gt; New profile</h3>
  
        <div className='bg-white border-secondary p-4 p-lg-5 mt-3 text-center'>
       <div className=' d-flex flex-column align-items-center justify-content-center'> 
       <Avatar  alt="Remy Sharp" src={file} sx={{ width: 150, height: 150 , fontSize:100}} />
   
        </div>
        <div className='text-start mt-5'>
              <form>
                <div className="mb-3 d-flex align-items-center ">
                  <div className='me-3 w-100'>
                  <p htmlFor="exampleInputEmail1" className="form-label w-100">First Name</p>
                  <input type="text" required className="form-control shadow-none" value={getname} onChange={(e)=>setname(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                 
                  </div>
                  <div className='ms-3 w-100'>
                  <p htmlFor="exampleInputEmail1" className="form-label">Last Name</p>
                  <input type="text" required className="form-control shadow-none " value={getlastname} onChange={(e)=>setlastname(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                 
                  </div>
                 
                </div>
                <div className="mb-3">
                  <p htmlFor="exampleFormControlInput1" className="form-label">Email address</p>
                  <input type="email" className="form-control" required id="exampleFormControlInput1" value={getemail} onChange={(e)=>setemail(e.target.value)} placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <p htmlFor="exampleFormControlInput1" className="form-label">Phone Number</p>
                  <input type="tel" className="form-control" required id="exampleFormControlInput1" value={getnumber} onChange={(e)=>setnumber(e.target.value)} placeholder="+92312345678" />
                </div>
                
  
                <div className="mb-3">
                  <p htmlFor="exampleInputPassword1" className="form-label">Password</p>
                  <input type="password" required className="form-control shadow-none" value={getpassword} onChange={(e)=>setpassword(e.target.value)} id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                  <p htmlFor="exampleInputPassword1" className="form-label">Confirm Password</p>
                  <input type="password" required className="form-control shadow-none" value={getconfirm} onChange={(e)=>setconfirm(e.target.value)} id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                  <p htmlFor="exampleFormControlInput1" className="form-label">Department Name</p>
                  <input type="text" className="form-control" required id="exampleFormControlInput1" value={getdepartment} onChange={(e)=>setdepartment(e.target.value)} placeholder="IT deaprtment" />
                </div>
                <div className="mb-3">
                  <p htmlFor="exampleFormControlInput1" className="form-label">Position</p>
                  <input type="text" required className="form-control" id="exampleFormControlInput1" value={getposition} onChange={(e)=>setposition(e.target.value)} placeholder="HOD" />
                </div>
                <div className='mb-3'>
                <p htmlFor="exampleFormControlInput1" className="form-label ">Choose your image</p>
  
                <input className='border border-1 mb-3 ' required onChange={onChangimage} accept="image/*" single type="file" />
  
                </div>
                <button type="submit" className="btn btn-primary w-100" onClick={changeOnClick}>Register</button>
              </form>
  
        </div>
       
          
        </div>
      </div>
      </div>
      </>
    )
  }

export default AdminUserRegister