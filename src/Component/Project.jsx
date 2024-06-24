import { motion } from 'framer-motion'
import React from 'react'

export default function Project() {
  
  return (
    <div  className='Project'>  
    <div   className='pro'>

      <div   className='left'>
        {["Some","Of My "].map((item)=>(
          <h3>{item}</h3>
        ))}
      </div>

      <div className='centre'>
       {[ "Projects"].map((item)=>{
        return(
          <h3>{item}</h3>
        )
        
       })}
       </div>
       <div className='right'>
        {["Web Design","UI/UX Designs"].map((item)=>(
          <h3>{item}</h3>
        ))}
       </div>
      
    </div>
    <div  className='one'>
      <div className='top'>
        <motion.h2  initial >Edible.</ motion.h2>
      </div>
      <img src="./public/edible.jpg" alt="" />
    </div>
    <div  data-scroll data-scroll-speed="-.3" className='two'>
    <div className='middle'>
      <h2>Mine.</h2>
    </div>
      <img src="./public/portfolio.jpg" alt="" />
    </div>
    <div className='low'>
    <div className='last'>
      <h2>Luxe.</h2>
    </div>
      <img src="./public/port.jpg" alt="" />
    </div>
    </div>
  )
}
