import React from 'react'
import Header from './Topbar';
import Menu from './Appbar';
import Addnewuser from '../../components/Newituser'
const Newituser = () => {
  return (
    <>
    <div className=''>
       
    <Header/>
    <Menu/>
     <Addnewuser/>
     
    </div>
    </>
  )
}

export default Newituser