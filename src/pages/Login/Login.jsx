import styles from './Login.module.css'
import { UseChangeTitle } from '../../hooks/useChangeTitle.jsx'

const Login = () => {
UseChangeTitle("Entrar")

  return (
    <div>
        <h2>
            Login
        </h2>

        <form className={styles.forms_login}>

<label className={styles.labels}>
    <span>Nome:</span>
    <input  name='name' type='text'></input>
</label>
        </form>
    </div>
  )
}

export default Login