import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CardFlip from 'react-card-flip';
import backendData from './Data/BackendData';
import frontendData from './Data/FrontendData';

const Skills = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [isFlipped, setFlipped] = useState(false);

  const handleContainerClick = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div id="skills" className={`p-2 max-w-screen-md mx-auto ${darkMode ? 'bg-dark' : 'bg-light'}`}>
      <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold ${darkMode ? 'text-white' : 'text-black'} mb-5 mt-3`}>
        My Skills
      </h2>
      <CardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Frontend Content */}
        <div
          key="frontend"
          className="cursor-pointer space-y-2 md:space-y-4 bg-white bg-opacity-10 rounded-2xl flex flex-col md:flex-row items-center border-gray-500 border-2"
          style={{
            backgroundImage: 'url("frontend_background.png")',
            backgroundSize: 'contain',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
          }}
          ref={ref}
          onClick={handleContainerClick}
        >
          <div className="flex-1 md:m-5">
            <h3 className={`text-xl md:text-2xl font-bold mb-3 md:mb-5 ml-1 md:ml-3 ${darkMode ? 'text-white' : 'text-black'}`}>
              Frontend
            </h3>
            {frontendData.map((skill, index) => (
              <div key={index} className={`bg-black bg-opacity-20 backdrop-filter backdrop-blur-sm ${darkMode ? 'text-white' : 'text-black'} flex items-center flex-1 ml-1 md:ml-3 md:relative`}>
                <img src={skill.icon[0]} alt={`${skill.skill} icon`} className="w-4 h-4 md:w-6 md:h-6" />
                {/* Opacity Bar */}
                <div
                  className={`h-4 w-10/12 bg-gray-300 absolute rounded-lg top-1/2 transform -translate-y-1/2 left-1 md:left-8 right-10 md:right-2 ${darkMode ? 'opacity-30' : 'opacity-10'}`}
                ></div>
                {/* Colored Bar */}
                <div
                  className={`h-2 md:h-4 ml-1 md:ml-2 rounded-lg mb-1 md:mb-3 mt-1 md:mt-3 ${skill.color} bar ${
                    inView ? 'animate-grow-bar' : ''
                  } relative`}
                  style={{
                    width: inView ? `${skill.level}%` : '0',
                    transition: inView ? 'width 1.5s' : '0s',
                    opacity: '1',
                  }}
                >
                  {inView ? `${skill.level}%` : '0%'}
                </div>
                <span className={`ml-1 ${darkMode ? 'text-white' : 'text-black'}`}>{skill.label}</span>
              </div>
            ))}
          </div>
          <div className="w-full md:w-2/5 h-24 md:h-40 flex items-center justify-center">
            <img src="frontend.png" alt="Frontend" className="w-1/2 h-auto" />
          </div>
        </div>

        {/* Backend Content */}
        <div
          key="backend"
          className="cursor-pointer space-y-2 md:space-y-4 bg-white bg-opacity-10 rounded-2xl flex flex-col md:flex-row items-center border-gray-500 border-2"
          style={{
            backgroundImage: 'url("backend_background.png")',
            backgroundSize: 'contain',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
          }}
          ref={ref}
          onClick={handleContainerClick}
        >
          <div className="flex-1 md:m-5">
            <h3 className={`text-xl md:text-2xl font-bold mb-3 md:mb-5 ml-1 md:ml-3 ${darkMode ? 'text-white' : 'text-black'}`}>
              Backend
            </h3>
            {backendData.map((skill, index) => (
              <div key={index} className={`bg-black bg-opacity-20 backdrop-filter backdrop-blur-sm ${darkMode ? 'text-white' : 'text-black'} flex items-center flex-1 ml-1 md:ml-3 md:`}>
                <img src={skill.icon[0]} alt={`${skill.skill} icon`} className="w-4 h-4 md:w-6 md:h-6" />
                {/* Opacity Bar */}
                <div
                  className={`h-4 w-10/12 bg-gray-300 absolute rounded-lg top-1/2 transform -translate-y-1/2 left-1 md:left-8 right-10 md:right-2 ${darkMode ? 'opacity-30' : 'opacity-10'}`}
                ></div>
                {/* Colored Bar */}
                <div
                  className={`h-2 md:h-4 ml-1 md:ml-2 rounded-lg mb-1 md:mb-3 mt-1 md:mt-3 ${skill.color} bar ${
                    inView ? 'animate-grow-bar' : ''
                  } relative`}
                  style={{
                    width: inView ? `${skill.level}%` : '0',
                    transition: inView ? 'width 1.5s' : '0s',
                    opacity: '1',
                  }}
                >
                  {inView ? `${skill.level}%` : '0%'}
                </div>
                <span className={`ml-1 ${darkMode ? 'text-white' : 'text-black'}`}>{skill.label}</span>
              </div>
            ))}
          </div>
          <div className="w-full md:w-2/5 h-24 md:h-40 flex items-center justify-center">
            <img src="backend.png" alt="Backend" className="w-1/2 h-auto" />
          </div>
        </div>
      </CardFlip>
    </div>
  );
};

export default Skills;
