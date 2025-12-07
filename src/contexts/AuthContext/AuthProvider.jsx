import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {auth} from '../../firebase/firebase.init'
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import Loading from '../../components/Loading';

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()

    const registerUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const signInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile )
    }
    //observer
useEffect(()=>{
 const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
    setUser(currentUser)
    setLoading(false)
 })
 return() =>{
    unSubscribe()
 }
},[])


if(loading){
    return <Loading></Loading>
}
    const authInfo ={
        registerUser,
        signInUser,
        signInGoogle,
        user,
        loading,
        logOut,
        updateUserProfile
    }
    return (
            <AuthContext value={authInfo} >
                    {children}
            </AuthContext>
    );
};

export default AuthProvider;