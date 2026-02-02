// homepage.jsx
import React from 'react'


import mydrawing from '../assets/kristar/mydrawing.png'

function Homepage() {
  return (
    <div className="flex min-h-screen">

      {/* COVER PAGE */}
      <div className="flex w-full custom-four-color-gradient">
        {/* Drawing Container */}
        <div className="flex justify-center items-center p-15">
          <img src = {mydrawing}
          className='w-130'
          />
        </div>



        {/* Cover Texts */}
        <div className="flex flex-col justify-center ml-20 space-y-10 p-15">
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

          <div className='flex grid-cols-3 gap-5'>
            <div className="bg-white/16 rounded-lg">
              <p className="font-lato text-white text-lg">
                Quality Assurance
              </p>
            </div>

            <div className="bg-white/16 rounded-lg">
              <p className="font-lato text-white text-lg">
                Web Developer
              </p>
            </div>

            <div className="bg-white/16 rounded-lg">
              <p className="font-lato text-white text-lg">
                Mobile Developer
              </p>
            </div>

            <div className="bg-white/16 rounded-lg">
              <p className="font-lato text-white text-lg">
                Development Manager
              </p>
            </div>

            <div className="bg-white/16 rounded-lg">
              <p className="font-lato text-white text-lg">
                Illustrator
              </p>
            </div>

            <div className="bg-white/16 rounded-lg">
              <p className="font-lato text-white text-lg">
                Multimedia Editor
              </p>
            </div>
          </div>
        </div>
      </div>



      {/* INTRODUCTION */}

    </div>
  )
}

export default Homepage