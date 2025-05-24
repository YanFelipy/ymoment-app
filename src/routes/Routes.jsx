

//PAGES & ROUTES

import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'

const RoutesPages = () => {
  
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Login' element={<Login/>} />
       <Route path='/Register' element={<Register/>} />
    </Routes>

  )
}

export default RoutesPages