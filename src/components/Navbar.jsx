import styles from './Navbar.module.css'
import { NavLink } from "react-router-dom"

import { useAuthentication } from '../hooks/useAuthentication'
import {useAuthValue} from '../../context/AuthContext'


const Navbar = () => {
const {user} = useAuthValue()

  return (
    <nav className={styles.navbar} >
      {!user&&
      <NavLink to="/login" className={styles.brand}>
        y<span>Moments</span>.
      </NavLink>}

       {user&&
      <NavLink to="/dashboard" className={styles.brand}>
        y<span>Moments</span>.
      </NavLink>}

      <ul className={styles.navlinks}>
{user&&
<>
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? styles.active : "")}>
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

      </ul>
    </nav>
  )
}

export default Navbar