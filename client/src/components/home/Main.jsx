import React from 'react'
import { useNavigate } from 'react-router';

export default function Main() {
    const navigate = useNavigate();


    const handleSignupUsr = () => {
        navigate('/signup/user');
    }
    const handleSignupRec = () => {
        navigate('/signup/recruiter');
    }
    const handleLanguage = (e) => {
        console.log(e.target.value)
    }
    return (
        <div className="bg-slate-800 text-slate-100 flex flex-col justify-start items-end pt-6 h-screen pl-20 pr-20">
            <div className="language-select text-slate-800">
                <select className="select-language bg-slate-100 text-slate-800 font-bold py-2 px-4 rounded" onChange={handleLanguage}>
                    <option value="fr">🇫🇷</option> 
                    <option value="ar">العربية</option>
                </select>
            </div>
            <div className='p-24 flex justify-center items-center flex-wrap flex-row '>
                <div className='w-1/2 '> 
                    <h1 className='text-8xl mb-10'>Lorem ipsum dolor sit </h1>
                    <h2 className='text-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum t amet consectetur adipisicing elit. Quisquam, volupt.</h2>
                </div>
                <div className='w-1/2'>
                    <video src='https://www.youtube.com/watch?v=QwievZ1Tx-8' controls className='w-full'></video>
                </div>
            </div>
            {/* 2 buttons with mui */}
            <div className='flex justify-center items-center h-24 bg-slate-800 text-slate-100 gap-4 self-center text-4xl'>
                <button className='bg-emerald-900 hover:bg-emerald-600 text-slate-100  py-6 px-12 rounded ' onClick={handleSignupRec}>
                    Je recruite! 🤝
                </button>
                <button className='bg-emerald-900 hover:bg-emerald-600 text-slate-100  py-6 px-12 rounded' onClick={handleSignupUsr}>
                    Je cherche un travail! ✅
                </button>
            </div>
        </div>
    )
}
