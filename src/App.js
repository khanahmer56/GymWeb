import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import Home from './components/Home'
import Plans from './components/Plans'
import Error from './components/Error'
import Navbar from './components/Navbar'

const App = () => {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/plans' element={<Plans/>}/>
    <Route path='*' element={<Error/>}/>
   </Routes>
   </>
  )
}

export default App