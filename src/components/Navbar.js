import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {links} from './data' 

const Navbar = () => {
  return (
 <nav>
    <div className='nav-container'>
        <div >
           <Link to='/' > <img src='https://github.com/egattor/react-website-1-starter/raw/main/images/logo.png' className='logo'/></Link>
        </div>
        <ul className='nav-link'>
        {
            links.map(({name, path},index)=>{
                return(
                    <li key={index}>
                        <NavLink to={path}  className={({isActive})=> isActive ? 'active-nav' : '' }>{name}</NavLink>
                    </li>
                )
            })
        }
        </ul>
    </div>
 </nav>
  )
}

export default Navbar