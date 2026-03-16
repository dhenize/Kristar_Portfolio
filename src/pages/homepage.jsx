// Homepage.jsx
import React, { useEffect, useRef, useState } from 'react'

//IMPORTED FILES
import mydrawing from '../assets/kristar/mydrawing.png'
import intro_bg from '../assets/pics/backgrounds/intro_bg.png'
import mypic from '../assets/kristar/LOPEZ.jpg'

//IMPORTED COMPONENTS
import Education from '../components/home/education.jsx'
import MyFocus from '../components/home/myfocus.jsx'
import MySkills from '../components/home/skills.jsx'

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
import Vbnet from '../assets/logos/vbnet.png'
import Lark from '../assets/logos/lark_circle.png'

//ICONS
import Edu from '../assets/icons/education.png'
import Focus from '../assets/icons/focus.png'
import Skills from '../assets/icons/skills.png'


const Homepage = () => {
  /* COMPONENTS */
  const [showEducation, setShowEducation] = useState(false);
  const [showFocus, setShowFocus] = useState(false);
  const [showSkills, setShowSkills] = useState(false);


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
  const intro_txts = "An aspiring QA (Quality Assurance), Fullstack Developer, \n and Multimedia Editor with a strong interest in system \n checking and troubleshooting. She specializes in structured \n system planning, designing, testing and implementation, and \n team coordination. She is also passionate about \n  multimedia content creation and digital illustrations.";

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
    { name: 'Visual Basic', logo: Vbnet, usage: 'Backend Programming Language' },

    //DATABASE
    { name: 'Firebase', logo: Firebase, usage: 'Real-time Database & Authentication' },
    { name: 'MySQL', logo: Mysql, usage: 'Relational Database Management' },

    //DESIGN AND COLLABORATION TOOLS
    { name: 'Figma', logo: Figma, usage: 'UI/UX Design & Prototyping' },
    { name: 'Medibang', logo: Medi, usage: 'Digital Illustration' },
    { name: 'Canva', logo: Canva, usage: 'Graphic Design & Branding' },
    { name: 'Capcut', logo: Capcut, usage: 'Video Editing' },
    { name: 'Lark', logo: Lark, usage: 'Collaboration Tool' },
  ];



  /* MAIN RETURN */
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#332837]">
      {/* COVER PAGE */}
      <div className="flex w-full min-h-screen sunset-bg relative overflow-visible flex-col md:flex-row">
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

        {/* Drawing Container — desktop: original layout (left side, overhangs into next section) */}
        <div className="hidden md:flex justify-center items-end p-15 relative z-10">
          <img src={mydrawing}
            className='w-130 relative'
            style={{ bottom: '-20%' }}
          />
        </div>

        {/* Cover Texts */}
        <div className="flex flex-col justify-between md:justify-center ml-0 md:ml-10 space-y-6 md:space-y-10 px-6 pt-24 pb-0 md:p-10 relative z-10">
          {/* Header Section */}
          <div>
            <h1 className="font-['Just_Another_Hand'] text-white text-7xl md:text-8xl lg:text-9xl">
              PORTFOLIO
            </h1>
            <div className="space-y-2 mb-8">
              <p className="font-lato text-white text-2xl md:text-3xl">
                Greetings! I'm
              </p>
              <p className="font-lato text-white font-semibold text-2xl md:text-4xl">
                Dhenize Krista Faith C. Lopez!
              </p>
            </div>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-5'>
            <div className="bg-white/16 rounded-lg hover:bg-white/24 transition-colors duration-300 p-2.5">
              <p className="font-lato text-white text-sm md:text-lg text-center">
                Quality Assurance
              </p>
            </div>
            <div className="bg-white/16 rounded-lg hover:bg-white/24 transition-colors duration-300 p-3">
              <p className="font-lato text-white text-sm md:text-lg text-center">
                Web Developer
              </p>
            </div>
            <div className="bg-white/16 rounded-lg hover:bg-white/24 transition-colors duration-300 p-3">
              <p className="font-lato text-white text-sm md:text-lg text-center">
                Mobile Developer
              </p>
            </div>
            <div className="bg-white/16 rounded-lg hover:bg-white/24 transition-colors duration-300 p-3">
              <p className="font-lato text-white text-sm md:text-lg text-center">
                Development Manager
              </p>
            </div>
            <div className="bg-white/16 rounded-lg hover:bg-white/24 transition-colors duration-300 p-3">
              <p className="font-lato text-white text-sm md:text-lg text-center">
                Illustrator
              </p>
            </div>
            <div className="bg-white/16 rounded-lg hover:bg-white/24 transition-colors duration-300 p-3">
              <p className="font-lato text-white text-sm md:text-lg text-center">
                Multimedia Editor
              </p>
            </div>
          </div>

          {/* Drawing shown on mobile — below the text, no overflow trick */}
          <div className="flex md:hidden justify-center items-end mt-auto relative z-10">
            <img src={mydrawing} className='w-64 sm:w-80' />
          </div>
        </div>
      </div>

      {/* INTRODUCTION */}
      <div style={intro_div} className="flex w-full min-h-screen items-center justify-around">
        <div className='fade-in-section slide-in-top p-5 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 md:space-x-40 bg-white/16 w-full py-12 md:py-0'>
          <img src={mypic}
            className='w-56 sm:w-64 md:w-70 rounded-lg' />

          <p className="font-lato text-white text-base sm:text-lg md:text-2xl whitespace-pre-line text-center">{intro_txts}</p>
        </div>
      </div>


      {/* TECH STACK */}
      <div className="fade-in-section zoom-in flex flex-col w-full items-center justify-center py-10 md:py-15 bg-[#332837]">
        <h1 className='text-white text-3xl md:text-4xl font-bold mb-8 md:mb-10 font-lato'>TECH STACK</h1>

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
      <div className='fade-in-section flex flex-wrap justify-center items-center gap-8 md:gap-0 md:space-x-45 bg-[#332837] w-full py-10 px-4'>
        <div
          onClick={() => setShowEducation(true)}
          className='additional-card accordion-card stagger-card bg-[#FF9071] h-44 w-44 sm:h-55 sm:w-55 rounded-xl flex flex-col justify-center items-center space-y-4'>
          <img src={Edu} className='h-16 sm:h-20' />
          <h4 className="text-white text-base sm:text-xl font-lato font-bold">Education</h4>
        </div>
        <div
          onClick={() => setShowFocus(true)}
          className='additional-card accordion-card stagger-card bg-[#FF9071] h-44 w-44 sm:h-55 sm:w-55 rounded-xl flex flex-col justify-center items-center space-y-4'>
          <img src={Focus} className='h-16 sm:h-20' />
          <h4 className="text-white text-base sm:text-xl font-lato font-bold">My Focus</h4>
        </div>
        <div 
          onClick={() => setShowSkills(true)}
          className='additional-card accordion-card stagger-card bg-[#FF9071] h-44 w-44 sm:h-55 sm:w-55 rounded-xl flex flex-col justify-center items-center space-y-4'>
          <img src={Skills} className='h-16 sm:h-20' />
          <h4 className="text-white text-base sm:text-xl font-lato font-bold">Skills</h4>
        </div>
      </div>


      {/* EDUCATION MODAL */}
      {showEducation && (
        <div className='modal-overlay' onClick={() => setShowEducation(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <Education onClose={() => setShowEducation(false)} />
          </div>
        </div>
      )}

      {/* MY FOCUS MODAL */}
      {showFocus && (
        <div className='modal-overlay' onClick={() => setShowFocus(false)}> 
          <div onClick={(e) => e.stopPropagation()}>
            <MyFocus onClose={() => setShowFocus(false)} />
          </div>
        </div>
      )}

      {/* MY SKILLS MODAL */}
      {showSkills && (
        <div className='modal-overlay' onClick={() => setShowSkills(false)}> 
          <div onClick={(e) => e.stopPropagation()}>
            <MySkills onClose={() => setShowSkills(false)} />
          </div>
        </div>
      )} 


    </div> //END OF MAIN RETURN
  )
}


export default Homepage