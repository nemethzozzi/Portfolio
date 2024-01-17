import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';
import backendData from './Data/BackendData';
import frontendData from './Data/FrontendData';

const Skills = ({ darkMode }) => {
  const [boxVisible, setBoxVisible] = useState(false);
  const [smallboxVisible, setSmallBoxVisible] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px -100px 0px', // Adjust the rootMargin based on your requirement
  });

  useEffect(() => {
    if (inView) {
      setBoxVisible(true);
      setTimeout(() => {
        setSmallBoxVisible(true);
      }, 700);
    }
  }, [inView]);
  

  // Use media queries for responsiveness
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1023 });

  return (
    <div ref={ref} id="skills" className={`p-2 max-w-screen-lg mx-auto ${darkMode ? 'bg-dark' : 'bg-light'}`}>
      <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold ${darkMode ? 'text-white' : 'text-black'} mb-10 mt-20`}>
        My Skills
      </h1>

      {/* Frontend and Backend Content */}
      <div className={`flex flex-col${isTabletOrMobile ? '' : ' md:flex-row'} mb-28`}>
        {/* Frontend Content */}
        <div className={`flex-1 md:m-5 mb-8 bg-gray-300 bg-opacity-10 shadow-md rounded-2xl ${isTabletOrMobile ? '' : 'order-first md:order-last'} border-sky-700 border-2 ${darkMode ? 'dark-mode' : ''} p-6 ${boxVisible ? 'visible' : 'invisible'}`}>
          <h3 className={`text-xl md:text-2xl font-bold mb-3 md:mb-5 ml-1 md:ml-3 text-center ${darkMode ? 'text-white' : 'text-black'}`}>
            Frontend
          </h3>
          <div className={`flex flex-wrap`}>
            {frontendData.map((skill, index) => (
              <button key={index} className={`${darkMode ? 'text-white' : 'text-black'} ml-1 md:ml-3 md:relative mb-5 border-2 bg-gray-300 bg-opacity-10 border-sky-700 p-2 rounded-xl hover:bg-sky-700 hover:scale-105 hover:text-white font-bold duration-300 transition-all shadow-xl ${smallboxVisible ? 'visible' : 'invisible'}`}>
                <div className={`ml-1 ${darkMode ? 'text-white' : 'text-black'}`}>{skill.skill}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Backend Content */}
        <div className={`flex-1 md:m-5 mb-8 bg-gray-300 bg-opacity-10 shadow-md rounded-2xl ${isTabletOrMobile ? '' : 'order-first md:order-last'} border-sky-700 border-2 ${darkMode ? 'dark-mode' : ''} p-6 ${boxVisible ? 'visible' : 'invisible'}`}>
          <h3 className={`text-xl md:text-2xl font-bold mb-3 md:mb-5 ml-1 md:ml-3 text-center ${darkMode ? 'text-white' : 'text-black'}`}>
            Backend
          </h3>
          <div className={`flex flex-wrap`}>
            {backendData.map((skill, index) => (
              <button key={index} className={`${darkMode ? 'text-white' : 'text-black'} ml-1 md:ml-3 md:relative mb-5 border-2 border-sky-700 p-2 rounded-xl hover:bg-sky-700 hover:scale-105 font-bold transition-all shadow-xl ${smallboxVisible ? 'visible' : 'invisible'}`}>
                <div className={`ml-1 ${darkMode ? 'text-white' : 'text-black'}`}>{skill.skill}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
