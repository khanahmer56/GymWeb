import React from 'react'
import { plans } from './data'
import Footer from './Footer'


const Plans = () => {
  return (
   <>
   <div className='plan-container'>
    <div className='plan-top'>
      <img src='https://github.com/egattor/react-website-1-starter/blob/main/images/header_bg_4.jpg?raw=true' alt='plan'/>
      <h1>Our Plans.</h1>

    </div>
    <div className='plan-btm'>
   {
    plans.map(({id,name,desc,price,features})=>{
      return(<>
      
      <div className='plan-card'>
        <h3>{name}</h3>
        <small>{desc}</small>
        <h1>{`$${price}/mo`}</h1>
        <h4>Features</h4>
        {
          features.map(({feature,available},index)=>{
            return(
              <p key={index} className={!available ? 'disable': ''}>{feature}</p>
            )
          })
        }
        <button className='plan-btn'>Choose plan</button>
        
     
      </div>
      </>)
    })
   }
   </div>
   </div>
   <Footer/>
   </>
  )
}

export default Plans