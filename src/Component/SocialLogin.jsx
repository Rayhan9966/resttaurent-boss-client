import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import UseAuth from '../Hook/UseAuth';

const SocialLogin = () => {
    const {googleSignIn}=UseAuth();
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user);
        })

    }
    return (
        <div className='mr-2 p-4'>
             <div className="divider"></div> 
            <button onClick={handleGoogleSignIn} className="btn btn-primary">
               <FaGoogle></FaGoogle>Google
            </button>
        </div>
    );
};

export default SocialLogin;