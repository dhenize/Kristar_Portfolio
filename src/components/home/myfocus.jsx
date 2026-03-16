import React, { useEffect, useState } from 'react'

import focus1 from '../../assets/icons/uiux.png'
import focus2 from '../../assets/icons/webdev.png'
import focus3 from '../../assets/icons/mobdev.png'
import focus4 from '../../assets/icons/qa.png'
import focus5 from '../../assets/icons/learn.png'

const MyFocus = ({ onClose }) => {
    const [animateBoxes, setAnimateBoxes] = useState(false);

    useEffect(() => {
        setTimeout(() => setAnimateBoxes(true), 100);
    }, []);

    const focuses = [
        {
            id: 1, icon: focus1,
            title: 'UI/UX AWARENESS',
            description: 'Designing interfaces, prioritizing its user-friendliness while maintaining usability, effectivity, and creativity.',
            color: '#483AA0'
        },
        {
            id: 2, icon: focus2,
            title: 'WEB DEVELOPMENT (Frontend and Backend)',
            description: 'Developing websites with responsive interfaces, and ensuring successful data transactions and manipulations.',
            color: '#621D7A'
        },
        {
            id: 3, icon: focus3,
            title: 'MOBILE DEVELOPMENT (Frontend and Backend)',
            description: 'Designing and building mobile applications through React Native and Expo.',
            color: '#E85395'
        },
        {
            id: 4, icon: focus4,
            title: 'QUALITY ASSURANCE AWARENESS',
            description: 'Prioritizes error-free and bugless systems by testing and debugging during implementation.',
            color: '#FF9071'
        },
        {
            id: 5, icon: focus5,
            title: 'CONTINUOUS LEARNING',
            description: 'Striving continuously to nurture myself and my skills through more projects, collaborations, feedbacks, and exploration of new tools.',
            color: '#C8AF62'
        }
    ]

    return (
        <div className='myfocus-modal-container myfocus-modal-border rounded-xl bg-[#231528] backdrop-blur-sm p-5 sm:p-8 w-full max-w-4xl h-auto flex flex-col items-center space-y-4 sm:space-y-6'>
            <button className='focus-close-btn' onClick={onClose}>✕</button>

            <h2 className='font-["Just_Another_Hand"] text-4xl sm:text-5xl text-white'>
                MY FOCUS
            </h2>

            <div className='w-full space-y-3 sm:space-y-4'>
                {focuses.map((item, index) => (
                    <div
                        key={item.id}
                        className={`focus-card ${animateBoxes ? 'focus-card-visible' : ''}`}
                        style={{ backgroundColor: item.color, transitionDelay: `${index * 0.2}s` }}
                    >
                        <div className='flex items-center space-x-3 sm:space-x-4'>
                            <div className='focus-icon-wrapper shrink-0'>
                                <img src={item.icon} alt={item.title} className='w-8 h-8 sm:w-12 sm:h-12' />
                            </div>
                            <div className='flex-1 min-w-0'>
                                <h3 className='font-lato font-bold text-white text-sm sm:text-xl mb-1 sm:mb-2 leading-tight'>
                                    {item.title}
                                </h3>
                                <p className='font-lato text-white text-xs sm:text-sm'>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyFocus