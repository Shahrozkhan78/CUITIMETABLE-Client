import React from 'react'
import Topbar from "./Topbar"
import Menu from './Sidebar'
import Reportitt from '../../components/ProfileSettingManag'
const ProfileSettingManag = () => {
  return (
    <div className=''>
    <Topbar/>
    <Menu/>
    <Reportitt   showactionbtnp={false} />
    </div>
  )
}

export default ProfileSettingManag