import {db} from '../../firebase/config'
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

  const createUser = async (data) =>{

        checkIsCancelled()
        setLoading(true)

        try {

        const { user } =  await createUserWithEmailAndPassword (
               auth,
                data.email,
                data.pass,
            )

            await updateProfile(user, { displayName: data.name }

            )
            return user

        } catch (error) {
            console.log(error.message)
            console.log(typeof error.message)

        }

setLoading(false)

    }

    useEffect(()=>{
      return  setCancelled(true)
    }, [])

return {
    auth, createUser, error, loading
}


}
