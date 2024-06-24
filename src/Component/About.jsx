import React from 'react'
import { TbWorldWww } from "react-icons/tb";

export default function About() {
  return (
    <div  className='about'>
        <div className='head'>
        <h2>About</h2>
        <h2 className='hide'>About</h2>
        <h2 className='hide'>About</h2>
        </div>
       
        <div className='para'>
            <div className='para1'>
                <span> I'm Arjun ,   </span>
                <span className='bold'>a self-taught </span>
                <span> freelance </span>
                <span><TbWorldWww /></span>
                <span> Website   designer <br /> and developer  specialized  </span>
                <span> in the conception of designing  <br /> </span>
                <span className='bold'>custom </span>
                <span> and unique </span>
                <span className='under'>websites. </span>
                <span>Loves to design interface that  <br /></span>
                <span> are visually  appealing </span>
                <span>and has strong user experience.</span>
            </div>
            <div className='para2'>
            <span>My goal is to provide buisness owner with </span>
                <span className='bold'>unique</span>
                <span> designs, <br />while combining aesthatic excellence </span>
                <span>with user functionality. <br />My focus is to deliver </span>
                <span className='under'>tailor-made designs</span>
                  <span> that helps buisness  <br />owners to  </span>
                  <span className='bold'>grow</span>
                  <span> there brand and</span>
                  <span className='bold'> engage</span>
                  <span>  potential users.</span>
            </div>
        </div>
      
    </div>
  )
}
