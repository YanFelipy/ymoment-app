import styles from './Login.module.css'
import { UseChangeTitle } from '../../hooks/useChangeTitle.jsx'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {useAuthentication} from '../../hooks/useAuthentication.jsx'

const Login = () => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [error, setError] = useState("")
   const {error: authError, loading, login } = useAuthentication();

 UseChangeTitle("Entrar")
  let navigate = useNavigate()


const userLogin = async (e) =>{ 
e.preventDefault() 
 setError("");

const User = {
  email, 
  pass
}

// eslint-disable-next-line no-unused-vars
const res = await login(User)
}


  useEffect(() => {
    if (authError) {
      setError(authError);
      setPass("")
    }
  }, [authError]);
  return (
<main className={styles.app_login}>


    <div className={styles.login_box} >
      <div className={styles.title_login}>
        <h2>
          Entrar
        </h2>

        <p>Entre e compartilhe os seus momentos!</p>

      </div>

      <form onSubmit={userLogin}  className={styles.forms_login}>

        <label className={styles.labels}>
          <span>Email:</span>
          <input required placeholder="Insira seu e-mail" name='email' value={email} type='email' onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label className={styles.labels}>
          <span>Senha:</span>
          <input required placeholder="Insira sua senha" name='password' value={pass} type='password' onChange={(e) => setPass(e.target.value)} />
        </label>


        <div className={styles.submit_box_login}>

           {!loading &&
            <label className={styles.labels}>
              <input type='submit' value="Entrar"
              />
            </label>}

          {loading && <label className={styles.labels}>
            <input disabled type='submit' className={styles.disabled_submit} value="Aguarde..." />
          </label>}

          <button onClick={() => {
            navigate("/register");
          }} className={styles.simple_btn}>
            Não tem uma conta? Cadastre-se!
          </button>

        </div>

        <div className={styles.error}>
          {error && <p> {error}</p>}
        </div>

      </form>
    </div>
    </main>

  )
}

export default Login