import styles from './Navbar.module.css'
import { NavLink } from "react-router-dom"
const Navbar = () => {
  return (
    <nav className={styles.navbar} >
      
      <NavLink to="/" className={styles.brand}>
        y<span>Moment</span>
      </NavLink>

      <ul className={styles.navlinks}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>
         Página Inicial
          </NavLink>
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