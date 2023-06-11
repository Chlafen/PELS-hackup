import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className='bg-transparent'>
        <Header/>
        <main>{children}</main>
        <Footer/>
    </div>
  )
}
