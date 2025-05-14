import { BrowserRouter } from 'react-router-dom'
import RoutePages from './routes/Routes'
import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="app">
            <BrowserRouter>
            <Navbar/>
        <div className="container">

<RoutePages />

        </div>
      </BrowserRouter>
       <Footer/>
    </div>
  )
}

export default App
