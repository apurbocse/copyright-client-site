import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "./inc/Header";
import Footer from "./inc/Footer";

export default function FrontendLayout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

