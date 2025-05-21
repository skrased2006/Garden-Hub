import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (curentUser) => {
            setUser(curentUser);
           
          
         
        });
        return () => {
            unSubscribe();
        };
    }, []);

    const createUser=(email,password)=>{
        return  createUserWithEmailAndPassword(auth,email,password);
      }
  
      const login=(email,password)=>{
         return signInWithEmailAndPassword(auth,email,password);
      }
      const googleLogin = () =>{
          return signInWithPopup(auth,provider);
      }
  
      const logout = () =>{
          return signOut(auth);
      }
  
  
  
  
    const authData = {
      user,
      setUser,
      createUser,
      login,
      googleLogin,
      logout
  
     
    };


    return <AuthContext value={authData}>
        {children}

    </AuthContext>
};

export default AuthProvider;