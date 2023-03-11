import React from 'react'
import { NavLink } from "react-router-dom";
import "./MoniteringPage.css"
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import TimerIcon from '@mui/icons-material/Timer';
const MoniteringMainpage = () => {
  return (
   <>
    <nav className="navbar navbar-expand-lg navbar-light  fluid-containers " style={{backgroundColor:"#572B77"}}>
        <div className="container ">
          <div className="name">
            <NavLink className=" logo d-flex align-items-center" to="/">
              <img src="./assets/images/logopng1231.png" alt="logo" />
              <div className="logoname ">
                <h1 className='text-center'>CUI TIMETABLE</h1>
                <p>Comsats University Sahiwal</p>
              </div>
            </NavLink>
          </div>
         
       <div
            className=" collapse navbar-collapse nav-links justify-content-center "
            id=""
          >
           {/* <h6 className='text-light'>COMSATS UNIVERSITY ISLAMABAD <br/> SAHIWAL CAMPUS</h6> */}
          </div>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
           <h6 className='text-light'>CUI Lecture Monitering system</h6>
           
          </div>
        </div>
      </nav>
      <div className=''></div>
      <section className='bgsections pt-4 pb-5'>
        <div className='container'>
        <h3 className='text-center pt-3 mb-3' style={{color:"#572B77"}}>Lecture Monitering System</h3>
      
      <div className='d-flex  row gx-2'>
      <div className='col-lg-3  mb-3 d-none d-lg-block  px-2'>
        <div className='bg-white shadows p-3 rounded'>
          <h4 className='text-center mb-4'>Sahiwal Campus</h4>

            <div className='d-flex align-items-center justify-content-evenly'>
            <img className='m-1' src='./assets/images/moni/1.png'></img>
            <img className='m-1' src='./assets/images/moni/2.png'></img>
          
          </div>
            <div className='d-flex align-items-center justify-content-evenly'>
            <img className='m-1' src='./assets/images/moni/3.png'></img>
            <img className='m-1' src='./assets/images/moni/4.png'></img>
          
          </div>
            <div className='d-flex align-items-center justify-content-evenly'>
            <img className='m-1' src='./assets/images/moni/5.png'></img>
            <img className='m-1' src='./assets/images/moni/6.png'></img>
          
          </div>
            <div className='d-flex align-items-center justify-content-evenly'>
            <img className='m-1' src='./assets/images/moni/2.png'></img>
            <img className='m-1' src='./assets/images/moni/1.png'></img>
          
          </div>
            <div className='d-flex flex-column mt-3'>
          <p className='font-weight-bold m-0 p-0'>Design and Develop</p>
          <p className=''>Khalid Shabbir</p>
          
          </div>
        </div>
      </div>
      <div className='col mb-3'>
      <div className=' row gx-2 d-flex align-items-center justify-content-evenly mb-3 '>
        <div className='col-xs-12 col-lg-12 mb-3'><a href={"/"} >
        <div className=' rounded p-3 py-4 mx-2 btnhouveradmin'>
        <div className='d-flex  flex-column align-items-center justify-content-center '>
          <TimerIcon className='mb-3 ' style={{fontSize:"60px"}} />
          <p className='font-weight-bold p-0 m-0 text'>CUI Timetable App</p>
        </div>
        </div></a>
        </div>
       

      </div>
      <div className=' row gx-2 d-flex align-items-center justify-content-evenly mb-5 '>
        <div className='col-xs-12 col-lg-4 mb-3'><NavLink to={"/admin/login"}>
        <div className=' rounded p-3 py-4 mx-2 btnhouveradmin'>
        <div className='d-flex  flex-column align-items-center justify-content-center '>
          <AdminPanelSettingsIcon className='mb-3 ' style={{fontSize:"60px"}} />
          <p className='font-weight-bold p-0 m-0 text'>Main Admin Panel</p>
        </div>
        </div></NavLink>
        </div>
        <div className='col-xs-12 col-lg-4 mb-3'><NavLink to={"/Admin"}>
        <div className=' rounded p-3 py-4 mx-2 btnhouveradmin'>
        <div className='d-flex  flex-column align-items-center justify-content-center '>
          <SupervisorAccountIcon className='mb-3 ' style={{fontSize:"60px"}} />
          <p className='font-weight-bold p-0 m-0'>IT Admin Panel</p>
        </div>
        </div></NavLink>
        </div>
      <div className='col-xs-12 col-lg-4 mb-3'><NavLink to={"/visitor/login"}>
      <div className=' rounded p-3 py-4 mx-2 btnhouveradmin'>
        <div className='d-flex  flex-column align-items-center justify-content-center '>
          <PermIdentityIcon className='mb-3 ' style={{fontSize:"60px"}} />
          <p className='font-weight-bold p-0 m-0'>Management Panel</p>
        </div>
        </div></NavLink>
      </div>

      </div>
     
      <div className='px-2'>    <h3 className='mb-3'>CUI Lecture Monitering System</h3>
      <p>CUI Lecture Monitoring System is used to monitor daily conducted lectures. This system is used to ensure that lectures are conducted on the time and that nobody can break rules and regulations. CUI Sahiwal used this system and generate reports on daily bases. CUI Lecture Monitoring System is synced with the timetable and updated automatically according to the timetable. This system helps management to ensure the quality of the lectures. This is a web-based system and management have access to see its analytics and reports.</p></div>
      <div className='px-2 mt-5'>    <h3 className='mb-3'>Explore Websites</h3>
      <a className='text-primary' href='https://www.comsats.edu.pk/' target={"_blank"}>www.comsats.edu.pk</a><br/>
      <a className='text-primary' href='http://cuonline.comsats.edu.pk/' target={"_blank"}>cuonline.comsats.edu.pk</a><br/>
      <a className='text-primary' href='https://admissions.comsats.edu.pk/' target={"_blank"}>admissions.comsats.edu.pk</a>
      </div>
      </div>
      <div className='col-lg-3  mb-3 px-2'>
        <div className=' rounded-1  d-flex align-items-center justify-content-evenly '>
         
          <div className='px-4 mt-3'>
          <img src='./assets/images/moni/r.png'></img>
          <h4 className='mt-5'>Sahiwal Campus</h4>
          <p className=''>The COMSATS University Islamabad (CUI), which received its Charter from the Federal Government in August 2000, as a Degree Awarding Institute (DAI) in the public sector. The CU is up gradated as university by the name of "Comsats University" through an act of the Parliament in April 2018.</p>
          </div>
          
        </div>
      </div>

      </div></div>
      </section>
      
      <footer className="policy fluid-container  "style={{backgroundColor:"#572B77"}}>
        <div className="container  p-4">
          <div className="policywrapper row ">
            <div className="col-lg align-items-center align-items-lg-start">
              <p className="m-0 p-0 text-lg-start text-center mb-lg-0 mb-3">
                Copyright © 2022 by{" "}
                <span>Comsats University Islamabad Sahiwal Campus</span> All
                Rights Reserved
              </p>
            </div>
            <div className="col-lg text-lg-end text-center ">
              <a
                className=""
                href="https://github.com/codealign"
                target="_blank"
              >
                <p className="develop m-0 p-0  ">Designed by Khalid Shabbir</p>
              </a>
            </div>
          </div>
        </div>
      </footer>
      

   </>
  )
}

export default MoniteringMainpage