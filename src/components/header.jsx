import React from 'react'
import { Link } from 'react-router-dom'

import signature from '../assets/kristar/signature_cropped.png'


const Header = () => {
  return (
    <header className='bg-white/16 absolute w-full flex justify-between items-center p-4'>
        <div className='m-1'>
            <img src={signature} alt="logo"
            className='w-22'
            />
        </div>

        <div className='flex gap-10'>
            <Link to="/" className='text-white text-xl'>
                Home
            </Link>
            <Link to="/projects" className='text-white text-xl'>
                Projects
            </Link>
            <Link to="/aboutme" className='text-white text-xl'>
                About Me
            </Link>
        </div>
    </header>
  )
}

export default Header