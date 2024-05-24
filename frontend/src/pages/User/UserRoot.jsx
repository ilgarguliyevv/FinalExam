import React from 'react'
import Header from '../../layout/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../layout/Footer'

const UserRoot = () => {
  return (
    <>
     <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default UserRoot