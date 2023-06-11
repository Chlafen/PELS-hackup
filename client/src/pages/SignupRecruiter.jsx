import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function SignupUser() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        role: 'recruiter'
    });
    const [error, setError] = useState([]);

    const { name, email, password, password2 } = user;

    const navigate = useNavigate();

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        
        setError([]);
        if(password !== password2) {
            setError('Mot de passe non identique')      
        }else if(name === '' || email === '' || password === '') {
            setError('Tous les champs sont requis');
        }else if(password.length < 8) {
            setError('Le mot de passe doit contenir au moins 8 caractères');
        }else {
            // await posting the user to the backend
            navigate('/login');
        }

    

    }

    const handleInput = (e) => {
        e.preventDefault();
        setUser({ ...user, [e.target.name]: e.target.value });
    }


    return (
        <div className="signup-container flex flex-row h-screen">
            <div className='image-container w-1/3 bg-slate-800'>
                <img src='' alt='' />
            </div>
            <div className='form-container flex-col gap-12 text-2xl w-2/3 '>
                <form className='m-11 flex flex-col gap-8	'>
                    <h1 className='text-4xl mb-14'>S'inscrire tant que recruiteur</h1>
                    <div className='form-group flex flex-col gap-6 '>
                        <label htmlFor='name'>Nom et Prénom</label>
                        <input required className='h-18 p-4 border-solid border-2 border-blue-400 focus:border-blue-700 bg-slate-200 rounded' type='text' name='name' id='name' placeholder='Enter name' value={name} onChange={onChange} />
                    </div>
                    <div className='form-group flex flex-col gap-6'>
                        <label htmlFor='email'>Email</label>
                        <input required className='h-18 p-4 border-solid border-2 border-blue-400 focus:border-blue-700 bg-slate-200 rounded' type='email' name='email' id='email' placeholder='Enter email' value={email} onChange={onChange} />
                    </div>
                    <div className='form-group flex flex-col gap-6'>
                        <label htmlFor='password'>Mot de passe</label>
                        <input required className='h-18 p-4 border-solid border-2 border-blue-400 focus:border-blue-700 bg-slate-200 rounded' type='password' name='password' id='password' placeholder='Enter password' value={password} onChange={onChange} />
                    </div>
                    <div className='form-group flex flex-col gap-6'>
                        <label htmlFor='password2'>Confirmer Mot de passe</label>
                        <input required className='h-18 p-4 border-solid border-2 border-blue-400 focus:border-blue-700 bg-slate-200 rounded' type='password' name='password2' id='password2' placeholder='Confirm password' value={password2} onChange={onChange} />
                    </div>
                    <p  className='text-red-500'>{error}</p>
                    <input type='submit' value="S'inscrire" className='bg-blue-500 hover:bg-blue-700 text-white mt-8  py-6 px-6 rounded max-w-md cursor-pointer' onClick={onSubmit} />
                    <p className='text-2xl'>Déja inscrit? <Link className='text-blue-800' to='/login'>Login</Link></p>
                </form>
            </div>
            
        </div>
    );
}
