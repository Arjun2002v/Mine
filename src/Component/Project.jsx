import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

export default function Project() {
  const container = useRef(null);

  const {scrollYProgress} = useScroll({
    target:container,
    offset:['start start','end end']
  }) 

  const scale = useTransform(scrollYProgress,[0,1],[1,4])

   
  
  
  return (
    <div  className='procontainer'>
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
    <div className='stickyone'>
    <div style={scale} className='one'>
      <div className='top'>
        <motion.h2  initial >Edible.</ motion.h2>
      </div>
      <img src="./public/edible.jpg" alt="" />
    </div>
    </div>
    <div className='stickytwo'>
    <div   className='two'>
    <div className='middle'>
      <h2>Mine.</h2>
    </div>
      <img src="./public/portfolio.jpg" alt="" />
    </div>
    </div>
    <div className='stickythree'>
    <div className='low'>
    <div className='last'>
      <h2>Luxe.</h2>
    </div>
      <img src="./public/port.jpg" alt="" />
    </div>
    </div>
    </div>
    </div>
  )
}
