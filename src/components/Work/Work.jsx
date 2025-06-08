import React from 'react';
import { projects } from "../../constants";

export const Work = () => {
  return (
    <section
      id="personal-work"
      className="py-24 px-[6vw] md:px-[5vw] lg:px-[6vw] font-sans relative"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
         Explore the projects I've built—each one demonstrating practical applications of my frontend expertise.
        </p>
      </div>

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-gray-500 mb-4 pt-2">{project.description}</p>

              {project.keyFeatures && Array.isArray(project.keyFeatures) && (
                <div className="mb-4 text-sm">
                  <p className="text-purple-400 font-semibold mb-1">
                    Key Features:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300 font-medium leading-relaxed">
                    {project.keyFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mb-4 flex flex-wrap">
                {project.tags.map((tag, index) => (
                  <span
                    key={`${project.id}-${index}`}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-600 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 bg-purple-600 hover:bg-purple-500 text-white px-2 py-2 rounded-xl text-sm font-semibold text-center"
                >
                  View Code
                </a>
<a
  href={project.webapp}
  target="_blank"
  rel="noopener noreferrer"
  className={`w-1/2 px-2 py-2 rounded-xl text-sm font-semibold text-center 
    ${!project.webapp ? 'bg-gray-800 hover:bg-purple-800  text-gray-400 cursor-not-allowed pointer-events-none' : 'bg-purple-600 hover:bg-purple-700 text-white'}`}
  onClick={(e) => {
    if (!project.webapp) e.preventDefault();
  }}
>
  View Live
</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
