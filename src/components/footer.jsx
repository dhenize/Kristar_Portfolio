import React from 'react'

import FbLogo from '../assets/logos/facebook.png'
import IgLogo from '../assets/logos/instagram.png'
import LnkLogo from '../assets/logos/linkedin.png'
import GitLogo from '../assets/logos/github.png' 
import GmLogo from '../assets/logos/gmail.png'
import TktkLogo from '../assets/logos/tiktok.png'

const Footer = () => {
    const YOUR_EMAIL = "dhenize.lopez11@gmail.com";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${YOUR_EMAIL}`;
    
    const links = [
        { href: 'https://www.facebook.com/dhenize.c.lopez/', logo: FbLogo, label: 'Facebook' },
        { href: 'https://www.instagram.com/dhen_zie/', logo: IgLogo, label: 'Instagram' },
        { href: 'https://www.tiktok.com/@dhenizelopez?_r=1&_t=ZS-94g69a6IxEq', logo: TktkLogo, label: 'Tiktok' },
        { href: gmailUrl, logo: GmLogo, label: 'Gmail' },
        { href: 'https://github.com/dhenize', logo: GitLogo, label: 'GitHub' },
        { href: 'https://www.linkedin.com/in/dhenize-krista-faith-lopez-1a44b43a4', logo: LnkLogo, label: 'LinkedIn' },
    ]
    
    return (
        <div className='w-full pt-10 pb-7 bg-[#332837] justify-center items-center'>
            <div>
                <h4 className="font-lato text-white text-sm sm:text-md text-center">
                    © 2026 - All rights reserved | Kristar Portfolio
                </h4>
            </div>

            <div className='flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-4 px-4'>
                {links.map(({ href, logo, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                        className='flex items-center font-lato text-white text-sm sm:text-md'>
                        <img src={logo} alt={`${label} Logo`} className='w-4 h-4 mx-1.5' />
                        <span className='hidden xs:inline sm:inline'>{label}</span>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Footer