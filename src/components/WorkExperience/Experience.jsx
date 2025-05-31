import React, { useState } from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Highlights of my professional journey and the impactful roles I’ve
          held in diverse teams.
        </p>
      </div>
      <div className="relative">
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            isLeft={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

const ExperienceCard = ({ experience, isLeft }) => {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div
      className={`flex flex-col sm:flex-row items-center mb-16 ${
        isLeft ? "sm:justify-start" : "sm:justify-end"
      }`}
    >
      <div
        className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl  border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
        ${
          isLeft ? "sm:mr-0" : "sm:ml-0"
        } sm:ml-44 sm:mr-44 ml-8 transform duration-300 hover:scale-105
        `}
      >
        <div className="flex items-center space-x-6">
          <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={experience.img}
              alt={experience.company}
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {experience.role}
              </h3>
              <h4 className="text-md sm:text-sm text-gray-300">
                {experience.company}
              </h4>
            </div>

            <p className="text-sm mt-2 text-gray-500">{experience.date}</p>
          </div>
        </div>
        <p className="mt-4 text-gray-400">{experience.desc}</p>

        {experience.projects && (
          <div className="mt-4">
            <button
              onClick={() => setShowProjects(!showProjects)}
              className="text-purple-400 underline text-sm mb-2"
            >
              {showProjects ? "Hide Details" : "View Client Projects"}
            </button>
            {showProjects && (
              <ul className="text-sm text-gray-300 space-y-2">
                {experience.projects.map((project, idx) => (
                  <li key={idx}>
                    <div className="flex items-center space-x-6">
                      <div>
                        <strong className="text-purple-400">
                          {project.title}
                        </strong>{" "}
                        ({project.date})<br />
                        <strong className="text-purple-400">
                          {project.subTitle}
                        </strong>
                        <br />
                        <span>{project.description}</span>
                      </div>
                      <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                        <img
                          className="w-full h-full object-cover"
                          src={experience.img}
                          alt={experience.company}
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        <div className="mt-4">
          <h5 className="font-medium text-white">Skills:</h5>
          <ul className="flex flex-wrap mt-2">
            {experience.skills.map((skill, index) => (
              <li
                key={index}
                className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
