import  { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import { app } from '../firebase/firebase.config';
import useAxiosPublic from '../Hook/useAxiosPublic';





export const AuthContext = createContext(null);


const auth=getAuth(app);



const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider=new GoogleAuthProvider();
    const axiosPublic=useAxiosPublic();



    const createUser=(email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //sign in
    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword( auth,email, password)
    }
    //google sign in
    const googleSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
//logout
const logOut=()=>{
    setLoading(true);
    return signOut(auth)
}
//update profile
const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    });
}

useEffect(()=>{
  const unSubscribe=  onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        if(currentUser){
            //get token and store client
            const userInfo={email: currentUser.email}
            axiosPublic.post('/jwt',userInfo)
            .then(res=>{
                if(res.data.token){
                    localStorage.setItem('access-token',res.data.token);
                }
            })
        }
        else{
            //todo remob=ve token
            localStorage.removeItem('access-token');
        }
        console.log('current user',currentUser);
        setLoading(false);
    });
    return()=>{
        return unSubscribe();
    }
}, [axiosPublic])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSignIn
    } 
    return (


        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;