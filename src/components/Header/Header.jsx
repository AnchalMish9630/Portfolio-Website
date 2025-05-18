import React, { useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useFormState } from "react-dom";

export const Header = () => {

  const [clicked] = useState(false);
  const [currentTab, setCurrentTab] = useState("");
  const handleNavBar = (currentId)=>{
    setCurrentTab(currentId);
  }
  const navItems=[
    {id:"about", label: "About"},
    {id:"skills", label: "Skills"},
    {id:"experience", label: "Experince"},
    {id:"work", label: "Work"},
    {id:"education", label: "Education"},
  ]

  return (
    <nav className="bg-transparent">
      <div className="text-white py-5 flex justify-between items-center">
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Anchal</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Mishra</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>
        <ul className="md:flex space-x-8 text-gray-300">
          {
            navItems.map((navItem)=>{
              <li key={navItem.id}
              className={`cursor-pointer hover:text-[#8245ec]
              ${currentTab === navItem.id ? "text-[#8245ec]" : ""}}`}>
                  <button onClick={()=>handleNavBar(navItem.id)}>
                    {navItem.label}
                  </button>
              </li>
            })
          }
        </ul>
      </div>
    </nav>
  );
};
