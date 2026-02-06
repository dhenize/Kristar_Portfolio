import React from 'react'

//IMPORTED FILES
import starline from '../assets/icons/starline.png'

//IMPORTED PROJECTS
//Web Application


//Mobile Application


//Desktop Application


//Illustration


//Publication Materials


//Media





//TECH STACK LOGOS
import Canva from '../assets/logos/canva.png'
import Capcut from '../assets/logos/capcut.png'
import Cplus2 from '../assets/logos/cplus2.png'
import Css from '../assets/logos/css.png'
import Expo from '../assets/logos/expo_circle.png'
import Figma from '../assets/logos/figma.png'
import Firebase from '../assets/logos/firebase_circle.png'
import Html from '../assets/logos/html.png'
import Java from '../assets/logos/java.png'
import Js from '../assets/logos/javascript.png'
import Medi from '../assets/logos/medibang.png'
import Mysql from '../assets/logos/mysql_circle.png'
import Python from '../assets/logos/python.png'
import Reactjs from '../assets/logos/react.png'
import Tailwind from '../assets/logos/tailwind_circle.png'



const Projects = () => {

    {/* COMBOBOX CONTENTS */ }
    const combobox = [
        { id: 1, label: 'All Projects' },
        { id: 2, label: 'Web Application' },
        { id: 3, label: 'Mobile Application' },
        { id: 4, label: 'Desktop Application' },
        { id: 5, label: 'Illustration' },
        { id: 6, label: 'Publication Materials' },
        { id: 7, label: 'Media' },
    ]


    {/* PROJECTS */ }
    {/* 
        const projects = [
            { id: 1,
                title: 'Project Title', 
                category: 'Web Application', 
                coverImage: '\path\to\project_image.png', 
                techStack: [Html, Css, Js],
                description: 'Brief description of the project.',
                contributions: {
                    'Implemented the user authentication system using Firebase.',
                    'Designed the responsive UI using Figma and Tailwind CSS.',
                    'Collaborated with a team of 4 members using GitHub for version control.'   
                },
                additionalPics: [
                    '\path\to\additional_image1.png',
                    '\path\to\additional_image2.png',
                ]
            },

            
        ] //End of Projects
    */}


    return (
        <div className='w-full h-[170vh] night-bg flex flex-col p-20 '>
            {/* Meteor Shower */}
            <div className="meteor-container">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="meteor" style={{
                        top: `${Math.random() * 50}%`,
                        right: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 8}s`,
                        animationDuration: `${6 + Math.random() * 4}s`
                    }}></div>
                ))}
            </div>


            {/* PAGE TITLE */}
            <div className='justify-center items-center flex-col flex w-full py-10'>
                <h1 className="text-white text-6xl font-['Just_Another_Hand'] text-center -mb-3">
                    GALLERY
                </h1>

                <img src={starline} alt="starline" className='w-45 h-6 justify-center' />

                <h5 className='font-lato text-white text-center italic ml-4 -mt-3'>
                    creativity starts here
                </h5>
            </div>


            {/* FILTER */}
            <div className='w-full flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8'>
                <h1 className='bg-white/16 hover:bg-white/25 text-white px-6 py-2 rounded-full border border-white/30 transition duration-300'>
                    All Projects
                </h1>


            </div>
        </div>
    )
}

export default Projects