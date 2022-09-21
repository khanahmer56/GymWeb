import React from 'react'

const Card2 = ({ icon,title,desc}) => {
  return (
   <>
   <div className='card-cont2' >
    <span>{icon}</span>
    <h2>{title}</h2>
    <p>{desc}</p>
   </div>
   </>
  )
}

export default Card2