import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const handleSectionNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "personal-work", label: "Work" },
    { id: "education", label: "Education" },
  ];

  return (
    <footer className="py-8 text-white md:px-[7vw] lg:px-[20vw] px-[12vw]">
      <div className="container text-center mx-auto ">
        <h2 className="text-xl text-purple-500 ">Anchal Mishra</h2>
        <nav className="space-x-4 sm:space-x-6 mt-4 flex flex-wrap justify-center">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleSectionNavigation(item.id)}
              className="text-sm sm:text-base hover:text-purple-600 my-2"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-5 flex flex-wrap space-x-4 justify-center ">
          {[
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/anchalmishra0906/",
            },
            { icon: <FaGithub />, link: "https://github.com/AnchalMish9630/" },
            { icon: <MdEmail />, link: "anchalm8390@gmail.com" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl transition-transform transform hover:text-purple-600 hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap space-x-4 justify-center">
          <h4 className="text-sm text-white ">
            © 2025 Anchal Mishra. All rights reserved.
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
