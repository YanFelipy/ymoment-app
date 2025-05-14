import { BrowserRouter } from 'react-router-dom'
import RoutePages from './src/routes/Routes'
import './App.css'

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="container">

<RoutePages />

        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
