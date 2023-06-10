import React from 'react'
import Layout from '../common/Layout'

export default function Legal() {
  return (
    <Layout>
        <div className='flex flex-col justify-center gap-9 mx-60'>
            <h2 className='text-8xl text-center'>Legal</h2>
            {/* video */}
            <div className='flex justify-center items-center '>
                <video src='https://www.youtube.com/watch?v=QwievZ1Tx-8' controls className='w-full'></video>
            </div>
            {/* text desc*/}
            <div className='flex flex-col justify-center items-center gap-8'>
                <h1 className='text-4xl'>1. Lorem Ipsum</h1>
                <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum t amet consectetur adipisicing elit. Quisquam, voluptLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum t amet consectetur adipisicing elit. Quisquam, voluptLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum t amet consectetur adipisicing elit. Quisquam, voluptLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum t amet consectetur adipisicing elit. Quisquam, volupt.</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-8'>
                <h1 className='text-4xl'>2. Lorem Ipsum</h1>
                <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum t amet consectetur adipisicing elit. Quisquam, voluptLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum t amet consectetur adipisicing elit. Quisquam, voluptLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum t amet consectetur adipisicing elit. Quisquam, voluptLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum t amet consectetur adipisicing elit. Quisquam, volupt.</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-8'>
                <h1 className='text-4xl'>3. Lorem Ipsum</h1>
                <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum t amet consectetur adipisicing elit. Quisquam, voluptLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum t amet consectetur adipisicing elit. Quisquam, voluptLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum t amet consectetur adipisicing elit. Quisquam, voluptLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum t amet consectetur adipisicing elit. Quisquam, volupt.</p>
            </div>
        </div>
    </Layout>
  )
}
