import React from 'react'
import { SkillsInfo } from '../../constants'

export const Skills = () => {
  return (
   <section
  id="skill"
  className="py-24 px-[12px] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient text-white"
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
           className='bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border-white shadow-[0_0_2-px_1px_rgba(130,69,236,0.3)]'
      >
       <h3 className='text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center'>
        {catogory.title}</h3> 
        </div>
    ))}
  </div>
</section>
  )
}
