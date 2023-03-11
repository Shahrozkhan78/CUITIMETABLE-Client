import React from 'react'
import Topbar from "./Topbar"
import Menu from './Sidebar'
import Dashboardadmin from "../../components/DashboardAdminV"
const Dashboard = () => {
  return (
    <div className=''>  
    <Topbar/>
    <Menu/>
    <Dashboardadmin/>
    
    
    </div>
  )
}

export default Dashboard