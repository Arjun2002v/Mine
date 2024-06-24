import { motion } from 'framer-motion'
import React from 'react'

export default function Landing() {
  
  return (
    <div    data-scroll  data-scroll-section  data-scroll-speed ="-.4"  
   
     className='Front'>
      <div className='leftcontainer'>
        < motion.div 
        initial={{y:"-19%"}}
        animate={{y:"0"}}
        transition={{duration:.9 , ease:"easeOut"}}
       
        className='left'>
            {["02/08","2002"].map((item)=>   (
                <h2>{item}</h2>
            ))}

        </motion.div>
        </div>
       
        <motion.div 
        
        className='centre'>
       
       <div className='firstcont'>
       <motion.h2
       initial={{y:"-140%"}}
       animate={{y:"-50%"}}
       
       transition={{duration:.7}}
       >  Creative 
       </motion.h2>
       </div>   
    <div className='secondcontainer'>
      <motion.h2
      initial={{y:"32%"}}
      animate={{y:"-40%"}}
      transition={{duration:.7}}
      >Web Designer   </motion.h2>
      </div>
        </motion.div>
        
        <div className='centrecontainer'>
        <div className='right'>
        {["Present","2024"].map((item)=>(
                <motion.h2
                initial={{y:"-25%"}}
                animate={{y:"0"}}
                transition={{duration:.9}}
                >{item}</motion.h2>
            ))}

        </div>
        </div>
      
    </div>
  )
}
