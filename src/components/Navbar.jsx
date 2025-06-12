import styles from './Navbar.module.css'
import { NavLink } from "react-router-dom"
import { useState } from 'react'

import { useAuthentication } from '../hooks/useAuthentication'
import {useAuthValue} from '../../context/AuthContext'


const Navbar = () => {
const {user} = useAuthValue()
const {logout} = useAuthentication()
const [query, setQuery] = useState("")



  return (

    <nav className={styles.navbar} >
   
      <NavLink to="/" className={styles.brand}>
        y<span>Moments</span>.
      </NavLink>

       
      <ul className={styles.navlinks}>


{user&&
<>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>
         Página Inicial
          </NavLink>
        </li>
        </>
}
      
        {!user && 
        <>
<li>
  <div className={styles.field_search}>
    <input placeholder='Procure por hashtags...' type='text' name='query' value={query}  onChange={(e) => setQuery(e.target.value)}/>
    <div className={styles.svg_search}>
      <button >
    <svg width="30px" height="30px" viewBox="-8.32 -8.32 48.64 48.64" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" stroke="#000000" stroke-width="0.00032"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.064"></g><g id="SVGRepo_iconCarrier"> <g id="icomoon-ignore"> </g> <path d="M28.591 27.273l-7.263-7.264c1.46-1.756 2.339-4.010 2.339-6.471 0-5.595-4.535-10.129-10.129-10.129-5.594 0-10.129 4.535-10.129 10.129 0 5.594 4.536 10.129 10.129 10.129 2.462 0 4.716-0.879 6.471-2.339l7.263 7.264 1.319-1.319zM4.475 13.538c0-4.997 4.065-9.063 9.063-9.063 4.997 0 9.063 4.066 9.063 9.063s-4.066 9.063-9.063 9.063c-4.998 0-9.063-4.066-9.063-9.063z" fill="#000000"> </path> </g></svg>
      </button>
    </div>
  </div>
</li>

        <li>
          <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : "")}>
            Entrar
          </NavLink>
        </li>

         <li>
          <NavLink to="/register" className={({ isActive }) => (isActive ? styles.active : "")}>
      Cadastrar
          </NavLink>
        </li>
          </>      
              }
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : "")}>
Sobre
          </NavLink>
        </li>

   {user && 
         <li >
          <a alt="Fazer Logout" className={styles.icon_logout} onClick={logout}>
          <svg   fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 16L21 12M21 12L17 8M21 12L7 12M13 16V17C13 18.6569 11.6569 20 10 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H10C11.6569 4 13 5.34315 13 7V8" stroke="#374151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/></svg>
          </a>
        </li>
}
      </ul>
    </nav>
  )
}

export default Navbar