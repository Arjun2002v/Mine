import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <div  className='contact'>
        <div className='work'>
            <h2>Lets's Work Together</h2>
        </div>
      
        <div className='number'>
            <div className='email'>
                <h3>arjupallufd@gmail.com</h3>
            </div>
            <div className='phone'>
                <h3>+91 9745191989</h3>
            </div>
        </div>
        <div className='social'>
        <a href="www.linkedin.com/in/arjun-v-a9207b30a"><FaLinkedinIn /></a>
            <a href="https://www.facebook.com/profile.php?id=100053874756402"><FaFacebook /></a>
               <a href="https://www.instagram.com/ar.jyuu/"><FaInstagram /></a>
                
              
                
               
        </div>
        
       
      
    </div>
  )
}
