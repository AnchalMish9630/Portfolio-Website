import React, { useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTab, setCurrentTab] = useState("");

  const handleNavBar = (currentId) => {
    setCurrentTab(currentId);
    setMenuOpen(false);
  };

  // Detect scroll and change navbar background
  // .......... how scroll is handled ?..............//
  // First we want to add event listener to scroll event, and what function fill be called on scoll
  // we will pass a function to it   // i.e => handleScroll
  // on every scroll that function will be called, will check that if scrollY's length is greater than
  // 50px or not , if yes set Scrolled as true else false
  // on  Scrolled as true, Nav bar css's opacity and other things will be changed
  // bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md

  useEffect(() => {
    const handleScrollbar = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScrollbar);
    return () => window.removeEventListener("scroll", handleScrollbar);
  }, []); // putting funtion inside useEffect because it will execute after component renders and when out state variable changes and component render then it will run

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experince" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw]
     ${
       isScrolled
         ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
         : "bg-transparent"
     }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Anchal</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Mishra</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        <ul className="hidden md:flex space-x-8 text-gray-300">
          {navItems.map((navItem) => (
            <li
              key={navItem.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                currentTab === navItem.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleNavBar(navItem.id)}>
                {navItem.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/AnchalMish9630"
            target="_blank" // so that page should open in new tab
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/anchalmishra0906/"
            target="_blank" // so that page should open in new tab
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={25} />
          </a>
        </div>

        {/* {for Mobile view} */}
        <div className="md:hidden">
          {menuOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setMenuOpen(false)} // means you have to click on close icon to close then menu by making menuOpen to "false"
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setMenuOpen(true)} // menuOpen is true means if there is menu icon then open it by making menuOpen as true
            />
          )}
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300 ">
            {navItems.map((navItem) => (
              <li
                key={navItem.id}
                className={`cursor-pointer hover:text-white ${
                  currentTab === navItem.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleNavBar(navItem.id)}>
                  {navItem.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
            <a
              href="https://github.com/AnchalMish9630"
              target="_blank" // so that page should open in new tab
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec]"
            >
              <FaGithub size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/anchalmishra0906/"
              target="_blank" // so that page should open in new tab
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec]"
            >
              <FaLinkedin size={25} />
            </a>
          </div>
          </ul>

          
        </div>
      )}
    </nav>
  );
};
