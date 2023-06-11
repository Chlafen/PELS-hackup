import React from 'react'
import Layout from '../common/Layout'


export default function Report() {
  return (
    <Layout>
        <div className='flex flex-col justify-center gap-9 mx-60'>
            {/* a form to report a company, it has name, accused and description */}
            <h2 className='text-5xl mt-20 text-center'>Reporter un abus</h2>
            <div className="flex flex-row   ">

            <form className='flex flex-col justify-start items-start gap-8 w-2/3'>
                <h1 className='text-2xl'>Votre Nom</h1>
                <input type='text' className='border-2 border-blue-500 rounded-md w-1/2 h-10'/>
                <h1 className='text-2xl'>Entreprise Accusé</h1>
                <input type='text' className='border-2 border-black rounded-md w-1/2 h-10'/>
                <h1 className='text-2xl'>Description</h1>
                <textarea type='text' className='border-2 border-blue-500 rounded-md w-1/2 h-40'/>
                <button className='border-2 border-blue-500 rounded-md w-1/2 h-10'>Envoyer</button>
            </form>
            {/* img https://media.istockphoto.com/id/1322842973/photo/diverse-business-people-putting-their-hands-together-in-cirle.jpg?s=612x612&w=0&k=20&c=9BAYCv8tAsgYPQdTsFxLzLJsmt6tGYE5Etwd63OccxQ= */}
            <div className='flex justify-center items-center w-2/3 '>
                <img className='min-w-full' src='https://media.istockphoto.com/id/1322842973/photo/diverse-business-people-putting-their-hands-together-in-cirle.jpg?s=612x612&w=0&k=20&c=9BAYCv8tAsgYPQdTsFxLzLJsmt6tGYE5Etwd63OccxQ='></img>
            </div>
            </div>
        </div>
    </Layout>
  )
}
