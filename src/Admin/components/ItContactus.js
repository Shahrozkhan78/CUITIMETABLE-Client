import React, { useState } from 'react'
import { baseurl } from '../../baseurl/baseurl';
import axios from "axios";
import swal from 'sweetalert';
const ItContactus = (props) => {

  const [getname,setname]=useState("")
  const [getemail,setemail]=useState("")
  const [getnumber,setnumber]=useState("")
  const [getmessage,setmessage]=useState("")
  const [getdepartment,setdepartment]=useState(props.department)

  const changeOnClick = () => {
  
    if(!getname ||!getnumber||!getmessage||!getemail||!getdepartment){
     
    }else{

    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
         name: getname, 
         email: getemail, 
         number: getnumber, 
         department: getdepartment, 
         message: getmessage, 
        })   
  };   fetch(baseurl+'/register/feedback', requestOptions)
  .then((res) => {      
    swal("Your Record save successfully!",{
      icon: "success",     
      buttons:false,
      timer: 800,
      margin: "300px"
    });
     setname("")
     setemail("")
     setnumber("")
     setdepartment("")
     setmessage("")
  })
  .catch((err) => {
    console.log(err);
  });
}
  };
  return (
    <>
     <div className='content-wrapper'>
      <div className='container mt-5 p-4 p-lg-5  pt-0  mt-2 d-felx align-items-start justify-content-center'>
     
        <div className='bg-white border-secondary p-4 p-lg-5 mt-2 text-center'>
      <h1 className='text-center mb-3'>Contact Us</h1>
        <div className='text-start mt-2'>
       
                <div className="mb-3 d-flex align-items-center ">
                  <div className='me-3 w-100'>
                  <p htmlFor="name" className="form-label w-100">First Name</p>
                  <input type="text" required className="form-control shadow-none" value={getname} onChange={(e)=>setname(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                 
                  </div>

                </div>
                <div className="mb-3">
                  <p htmlFor="exampleFormControlInput1" className="form-label">Email address</p>
                  <input type="email" className="form-control" required id="exampleFormControlInput1" value={getemail} onChange={(e)=>setemail(e.target.value)}  placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <p htmlFor="exampleFormControlInput1" className="form-label">Phone Number</p>
                  <input type="tel" className="form-control" required id="exampleFormControlInput1" value={getnumber} onChange={(e)=>setnumber(e.target.value)}  placeholder="+92312345678" />
                </div>
                <div className="mb-3">
                  <p htmlFor="exampleFormControlInput1" className="form-label">Message</p>
                  <textarea class="form-control" required placeholder="Leave a comment here" rows={8} value={getmessage} onChange={(e)=>setmessage(e.target.value)} id="floatingTextarea"></textarea>
                </div>
              
                <button type="submit" className="btn btn-primary w-100" onClick={changeOnClick}>Register</button>
             
  
        </div>
       
          
        </div>
      </div>
      </div>
    </>
  )
}

export default ItContactus