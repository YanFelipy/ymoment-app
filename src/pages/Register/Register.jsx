import styles from './Register.module.css'

import { useNavigate } from "react-router";

import { useState, useEffect } from 'react'

import { UseChangeTitle } from '../../hooks/useChangeTitle.jsx'
import { useAuthentication } from '../../hooks/useAuthentication.jsx'




function Register() {

  const navigate = useNavigate("")

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");


  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const User = {
      name,
      email,
      pass,
    };

    if (pass !== confirmPass) {
      setError("As senhas precisam ser iguais!");
      setPass('');
      setConfirmPass('');
      return;
    }

    if (name.length < 3) {
      setError("Nome inválido, digite um nome corretamente!");
      return;
    }

    const res = await createUser(User);
    console.log(res);
  };



  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);


  UseChangeTitle("Cadastre-se");
  return (
    <div className={styles.register_box}>
      <div className={styles.title_register}>
        <h2>
          Cadastre-se
        </h2>
        <p>Crie seu usuário e compartilhe suas histórias</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.forms_register}>

        <label className={styles.labels}>
          <span>Nome:</span>
          <input required placeholder="Nome do usuário" name='name' value={name} type='text' onChange={(e) => setName(e.target.value)} />
        </label>

        <label className={styles.labels}>
          <span>Email:</span>
          <input required placeholder="Insira seu e-mail" name='email' value={email} type='email' onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label className={styles.labels}>
          <span>Senha:</span>
          <input required placeholder="Insira sua senha" name='password' value={pass} type='password' onChange={(e) => setPass(e.target.value)} />
        </label>


        <label className={styles.labels}>
          <span>Confirmação de senha:</span>
          <input required placeholder="Digite sua senha novamente" name='confirm password' value={confirmPass} type='password' onChange={(e) => setConfirmPass(e.target.value)} />
        </label>

        <div className={styles.submit_box}>

          {!loading &&
            <label className={styles.labels}>
              <input type='submit' value="Cadastrar-se" />
            </label>}

          {loading && <label className={styles.labels}>
            <input disabled type='submit' className={styles.disabled_submit} value="Aguarde..." />
          </label>}


          <button onClick={() => {
            navigate("/login");
          }} className={styles.simple_btn}>
            Já tem uma conta? Faça login!
          </button>
        </div>

        <div className={styles.error}>
          {error && <p> {error}</p>}
        </div>


      </form>


    </div>
  );
}

export default Register