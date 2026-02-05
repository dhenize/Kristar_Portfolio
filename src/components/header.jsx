import React from 'react'
import { Link } from 'react-router-dom'

import signature from '../assets/kristar/signature_cropped.png'

const Header = () => {
  return (
    <header className='bg-white/16 absolute w-full flex justify-between items-center p-4 z-50'> {/* Added z-50 */}
        <div className='px-5'>
            <img src={signature} alt="logo"
            className='w-22'
            />
        </div>

        <div className='flex gap-15 px-5'>
            <Link to="/" className='text-white text-lg'>
                Home
            </Link>
            <Link to="/projects" className='text-white text-lg'>
                Projects
            </Link>
            <Link to="/aboutme" className='text-white text-lg'>
                About Me
            </Link>
        </div>
    </header>
  )
}

export default Header