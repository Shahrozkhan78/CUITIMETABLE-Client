import React from 'react'
import Header from './Topbar';
import Menu from './Appbar';
import Footer from '../../pages/Footer'
import AdminUsersss from '../../components/ManagementUsers'

const ManagementUsers = () => {
  return (
    <>
    <div className=''>
        
        <Header/>
        <Menu/>
         <AdminUsersss/>
         {/* <Footer/> */}
        </div>
    </>
  )
}

export default ManagementUsers