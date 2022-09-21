import React from 'react'
import {FaCrown} from 'react-icons/fa';
import Card from './Card';
import {programs} from './data';

const Program = () => {
  return (
<div className='pro-section'>
    <div className='crown'>
        <h1> Our Program</h1>
        <span>{<FaCrown size={40}/>}</span>
    </div>
    <div className='program-wrap'>
        {
            programs.map(({id ,icon,title,info,path})=> {
                return(<Card key={id} icon={icon} title={title} info={info} path={path}/>)
            })
        }

    </div>
</div>
  )
}

export default Program