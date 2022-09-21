import React from 'react'
import { Link } from 'react-router-dom'
import Faq from './Faq'
import Footer from './Footer'
import Program from './Program'
import Testimonial from './Testimonial'
import Value from './Value'

const Header = () => {
  return (
    <>
   <div className='header-container'>
    <div className='left'>
        <h4>#100DaysofWorkout</h4>
        <h1>Join The legend of the fitness world</h1>
        <p>“To keep the body in good health is a duty… <br/>
            otherwise we shall not be able to keep our mind strong and clear.”<br/>
             
        </p>
        <Link to='/plans' className='btn'>Get started</Link>
    </div>
    <div className='right'>
        <div className='image-section'>
        </div>
        <div className='img'>
            <img src='https://github.com/egattor/react-website-1-starter/raw/main/images/main_header.png' alt='ahmer'/>
        </div>
    </div>
   </div>
    <Program/>
    <Value/>
    <Faq/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default Header