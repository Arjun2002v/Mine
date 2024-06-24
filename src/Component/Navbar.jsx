import { easeIn, motion } from 'framer-motion'
import React from 'react'

export default function Navbar() {
  
  return (
    <motion.div 
       initial={{opacity:0, y:"-60%" }} 
        animate={{opacity:100,y:"0"}}
         transition={{duration:.5}}  className='navbar'> 
    <div className='left'>
      {["Ar."].map((items)=>(
        <h3>{items}</h3>
      ))}
    </div>
    <div className='center'>
      {["Home","About","Project"].map((items)=>(
        <a>{items}</a>
      ))}
    </div>
    <div className='right'>
      <a>Contact Me</a>
    </div>
      

    </ motion.div>
  )
}
