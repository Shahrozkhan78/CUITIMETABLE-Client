import React from 'react'
import Header from './Topbar';
import Menu from './Appbar';
import Setting from '../../components/ProfileSettingAdmin'
const Settingadmin = () => {
  return (
    <>
    <div className=''>
       
    <Header/>
    <Menu/>
     <Setting/>
     
    </div>
    </>
  )
}
export default Settingadmin