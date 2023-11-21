import React from 'react';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-gray-800 bg-opacity-90 text-white py-2 fixed w-full top-0 shadow-md z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">
          Portfolio
        </div>
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
    </header>
  );
};

export default Header;