import React from 'react'
import Header from './Topbar';
import Menu from './Appbar';
import Footer from '../../pages/Footer'
import AdminUsersss from '../../components/AdminUser'

const AdminAllUsers = () => {
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
export default AdminAllUsers