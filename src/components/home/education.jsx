import React, { useState } from 'react'

//IMPORTED FILES
import cvsu from '../../assets/pics/schools/cvsu.png'
import informatics from '../../assets/pics/schools/informatics.png'
import gtmnhs from '../../assets/pics/schools/gtmnhs.png'
import location from '../../assets/icons/location.png'

const Education = ({ onClose }) => {
  const [activeSchool, setActiveSchool] = useState('college');

  const schools = {
    college: {
      level: 'COLLEGE',
      name: 'Cavite State University – Imus Campus',
      address: 'Cavite Civic Center, Palico IV, Imus City, Cavite 4103',
      image: cvsu,
      course: 'Bachelor of Science in Information Technology',
      description: 'During my college years in Cavite State University - Imus Campus, I developed a strong foundation in Information Technology through developing systems, collaborative activities, and practical exams. Throughout the journey, we were focused on web development and database management, and recently, me and my groupmates learned to develop a mobile application for our capstone. With these experiences, I learned how to enhance my problem solving and critical thinking skills through academic and real-world challenges. Additionally, I learned how to utilize tools such as Artificial Intelligence (AI) to understand and expand my knowledge in developing systems. Until now, I kept striving to learn more and uphold my learnings from my schools.',
      color: '#621D7A'
    },
    senior: {
      level: 'SENIOR HIGH',
      name: 'Informatics College Cavite – Imus Campus',
      address: 'Informatics Bldg Aguinaldo Hi-way Anabu 1-E, Imus, Philippines',
      image: informatics,
      course: 'Technical-Vocational-Livelihood – Information and Communications Technology (TVL – ICT)',
      description: 'Informatics College Cavite is where my fascination in the industry of Information Technology grew, and it helped me shape the person I am today. In my senior high school years, I learned the fundamentals in coding, team engagements and collaborations, and how to develop systems, particularly terminal-based and desktop systems using the languages C++, Java, and Visual Basic. Aside from backend development, due to the Graphical User Interface (GUI) provided in Netbeans and Visual Studio, I learned how to express and enhance my creativity. Furthermore, I transformed my traditional drawing skills to digital at this point.',
      color: '#E85395'
    },
    junior: {
      level: 'JUNIOR HIGH',
      name: 'General Tomas Mascardo National High School',
      address: 'Greengate Subdivision, Barangay Malagasang II-A, Imus City, Imus, Philippines',
      image: gtmnhs,
      course: '(Previously known as Imus National High School - Greengate Annex)',
      description: 'My journey in GTMNHS is all about enhancing personal and organizational skills. I learned how to communicate, participate, and contribute to scholarly activities. It made me differentiate and demonstrate the role and responsibility of being a leader and being the one who was led. In my early days, I also discovered that we learned the fundamentals of the basic HTML, which led my curiosity for the course Information and Communications Technology (ICT).',
      color: '#FF9071'
    }
  };

  const currentSchool = schools[activeSchool];

  return (
    <div 
      className='education-modal-container bg-[#231528] backdrop-blur-sm border-4 p-4 sm:p-6 w-full max-w-5xl h-auto flex flex-col items-center space-y-4'
      style={{ 
        borderColor: currentSchool.color,
        '--current-color': currentSchool.color 
      }}
    >
      {/* Close Button */}
      <button 
        className='education-close-btn'
        onClick={onClose}
        style={{ background: currentSchool.color }}
      >
        ✕
      </button>

      {/* Title */}
      <h2 className='font-["Just_Another_Hand"] text-4xl sm:text-5xl text-white text-center'>
        EDUCATIONAL BACKGROUND
      </h2>

      {/* Tab Navigation */}
      <div className='flex space-x-1 sm:space-x-2 relative w-full'>
        {Object.keys(schools).map((key) => (
          <button
            key={key}
            onClick={() => setActiveSchool(key)}
            className={`case-file-tab ${activeSchool === key ? 'active' : ''}`}
            style={{ '--tab-color': schools[key].color }}
          >
            <span className='text-xs font-lato font-bold uppercase tracking-wider'>
              {schools[key].level}
            </span>
          </button>
        ))}
      </div>

      {/* Case File Content */}
      <div className='case-file-wrapper w-full'>
        <div className='case-file-content education-scrollable' style={{ '--scroll-color': currentSchool.color }}>
          <div className='grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6 p-4 sm:p-6'>

            {/* SCHOOL PIC */}
            <div className='md:col-span-2 space-y-4'>
              <div className='case-file-stamp' style={{ borderColor: currentSchool.color, color: currentSchool.color }}>
                <p className='font-lato text-lg sm:text-xl font-bold'>{currentSchool.level}</p>
              </div>
              <div className='school-image-frame' style={{ borderColor: currentSchool.color }}>
                <img src={currentSchool.image} alt={currentSchool.name} className='w-full h-full object-contain' />
              </div>
            </div>

            {/* Right Side */}
            <div className='md:col-span-3 space-y-4'>
              <div className='info-section' style={{ borderLeftColor: currentSchool.color }}>
                <h3 className='font-lato font-bold text-sm sm:text-base mb-2' style={{ color: currentSchool.color }}>
                  {currentSchool.name}
                </h3>
                <div className='flex flex-row'>
                  <img src={location} className="w-4 h-4 mr-2 shrink-0" alt="location" />
                  <p className='text-black font-lato text-xs mb-3'>{currentSchool.address}</p>
                </div>
                <div className='course-badge' style={{ background: currentSchool.color }}>
                  <p className='text-white font-lato font-semibold text-xs'>{currentSchool.course}</p>
                </div>
              </div>

              <div className='classified-header' style={{ background: currentSchool.color, borderLeftColor: currentSchool.color }}>
                <p className='font-lato font-bold text-sm text-white'>PERSONAL ACCOUNT</p>
              </div>
              
              <div className='description-box' style={{ '--scroll-color': currentSchool.color }}>
                <p className='text-black font-lato text-xs sm:text-sm leading-relaxed text-justify'>
                  {currentSchool.description}
                </p>
              </div>

              <div className='flex space-x-2'>
                <div className='file-marker' style={{ background: currentSchool.color }}></div>
                <div className='file-marker' style={{ background: currentSchool.color }}></div>
                <div className='file-marker' style={{ background: currentSchool.color }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education