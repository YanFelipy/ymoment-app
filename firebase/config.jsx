import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBS7824nBYVdqIlOj7mL-4muwj66LmK3Qk",
    authDomain: "myminiblog-1f727.firebaseapp.com",
    projectId: "myminiblog-1f727",
    storageBucket: "myminiblog-1f727.firebasestorage.app",
    messagingSenderId: "502337539304",
    appId: "1:502337539304:web:8088829572a8103eff8d5d"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }