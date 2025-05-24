//GEN. STYLES
import './App.css'

//COMPONENTS 
import RoutePages from './routes/Routes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

//CONTEXT
import AuthProvider from '../context/AuthContext'

//FIREBASE AUTH
import { onAuthStateChanged } from 'firebase/auth'


//HOOKS 
import { BrowserRouter} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthentication'


const App = () => {

  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined

  useEffect(()=>{
onAuthStateChanged(auth, (user)=>{
setUser(user)

})
,[auth]
}

)

  if(loadingUser){
    return <p>Carregando...</p>
  }

  return (
    <div className="app">
      <AuthProvider value={{user}}>

            <BrowserRouter>
            <Navbar/>
        <div className="container">

<RoutePages />

        </div>
      </BrowserRouter>
       <Footer/>
      </AuthProvider>
    </div>
  )
}

export default App
