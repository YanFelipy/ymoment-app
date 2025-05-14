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
      <h2>
        Cadastre-se
      </h2>

      <form action={handleSubmit} className={styles.forms_register}>

        <label className={styles.labels}>
          <span>Nome:</span>
          <input placeholder="Nome do usuário" name='name' value={name} type='text' onChange={(e) => setName(e.target.value)}/>
        </label>

        <label className={styles.labels}>
          <span>Email:</span>
          <input placeholder="Insira seu e-mail" name='email' value={email} type='email' onChange={(e) => setEmail(e.target.value)}/>
        </label>

        <label className={styles.labels}>
          <span>Senha:</span>
          <input placeholder="Insira sua senha" name='password' value={pass} type='' onChange={(e) => setPass(e.target.value)}/>
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