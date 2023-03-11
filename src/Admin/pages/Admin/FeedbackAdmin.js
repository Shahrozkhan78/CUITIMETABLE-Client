
import React from 'react'
import Header from './Topbar';
import Menu from './Appbar';
import Feedbackcomponent from '../../components/ItContactus'
const FeedbackAdmin = () => {
  return (
    <>
    <div className=''>
       
    <Header/>
    <Menu/>
     <Feedbackcomponent department={"admindepartment"}/>
     {/* <Footer/> */}
    </div>
    </>
  )
}

export default FeedbackAdmin