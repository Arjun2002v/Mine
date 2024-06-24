import React from 'react'
import Navbar from './Component/Navbar'
import Landing from './Component/Landing'
import Cursor from './Component/Cursor'
import About from './Component/About'
import LocomotiveScroll from 'locomotive-scroll';
import Project from './Component/Project'
import Tools from './Component/Tools'
import Contact from './Component/Contact'
import Design from './Component/Design'
import Loader from './Component/Loader'

export default function App() {


const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Navbar></Navbar>
      <Landing></Landing>
      <Cursor></Cursor>
      <About></About>
      <Project></Project>
      <Tools></Tools>
      <Design></Design>
      <Contact></Contact>
      <Loader></Loader>
      

      
    </>
  )
}
