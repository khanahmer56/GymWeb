import React, { useState } from 'react'

import { testimonials } from './data'
import {BsArrowLeftSquareFill,BsArrowRightSquareFill} from 'react-icons/bs'

const Testimonial = () => {
    const [test , settest] = useState(2)
    const {name,quote,job,avatar} = testimonials[test];
    const leftclick=()=>{
      (settest(test-1));
if(test<=0)
{settest(testimonials.length-1)}
    }
    const rightclick=(prev)=>{
        (settest(test+1));
        if(test>=testimonials.length-1)
        {
            settest(0);
        }
          }
  return (
   <>
   <div className='testi-container'>
    <h1>Testimonials.</h1>
    <div className='testimo'>
        <img src={avatar} className='imgtesti' alt='testimoni'/>
        <p>{quote}</p>
        <h3>{name}</h3>
        <p>{job}</p>
    </div>
    <div className='testibtn'>
        <BsArrowLeftSquareFill size={30} className='arrow' onClick={leftclick}/>
        <BsArrowRightSquareFill size={30} className='arrow' onClick={rightclick}/>
    </div>
   </div>
   </>
  )
}

export default Testimonial