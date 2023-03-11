import React from 'react'
import Topbar from "./Topbar"
import Menu from './Sidebar'
import Feedback from '../../components/ItContactus'
const FeedbackManag = () => {
  return (
    <div className=''>
    <Topbar/>
    <Menu/>
    <Feedback   department={"managdepartment"} />
    </div>
  )
}

export default FeedbackManag