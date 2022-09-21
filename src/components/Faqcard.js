import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai';

const Faqcard = ({id,question,answer}) => {
    const [state, setstate]= useState(false);
  return ( 
    <>
    <div className='faqs-cont'>
        <div className='faqbtn'>
            <h4>{question}</h4>
            <button onClick={()=>setstate(!state)}>{ state ? <AiOutlineMinus size={30}/>: <AiOutlinePlus size={30}/>}</button>
        </div>
        {
            state ? <p>{answer}</p> : ''
        }
       
        

    </div>
    </>
  )
}

export default Faqcard