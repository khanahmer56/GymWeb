import React from 'react'
import {MdEmail} from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp} from 'react-icons/io'
import Footer from './Footer';

const Contact = () => {
  return (
   <>
   <div className='contact'>
    <div className='upper'>
      <img src='https://github.com/egattor/react-website-1-starter/blob/main/images/header_bg_2.jpg?raw=true'alt='contact'/>
      <h1 className='contact-head'>Get In touch.</h1>
    </div>
    <div className='lower'>
      <div className='contact-icons'>
        <h1>Contact Us</h1>
        <a href='mailto:khanahmer56@gmail.com'><MdEmail size={50}/></a>
        <a href='https://m.me/khanahmer21@gmail.com'><BsMessenger size={50}/></a>
        <a href='https://wa.me/+919336583899'><IoLogoWhatsapp size={50}/></a>

      </div>
    </div>
   </div>
   <Footer/>
   </>
  )
}

export default Contact