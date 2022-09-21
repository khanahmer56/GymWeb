import React from 'react'
import {faqs} from './data'
import Faqcard from './Faqcard'

const Faq = () => {
  return (
  <>
  <div className='faq-container'>
    <h1>FAQs.</h1>
    <div className='faqs'>
        {
           faqs.map(({id,question,answer})=>{
            return(<Faqcard id={id} question={question} answer={answer}/>)
           })
        }

    </div>
  </div>
  </>
  )
}

export default Faq