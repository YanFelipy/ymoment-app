import { Routes, Route } from 'react-router-dom'

//PAGES 
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Dashboard from '../pages/Dashboard/Dashboard'
import About from '../pages/About/About'

import { useAuthValue } from '../../context/AuthContext'

const RoutesPages = () => {

  const {user} = useAuthValue()
  
  return (
    <Routes>
      {user && 
<Route path='/' element={<Dashboard/>} />
}
      {!user && 
        <Route path='/' element={<Login/>} />
      }
      <Route path='/About' element={<About />} />



       <Route path='/Register' element={<Register/>} />
    </Routes>

  )
}

export default RoutesPages