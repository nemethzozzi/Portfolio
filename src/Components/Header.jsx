// Header.js
import React from 'react';

const Header = ({ toggleDarkMode, darkMode }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`bg-gray-800 bg-opacity-90 text-white py-2 fixed w-full top-0 shadow-md z-10 ${darkMode ? 'dark' : ''}`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-4xl font-bold mb-2">
          Portfolio
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="text-2xl transition duration-300"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <img src="icons/sun.svg" alt="Moon" className="w-7 h-7"  />
            ) : (
              <img src="icons/moon.svg" alt="Sun" className="w-7 h-7" />
            )}
          </button>
          <nav>
            <ul className="flex space-x-4 text-2xl">
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-sky-500 transition duration-300">About</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('skills')} className="hover:text-sky-500 transition duration-300">Skills</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('projects')} className="hover:text-sky-500 transition duration-300">Projects</button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-sky-500 transition duration-300">Contact</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
