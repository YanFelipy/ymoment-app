import styles from './Register.module.css'

import { useState, useEffect } from 'react'


const Register = () => {

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [pass, setPass] = useState("")
  


  useEffect

  const handleSubmit = (e) => {
    e.preventDefault()

    const User = {
      name,
      email,

    }

  }


  return (
    <div className={styles.register_box} >
      <div className={styles.title_register}>
      <h2>
        Cadastre-se
      </h2>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      </div>

      <form action={handleSubmit} className={styles.forms_register}>

        <label className={styles.labels}>
          <span>Nome:</span>
          <input required placeholder="Nome do usuário" name='name' value={name} type='text' onChange={(e) => setName(e.target.value)}/>
        </label>

        <label className={styles.labels}>
          <span>Email:</span>
          <input required placeholder="Insira seu e-mail" name='email' value={email} type='email' onChange={(e) => setEmail(e.target.value)}/>
        </label>

        <label className={styles.labels}>
          <span>Senha:</span>
          <input required placeholder="Insira sua senha" name='password' value={pass} type='password' onChange={(e) => setPass(e.target.value)}/>
        </label>

        
        <label className={styles.labels}>
          <span>Confirmação de senha:</span>
          <input required placeholder="Digite sua senha novamente" name='confirm password' value={confirm} type='password' onChange={(e) => setPass(e.target.value)}/>
        </label>

        <div className={styles.submit_box}>
          <label className={styles.labels}>
            <input type='submit' value="Cadastrar-se" />
          </label>

        </div>



      </form>
    </div>
  )
}

export default Register