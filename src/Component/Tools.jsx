import React from 'react'
import { motion } from "framer-motion"

export default function Tools() {
  return (
      <div className='tools'>
          <div className='heading'>
              <h2>Tools I use</h2>
              
              
              </div>
              <div className='carousal'>
          {["React","HTML","CSS","Javascript"].map((item)=>(
              < motion.h3  initial={{x:0}} animate={{x:"-99%"}} transition={{ease:"linear", repeat:Infinity,duration:4}}>{item}</ motion.h3>
          ))}
          {["React","HTML","CSS","Javascript"].map((item)=>(
                    < motion.h3  initial={{x:0}} animate={{x:"-99%"}} transition={{ease:"linear", repeat:Infinity,duration:4}}>{item}</ motion.h3>
          ))}
          {["React","HTML","CSS","Javascript"].map((item)=>(
                    < motion.h3  initial={{x:0}} animate={{x:"-99%"}} transition={{ease:"linear", repeat:Infinity,duration:4}}>{item}</ motion.h3>
          ))}
          </div>
          
        
      </div>
  )
}
