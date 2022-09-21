import React from 'react'
import { Link } from 'react-router-dom'
import{AiFillCaretRight} from 'react-icons/ai'

const Card = ({icon, title, info,path}) => {
  return (
   <>
   <div className='card-cont'>
    <span className='icon'>{icon}</span>
    <h2>{title}</h2>
    <p>{info}</p>
    <Link to={path} className='btn cr'>Learn More. <AiFillCaretRight/></Link>

   </div>
   </>
  )
}

export default Card