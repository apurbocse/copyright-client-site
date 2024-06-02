import React from 'react'
import { Outlet } from 'react-router-dom'
import PanelHeader from './inc/userInc/PanelHeader'
import Footer from "./inc/Footer";

export default function UserPanelLayout() {
  return (
    <div>
        <PanelHeader/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

