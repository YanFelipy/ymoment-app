import { Routes, Route } from 'react-router-dom'

//PAGES 
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Dashboard from '../pages/Dashboard/Dashboard'
import About from '../pages/About/About'
import Post from '../pages/Post/Post'
import Search from '../pages/Search/Search.jsx'

//HOOKS
import { useAuthValue } from '../../context/AuthContext'

const RoutesPages = () => {

  const {user} = useAuthValue()
  
  return (
    <Routes>
      
<Route path='/' element={user ?  
<Dashboard/> :<Login/>
} />

<Route path='/login' element={user ?  
<Dashboard/> :<Login/>
}/>

<Route path='/search' element={user ?  
<Search/> :<Login/>
}/>

       <Route path='/Register' element={!user ?  
 <Register/> : <Dashboard/>
}/>

<Route path='/About' element={<About />} />

 <Route path='/posts/:postId' element={<Post />} />
 
    </Routes>

  )
}

export default RoutesPages