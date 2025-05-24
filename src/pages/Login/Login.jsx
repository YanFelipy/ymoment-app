import styles from './Login.module.css'
import { UseChangeTitle } from '../../hooks/useChangeTitle.jsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")


  UseChangeTitle("Entrar")

  let navigate = useNavigate()

  return (

    <div className={styles.login_box} >
      <div className={styles.title_login}>
        <h2>
          Entrar
        </h2>

        <p>Entre e compartilhe os seus momentos!</p>

      </div>

      <form className={styles.forms_login}>

        <label className={styles.labels}>
          <span>Email:</span>
          <input required placeholder="Insira seu e-mail" name='email' value={email} type='email' onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label className={styles.labels}>
          <span>Senha:</span>
          <input required placeholder="Insira sua senha" name='password' value={pass} type='password' onChange={(e) => setPass(e.target.value)} />
        </label>


        <div className={styles.submit_box_login}>
          <label className={styles.labels}>
            <input type='submit' value="Entrar" />
          </label>

          <button onClick={() => {
            navigate("/register");
          }} className={styles.simple_btn}>
            Não tem uma conta? Cadastre-se!
          </button>

        </div>

      </form>
    </div>

  )
}

export default Login