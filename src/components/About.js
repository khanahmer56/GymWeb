import React from 'react'
import Footer from './Footer'

const About = () => {
  return (
  <>
  <div className='about-container'>
    <div className='about-top'>
      <img src='https://github.com/egattor/react-website-1-starter/blob/main/images/header_bg_1.jpg?raw=true' alt='about'/>
      <div className='about-heading'>
        <h1>About Us</h1>
        <p>What does the Lorem Ipsum text actually say?
           The lorem ipsum gets its name from the Latin phrase Neque porro quisquam est qui dolorem ipsum quia dolor sit amet..</p>
      </div>
    </div>
    <div className='about-btm'>
    <h1>Our Story</h1>
      <div className='story1'>
        <img src='https://github.com/egattor/react-website-1-starter/blob/main/images/about1.jpg?raw=true' alt='story'/>
        <div>
         
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
             It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. 
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
              and more recently with desktop publishing software like Aldus P</p>
        </div>
      </div>
      <div className='story2'>
        <div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
             It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. 
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
              and more recently with desktop publishing software like Aldus P</p>
        </div>
        <img src='https://github.com/egattor/react-website-1-starter/blob/main/images/about2.jpg?raw=true' alt='story2'/>

      </div>
      <div className='story2'>
      <img src='https://github.com/egattor/react-website-1-starter/blob/main/images/about3.jpg?raw=true' alt='story2'/>
        <div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
             It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. 
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
              and more recently with desktop publishing software like Aldus P</p>
        </div>

      </div>
    </div>
  </div>
  <Footer/>
  </>
  )
}

export default About