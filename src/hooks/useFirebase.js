import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect, useState } from "react";
import initializeAuthentication from './../Firebase/firebase.init';
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider).then(result => { console.log(result.user); }).then(error => { })
    }
    const logout = () => {
        signOut(auth).then(() => { setUser({}) }).catch((error) => { });
    }
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setUser(user)
        })
    }, [auth])

    return { user, signInWithGoogle, logout }
}

export default useFirebase;