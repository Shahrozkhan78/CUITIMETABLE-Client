import React from 'react'
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import Reportit from '../components/Reportit';
const Reportsit = () => {
  return (
    <>
    <div className=''>
       <Header/>
       <Menu/>
       <Reportit showactionbtnp={true}/>
      
 
    </div>
     
    </>
  )
}

export default Reportsit