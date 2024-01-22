import React, { useState } from 'react';
import axios from 'axios';
import sha256 from 'crypto-js/sha256';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { tokenData } from '../../Store/features/AccessTokenData';

function Login() {
    const navigation = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState({
        emailError: "",
        passError: ""
    });

    const handleEmailChange = (e) => {
        let emailVal = e.target.value;
        setEmail(emailVal);
    }

    const handlePasswordChange = (e) => {
        let passVal = e.target.value
        setPassword(passVal);
    }

    const handleLogin = async () => {
        try {
            const formData = new FormData();
            //email validation usign regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                setErrorMsg((prev)=>({...prev, emailError : "Enter Correct Email format"}));
                return;
            }
            //password validation usign regex
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!passwordRegex.test(password)) {
                setErrorMsg((prev)=>({...prev, passError : "Password must be 8 char long & contain one upperCase letter, one loweCase letter, one number, and one special character."}));
                return;
            }

            //hashed password
            const hashedPass = sha256(password).toString();
            formData.append('username', email);
            formData.append('password', hashedPass);
            formData.append('grant_type', 'password');

            const response = await axios.post(
                'https://apiv2stg.promilo.com/user/oauth/token', formData, {
                headers: {
                    'Authorization': 'Basic UHJvbWlsbzpxNCE1NkBaeSN4MiRHQg=='
                }
            });
            // console.log(response.data.response.access_token)
            dispatch(tokenData(response.data.response.access_token));
            navigation('/product-list');
        } catch (error) {
            setErrorMsg('Invalid email or password');
        }
    }


    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className='border-2 p-20 rounded-md bg-sky-900 flex-col items-center flex space-y-2 '>
            <input
                type="text"
                name='email'
                value={email}
                onChange={handleEmailChange}
                className='mb-2 p-2 border-2 rounded'
                placeholder='Enter your email'
            />
            <div className='text-red-500 text-sm text-center'>{errorMsg.emailError}</div>
            <input
                type="password"
                name='password'
                value={password}
                onChange={handlePasswordChange}
                className='mb-2 p-2 border-2  rounded'
                placeholder='Enter your password'
            />
            <div className='text-red-500 text-sm text-center'>{errorMsg.passError}</div>
            <button onClick={handleLogin} className='bg-cyan-400 text-white px-4 py-2 rounded'>
                Login
            </button>
            </div>
        </div>
    );
}

export default Login;
