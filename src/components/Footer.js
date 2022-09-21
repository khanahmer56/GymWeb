import React from 'react'
import {AiFillLinkedin , AiFillInstagram,AiFillTwitterCircle,AiFillFacebook} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <footer className='mainfot'>
    <div className='footercont'>
        <div className='foot1'>
           <Link to='/'> <img src='https://github.com/egattor/react-website-1-starter/raw/main/images/logo.png' alt='foot'/></Link>
            <p>Make fitness a habit. Motivation is what gets you started. Habit is what keeps you going. - Jim Ryin.</p>
            <div className='footicons'>
               <a href='https://www.linkedin.com/'> <AiFillLinkedin size={30} className='footicon'/></a>
               <a href='https://www.instagram.com/'> <AiFillInstagram size={30} className='footicon'/></a>
                <a href='https://www.twitter.com/'><AiFillTwitterCircle size={30} className='footicon'/></a>
                <a href='https://www.facebok.com/' ><AiFillFacebook size={30} className='footicon'/></a>
            </div>
        </div>
        <div className='foot2'>
            <h2>Permalinks</h2>
           <Link to='/about'>About</Link>
           <Link to='/plans'>Plans</Link>
           <Link to='/gallery'>Gallery</Link>
           <Link to='/trainers'>Trainers</Link>
           <Link to='/contact'>Contact</Link>
        </div>
        <div className='foot3'>
            <h2>Insight</h2>
            <h4>Blog</h4>
            <h4>Case Studies</h4>
            <h4>Events</h4>
            <h4>Communities</h4>
            <h4>FAQs</h4> 
        </div>
        <div className='foot4'>
        <h2>Get In Touch</h2>
           <Link to='/contact'>Contact us</Link>
           <Link to='/contact'>Support</Link>
        </div>


    </div>
    <div className='line'>
 <h4> 2022 Ahmer Khan Project All right reserved</h4>  
</div>
   </footer>
  )
}

export default Footer