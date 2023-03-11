import React from 'react'
import Topbar from './Topbar'
import Appbar from './Appbar'
import Footer from './Footer'
import Dashboard from '../../components/DashboardAdminV'
const MainAdmin = () => {
  return (
    <>
     <div className=''>
      <Topbar/>
      <Appbar/>
      <Dashboard/>
       
      {/* <Footer/> */}
   </div>
    </>
  )
}

export default MainAdmin