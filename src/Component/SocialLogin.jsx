import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import UseAuth from '../Hook/UseAuth';
import useAxiosPublic from '../Hook/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const axiosPublic=useAxiosPublic();
    const navigate=useNavigate();

    const {googleSignIn}=UseAuth();

    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            console.log(result.user);
            const userInfo={
                email:result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data);
                navigate('/');
            })
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