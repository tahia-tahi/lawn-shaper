import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext()


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

   const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

  useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => {
            unsubscribe()
        }
    }, [])

    const authData = {
        user,
        setUser,
        createUser
    }


      return <AuthContext value={authData}>{children}</AuthContext>


}

export default AuthProvider;


