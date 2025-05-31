
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut

} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    const auth = getAuth()

    // cleanup /*

    const [cancelled, setCancelled] = useState(false)


    function checkIsCancelled() {
        if (cancelled) {
            return
        }
    }

    //user create
    const createUser = async (data) => {

        setError("")
        checkIsCancelled()
        setLoading(true)


        try {

            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.pass,
            )

            await updateProfile(user, { displayName: data.name }

            )
            setLoading(false)

            return user

            //errors

        } catch (error) {
            console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage

            if (error.message.includes("wrong-password")) {
                systemErrorMessage = "A senha precisa ter mais de 6 caracteres"
            }

            else if (error.message.includes("(auth/email-already-in-use")) {
                systemErrorMessage = "Este email já está sendo usado, insira outro!"
            }
            else if (error.message.includes("invalid-email)")) {
                systemErrorMessage = "Email inválido, digite seu email corretamente"
            }
            else {
                systemErrorMessage = "Ocorreu um erro, tente novamente mais tarde"
            }
            setLoading(false)
            setError(systemErrorMessage)
        }


    }

    //LOGOUT

const logout = () => {
checkIsCancelled()

signOut(auth)

}

   //LOGIN
const login = async (data) => {
checkIsCancelled()
setError(false)

try {
  await signInWithEmailAndPassword( auth, data.email, data.pass)
  
  setLoading(false)

} catch (error) {
    console.log(error.message)
            console.log(typeof error.message)

            let systemErrorMessage

            if (error.message.includes("auth/user-not-found")) {
                systemErrorMessage = "Este e-mail não está associado a nenhuma conta do yMoment"
            }

            else if (error.message.includes("(auth/invalid-credential")) {
                systemErrorMessage = "E-mail ou senha incorretos, verifique e tente novamente"
            }
            else if (error.message.includes("invalid-email)")) {
                systemErrorMessage = "Email inválido, digite seu email corretamente"
            }
            else {
                systemErrorMessage = "Ocorreu um erro, tente novamente mais tarde"
            }
            setError(systemErrorMessage)
            setLoading(false)

}

}

    useEffect(() => {
        return setCancelled(true)
    }, [])







    
    return {
        auth, createUser, error, loading, logout, login
    }


    

}



