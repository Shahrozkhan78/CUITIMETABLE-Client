
import React, { useState,useEffect } from 'react'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { baseurl } from '../../baseurl/baseurl';
import { Link } from "react-router-dom";
import HashLoader from "react-spinners/BeatLoader";
import swal from 'sweetalert';
import DeleteIcon from '@mui/icons-material/Delete';
const AdminUser = () => {
// =======================================
const [getuserdata,setuserdata]=useState([])

const [visibleloading,setvisibleloading]=useState(true)

const getdataValuesFun = async () => {
  
  const res = await fetch(baseurl+"/admin/login/getusers", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      
    },
  });
  const data = await res.json();

  if (res.status === 422 || !data) {
    console.log("error ");
  } else {
    
    setuserdata(data)
    setvisibleloading(false)
    
  }
  
};
useEffect(()=>{
  getdataValuesFun()
},[])
// ======================================
const asktoconfirm=(id)=>{
  const ids=id
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this record!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Your Record save successfully!",{
        icon: "success", 
        buttons:false,
        timer: 800,
        margin: "300px"
      });
      deleteuser(ids)
    } else {
      swal("Your Record is safe!");
    }
  });
}
const deleteuser = async (id) => {
  
  const res2 = await fetch(baseurl+ `/adminusers/delete/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const deletedata = await res2.json();

  if (res2.status === 422 || !deletedata) {
    console.log("error");
   
  } else {
   
    window.location.reload(true)
  }
};
// =======================================
  return (
    <div className='content-wrapper'>
       {
      visibleloading?
      <div className="loading-style " >  <HashLoader className="" color={"#0AA5FF"}  loading={visibleloading}     aria-label="Loading Spinner"  data-testid="loader"
      /></div>
    :
      <div className='container mt-5 p-4 p-lg-5'>
     <div className='d-flex align-items-center justify-content-between'><h3 classname="mb-4">Admin &gt; Users</h3>
     <button className='btn btn-success me-5'><Link to="/admin/register_new_user" className=""><GroupAddIcon/></Link></button>
     </div> 
      <div className='mt-5 overflow-auto'>
      <table class="table ">
  <thead className='bg-primary'>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Department Name</th>
      <th scope="col">Position</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
                                getuserdata.map((element, id) => {
                                    return (
                                        <>
                                            <tr>
                                                <th scope="row">{id + 1}</th>
                                                <td>{element.name}</td>
                                                <td>{element.lastname}</td>
                                                <td>{element.email}</td>
                                                <td>{element.number}</td>
                                                <td>{element.department}</td>
                                                <td>{element.position}</td>
                                                <td>
                                                <button className='btn btn-warning shadow-none' onClick={() => asktoconfirm(element._id)} ><DeleteIcon className='text-light' /> </button>
                                                </td>
                                               
                                            </tr>
                                        </>
                                    )
                                })
                            }
                </tbody  >
</table>
      </div>

      </div>}
    </div>
  )
}
export default AdminUser