import React from 'react'
import Topbar from "./Topbar"
import Menu from './Sidebar'
import Reportitt from '../../components/Reportit'
const Report = () => {
  return (
    <div className=''>
       
    <Topbar/>
    <Menu/>
    <Reportitt   showactionbtnp={false} />
    
    
    </div>
  )
}

export default Report