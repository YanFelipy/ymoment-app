import styles from './Navbar.module.css'
import { NavLink } from "react-router-dom"

import { useAuthentication } from '../hooks/useAuthentication'
import {useAuthValue} from '../../context/AuthContext'


const Navbar = () => {
const {user} = useAuthValue()
const {logout} = useAuthentication()

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