import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState([]);
    const navigate = useNavigate();
    
    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();

        setError([]);
        if(user.email === '' || user.password === '') {
            setError('Tous les champs sont requis');
        }else{
            // await posting the user to the backend
            navigate('/profile');
        }
    }

    return (
    
        <div className="login-container flex flex-row h-screen">
            <div className='image-container w-1/3 bg-slate-800'>
                <img src='' alt='' />
            </div>
            <div className='form-container flex-col gap-12 text-2xl w-2/3 '>
                <form className='m-11 flex flex-col gap-8	'>
                    <h1 className='text-4xl mb-14'>Se connecter</h1>
                    <div className='form-group flex flex-col gap-6'>
                        <label htmlFor='email'>Email</label>
                        <input required className='h-18 p-4 border-solid border-2 border-blue-400 focus:border-blue-700 bg-slate-200 rounded' type='email' name='email' id='email' placeholder='Enter email' onChange={onChange} />
                    </div>
                    <div className='form-group flex flex-col gap-6'>
                        <label htmlFor='password'>Mot de passe</label>
                        <input required className='h-18 p-4 border-solid border-2 border-blue-400 focus:border-blue-700 bg-slate-200 rounded' type='password' name='password' id='password' placeholder='Enter password' onChange={onChange} />
                    </div>
                    <div className='form-group flex flex-col gap-6'>
                        <button className='h-18 p-4 bg-blue-400 hover:bg-blue-700 rounded text-white' type='submit' onClick={onSubmit}>Se connecter</button>
                    </div>
                    <div className='form-group flex flex-col gap-6'>
                        <p className='text-red-500'>{error}</p>
                    </div>
                </form>
            </div>
        </div>

    )
}
