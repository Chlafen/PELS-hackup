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
        <div className="bg-red-700 px-96 text-slate-100 flex flex-col justify-start items-end pt-30 h-screen text-right">
            <div className="language-select pt-8 text-slate-800">
                <select className="select-language bg-slate-100 text-slate-800 font-bold py-2 px-4 rounded" onChange={handleLanguage}>
                    <option value="ar">العربية</option>
                    <option value="fr">🇫🇷</option> 
                </select>
            </div>
            <div className='py-24 w-full flex justify-between items-center flex-wrap flex-row '>
                <div className='w-1/2'>
                    <video src='https://www.youtube.com/watch?v=QwievZ1Tx-8' controls className='w-full'></video>
                </div>
                <div className='w-2/5 px-5 '> 
                    <h1 className='text-8xl mb-10'>من نحن </h1>
                    <h2 className='text-4xl'>تعرّف على حقوقك وكلّ ما يتعلق بضمان شغل آمن ليك ولغيرك</h2>
                </div>
            </div>
            {/* 2 buttons with mui */}
            <div className='flex justify-center items-center h-24   text-slate-100 gap-4 self-center text-4xl'>
                <button className='bg-gray-100 font-semibold hover:bg-gray-300 text-slate-800  py-6 px-12 rounded ' onClick={handleSignupRec}>
                أقوم بالتوظيف
                </button>
                <button className='bg-gray-100 font-semibold hover:bg-gray-300 text-slate-800  py-6 px-12 rounded' onClick={handleSignupUsr}>
                أنا أبحث عن عمل 
                </button>
            </div>
        </div>
    )
}
