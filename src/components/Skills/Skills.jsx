import React from 'react'
import { SkillsInfo } from '../../constants'
import Tilt from 'react-parallax-tilt'

export const Skills = () => {
  return (
   <section
  id="skills"
  className="py-24 px-[12px] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient text-white clip-path-mobile md:clip-path-desktop"
>
  <div className="text-center mb-6">
    <h2 className="text-4xl sm:text-5xl font-extrabold tracking-wide relative inline-block after:block after:h-[2px] after:w-24 after:mt-2 after:mx-auto after:bg-[#a259ff]">
      SKILLS
    </h2>
    <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg font-semibold">
      A collection of my technical skills and expertise honed through various projects and experiences
    </p>
  </div>

  <div className='border-white flex flex-wrap gap-1 lg:gap-5 py-10 justify-between'>
    {SkillsInfo.map((catogory)=>(
      <div key={catogory.title}
           className='bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_2-px_1px_rgba(130,69,236,0.3)]'
      >
       <h3 className='text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center'>
        {catogory.title}</h3> 
        <Tilt
        key={catogory.title}
        // className='w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full'
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        perspective={1000}
        scale={1.05}
        transitionSpeed={1000}
        gyroscope={true}

      >
        <div className='grid grid-cols-2 sm:grid-cols-3 w-full gap-3'>
          {catogory.skills.map((skill)=>(
              <div
                key={skill.name}
                className='flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center'
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name}`}
                  className='w-6 h-6 sm:w-8 sm:h-8'
                ></img>
                <span className='text-sm sm:text-sm text-gray-300'>
                  {skill.name}
                </span>
              </div>
          ))}


        </div>
        </Tilt>
        </div>
    ))}
  </div>
</section>
  )
}
