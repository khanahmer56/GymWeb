import React from 'react'
import {GiCutDiamond} from 'react-icons/gi';
import Card2 from './Card2';
import {values} from './data'

const Value = () => {
  return (
   <>
   <div className='value-cont'>
    <div className='value-left'>
        <img src='https://github.com/egattor/react-website-1-starter/blob/main/images/values.jpg?raw=true' alt='valueimg' className='value-img'/>
    </div>
    <div className='value-right'>
       <div className='value-card'>
        <GiCutDiamond size={25} className='diamond'/>
        <h1>Values</h1>
       </div>
       <div className='value3'>
        {
            values.map(({key ,icon,title,desc })=>{
                return(<Card2 key={key} icon={icon} title={title} desc={desc}/>)
            })
        }
        </div>
    </div>

   </div>
   </>
  )
}

export default Value