import React from 'react'

//IMPORTED FILES
import FbLogo from '../assets/logos/facebook.png'
import IgLogo from '../assets/logos/instagram.png'
import LnkLogo from '../assets/logos/linkedin.png'
import GitLogo from '../assets/logos/github.png' 
import GmLogo from '../assets/logos/gmail.png' 


const Footer = () => {

    /* REDIRECT TO GMAIL */
    const YOUR_EMAIL = "dhenize.lopez11@gmail.com";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${YOUR_EMAIL}`;
    
    
  return (
    <div className='w-full py-55 pb-7 bg-[#332837] justify-center items-center'>
        
        {/* COPYRIGHT */}
        <div>
            <h4 className="font-lato text-white text-md text-center">
                © 2026 - All rights reserved | Kristar Potfolio
            </h4>
        </div>


        {/* SOCIAL MEDIA LINKS */}
        <div className='flex flex-wrap justify-center items-center space-x-8 mt-4'>
            <a href='https://www.facebook.com/dhenize.c.lopez/' target="_blank" rel="noopener noreferrer"
                className='flex items-center font-lato text-white text-md'>
                <img src={FbLogo} alt="Facebook Logo" className='w-4 h-4 mx-2'/>
                Facebook
            </a>
            <a href='https://www.instagram.com/dhen_zie/' target="_blank" rel="noopener noreferrer"
                className='flex items-center font-lato text-white text-md'>
                <img src={IgLogo} alt="Instagram Logo" className='w-4 h-4 mx-2'/>
                Instagram
            </a>
            <a href={gmailUrl} target="_blank" rel="noopener noreferrer" 
                className='flex items-center font-lato text-white text-md'>
                <img src={GmLogo} alt="Gmail Logo" className='w-4 h-4 mx-2'/>
                Gmail
            </a>
            <a href='https://github.com/dhenize' target="_blank" rel="noopener noreferrer"
                className='flex items-center font-lato text-white text-md'>
                <img src={GitLogo} alt="GitHub Logo" className='w-4 h-4 mx-2'/>
                GitHub
            </a>
            <a href='https://www.linkedin.com/in/dhenize-krista-faith-lopez-1a44b43a4' target="_blank" rel="noopener noreferrer"
                className='flex items-center font-lato text-white text-md'>
                <img src={LnkLogo} alt="LinkedIn Logo" className='w-4 h-4 mx-2'/>
                LinkedIn
            </a>
        </div>
    </div>
  )
}

export default Footer