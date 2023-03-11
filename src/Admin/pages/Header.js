import React, { useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import swal from 'sweetalert';
const Header = () => {
  const userid = localStorage.getItem("itloginuserimage");
  const asktoconfirm=()=>{
    
    swal({
      title: "Are you sure?",
      text: "You want to Logout!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Logout Successfully successfully!",{
          icon: "success", 
          buttons:false,
          timer: 800,
          margin: "300px"
        });
        logout()
      } else {
        swal("Your did not Logout!");
      }
    });
  }
  const logout = () => {
   
    window.location.href = "/Admin/";
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("itloginuserid");
    window.localStorage.removeItem("itloginuserimage");
  };
  return (
    <div>
    <nav className="main-header d-flex justify-content-between navbar navbar-expand navbar-white navbar-light fixed-top">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars" /></a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <NavLink to="/Admin/Adminpanel" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
        <NavLink to="/Admin/Contactusit" className="nav-link">Contact</NavLink>
        </li>
      </ul>

     
      <div className='d-flex align-items-center'> 
    <IconButton className='mx-2'onClick={asktoconfirm} aria-label="delete">
     <LogoutIcon className=''/>
    </IconButton>
    {/* <li className="nav-item dropdown list-unstyled">
        <a className="nav-link m-0 pt-1" data-toggle="dropdown" href="#" >
        <IconButton className='' aria-label="delete">
     <NotificationsIcon className=''/>
    </IconButton>
          <span className="badge badge-warning  navbar-badge px-2 py-1  ">15</span>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span className="dropdown-item dropdown-header">4 Notifications</span>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <i className="fas fa-envelope mr-2" /> 4 new messages
           
          </a>
        
        
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
        </div>
      </li> */}
    <li className="nav-item dropdown list-unstyled">
        <a className="nav-link m-0 pt-1" data-toggle="dropdown" href="#" >
        <IconButton className='' aria-label="setting">
        <SettingsIcon className=''/>
    </IconButton>
         
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
         
      
          <NavLink to="/Admin/Setting" className="dropdown-item">
            <i className="fa fa-wrench mr-2" /> Profile Setting
           
          </NavLink>
        
        
          <div className="dropdown-divider" />
          <div className="dropdown-item">
            <i className="fa fa-unlock mr-2" /> Password Reset
           
          </div>
        
         
        </div>
      </li>
          <div width="20%" height="20%" class="me-3 bg-info rounded-circle">
          <Avatar alt={"username"} src={`/uploads/${userid}`} />
          </div></div>
    </nav>
  </div>
  
  )
}

export default Header