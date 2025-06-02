import React from 'react'
import { education } from "../../constants";

export const Education = () => {
  return (
        <section
          id="education"
          className="py-24 pb-24 px-[12vw] md:px[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
            <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
            <p className="text-gray-400 mt-4 text-lg font-semibold">
              My academic journey reflects a consistent commitment to learning and growth in the field of technology            </p>
          </div>
          <div className="relative">
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>
            {education.map((educationItem, index) => (
              <div
                key={educationItem.id}
                className={`flex flex-col sm:flex-row items-center mb-16 ${
                  index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                }`}
              >
                {/* <div className="">
                  <img
                    src={educationItem.img}
                    alt={educationItem.company}
                    className="w-full h-full object-cover rounded-full"
                  ></img>
                </div> */}
                <div
                  className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl  border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
                ${
                  index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
                } sm:ml-44 sm:mr-44 ml-8 transform duration-300 hover:scale-105
                `}
                >
                  {/* Continer for comapny img and text */}
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={educationItem.img}
                        alt={educationItem.school}
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-white">
                          {educationItem.degree}
                        </h3>
                        <h4 className="text-md sm:text-sm text-gray-300">
                          {educationItem.school}
                        </h4>
                      </div>
    
                      <p className="text-sm mt-2 text-gray-500">
                        {educationItem.date}
                      </p>
                    </div>
                  </div>
                  <p
                    className="mt-4 text-gray-400 font-bold"
                  >Grade: {educationItem.grade}</p>
               <p className='mt-4 text-gray-400'>{educationItem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
}
