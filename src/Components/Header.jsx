import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 bg-opacity-90 text-white py-2 fixed w-full top-0 shadow-md z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">
          Portfolio
        </div>
        <nav>
          <ul className="flex space-x-4 text-2xl">
            <li>
              <a href="about" className="hover:text-sky-600 transition duration-300">About</a>
            </li>
            <li>
              <a href="skills" className="hover:text-sky-600 transition duration-300">Skills</a>
            </li>
            <li>
              <a href="projects" className="hover:text-sky-600 transition duration-300">Projects</a>
            </li>
            <li>
              <a href="Contact" className="hover:text-sky-600 transition duration-300">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
