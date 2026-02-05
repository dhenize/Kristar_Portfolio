// Homepage.jsx
import React, { useEffect, useRef } from 'react'

//IMPORTED FILES
import mydrawing from '../assets/kristar/mydrawing.png'
import intro_bg from '../assets/pics/backgrounds/intro_bg.png'
import mypic from '../assets/kristar/LOPEZ.jpg'

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

//ICONS
import Edu from '../assets/icons/education.png'
import Focus from '../assets/icons/focus.png'
import Skills from '../assets/icons/skills.png'


const Homepage = () => {

  /* SCROLL ANIMATION */
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-section');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  /* INTRODUCTION DIV BACKGROUND */
  const intro_div = {
    backgroundImage: `url(${intro_bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    minHeight: '100vh',
    position: 'relative',
    zIndex: 1,
  }

  /* INTRODUCTION TEXTS */
  const intro_txts = "An aspiring QA (Quality Assurance), System Administrator, \n and Technical Support with a strong interest in system \n checking and troubleshooting. She specializes in structured \n system planning, designing, testing and implementation, and \n team coordination.";

  const tech_stacks = [
    //WEB DEVELOPMENT
    { name: 'HTML', logo: Html, usage: 'Web Development' },
    { name: 'CSS', logo: Css, usage: 'Web Development (Styling)' },
    { name: 'JavaScript', logo: Js, usage: 'Web Development' },
    { name: 'React', logo: Reactjs, usage: 'Web Development' },
    { name: 'Tailwind CSS', logo: Tailwind, usage: 'Web Development (Styling)' },

    //MOBILE DEVELOPMENT
    { name: 'React Native', logo: Reactjs, usage: 'Mobile Development' },
    { name: 'Expo', logo: Expo, usage: 'Mobile Development (Development Framework)' },

    //KNOWN PROGRAMMING LANGUAGES
    { name: 'Python', logo: Python, usage: 'Backend Programming Language' },
    { name: 'Java', logo: Java, usage: 'Backend Programming Language' },
    { name: 'C++', logo: Cplus2, usage: 'Backend Programming Language' },

    //DATABASE
    { name: 'Firebase', logo: Firebase, usage: 'Real-time Database & Authentication' },
    { name: 'MySQL', logo: Mysql, usage: 'Relational Database Management' },

    //DESIGN AND COLLABORATION TOOLS
    { name: 'Figma', logo: Figma, usage: 'UI/UX Design & Prototyping' },
    { name: 'Medibang', logo: Medi, usage: 'Digital Illustration' },
    { name: 'Canva', logo: Canva, usage: 'Graphic Design & Branding' },
    { name: 'Capcut', logo: Capcut, usage: 'Video Editing' },
  ];



  /* MAIN RETURN */
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#332837]">
      {/* COVER PAGE */}
      <div className="flex w-full h-screen sunset-bg relative overflow-visible">
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
        {/* Drawing Container */}
        <div className="flex justify-center items-end p-15 relative z-10">
          <img src={mydrawing}
            className='w-130 relative'
            style={{ bottom: '-20%' }}
          />
        </div>
        {/* Cover Texts */}
        <div className="flex flex-col justify-center ml-10 space-y-10 p-10 relative z-10">
          {/* Header Section */}
          <div>
            <h1 className="font-['Just_Another_Hand'] text-white text-7xl md:text-8xl lg:text-9xl">
              PORTFOLIO
            </h1>
            <div className="space-y-2 mb-8">
              <p className="font-lato text-white text-3xl md:text-4xl">
                Greetings! I'm
              </p>
              <p className="font-lato text-white font-semibold text-4xl md:text-4xl">
                Dhenize Krista Faith C. Lopez!
              </p>
            </div>
          </div>
          <div className='grid grid-cols-3 gap-5'>
            <div className="bg-white/16 rounded-lg hover:bg-white/24 transition-colors duration-300 p-2.5">
              <p className="font-lato text-white text-lg text-center">
                Quality Assurance
              </p>
            </div>
            <div className="bg-white/16 rounded-lg hover:bg-white/24 transition-colors duration-300 p-3">
              <p className="font-lato text-white text-lg text-center">
                Web Developer
              </p>
            </div>
            <div className="bg-white/16 rounded-lg hover:bg-white/24 transition-colors duration-300 p-3">
              <p className="font-lato text-white text-lg text-center">
                Mobile Developer
              </p>
            </div>
            <div className="bg-white/16 rounded-lg hover:bg-white/24 transition-colors duration-300 p-3">
              <p className="font-lato text-white text-lg text-center">
                Development Manager
              </p>
            </div>
            <div className="bg-white/16 rounded-lg hover:bg-white/24 transition-colors duration-300 p-3">
              <p className="font-lato text-white text-lg text-center">
                Illustrator
              </p>
            </div>
            <div className="bg-white/16 rounded-lg hover:bg-white/24 transition-colors duration-300 p-3">
              <p className="font-lato text-white text-lg text-center">
                Multimedia Editor
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* INTRODUCTION */}
      <div style={intro_div} className="flex w-full h-screen items-center justify-around">
        <div className='fade-in-section slide-in-top p-5 flex flex-row items-center justify-center space-x-40 bg-white/16 w-full'>
          <img src={mypic}
            className='w-70 rounded-lg' />

          <p className="font-lato text-white text-2xl whitespace-pre-line text-center">{intro_txts}</p>
        </div>
      </div>


      {/* TECH STACK */}
      <div className="fade-in-section zoom-in flex flex-col w-full items-center justify-center py-15 bg-[#332837]">
        <h1 className='text-white text-4xl font-bold mb-10 font-lato'>TECH STACK</h1>

        <div className='tech-stack-container'>
          <div className='tech-stack-scroll'>
            {tech_stacks.map((tech, index) => (
              <div key={index} className='tech-item group'>
                <div className='tech-logo-wrapper'>
                  <img src={tech.logo} alt={tech.name} className='tech-logo' />
                </div>
                <p className='tech-name'>{tech.name}</p>
                {/* Hover tooltip */}
                <div className='tech-tooltip'>
                  <p className='text-sm font-medium'>{tech.usage}</p>
                </div>
              </div>
            ))}

            {tech_stacks.map((tech, index) => (
              <div key={`duplicate-${index}`} className='tech-item group'>
                <div className='tech-logo-wrapper'>
                  <img src={tech.logo} alt={tech.name} className='tech-logo' />
                </div>
                <p className='tech-name'>{tech.name}</p>
                {/* Hover tooltip */}
                <div className='tech-tooltip'>
                  <p className='text-sm font-medium'>{tech.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* ADDITIONALS */}
      <div className='fade-in-section flex flex-wrap justify-center items-center space-x-45 bg-[#332837] w-full py-10'>
        <div className='additional-card accordion-card stagger-card bg-[#FF9071] h-55 w-55 rounded-xl flex flex-col justify-center items-center space-y-4'>
          <img src={Edu} className='h-20' />
          <h4 className="text-white text-xl font-lato font-bold">Education</h4>
        </div>
        <div className='additional-card accordion-card stagger-card bg-[#FF9071] h-55 w-55 rounded-xl flex flex-col justify-center items-center space-y-4'>
          <img src={Focus} className='h-20' />
          <h4 className="text-white text-xl font-lato font-bold">My Focus</h4>
        </div>
        <div className='additional-card accordion-card stagger-card bg-[#FF9071] h-55 w-55 rounded-xl flex flex-col justify-center items-center space-y-4'>
          <img src={Skills} className='h-20' />
          <h4 className="text-white text-xl font-lato font-bold">Skills</h4>
        </div>
      </div>
    </div>
  )
}


export default Homepage