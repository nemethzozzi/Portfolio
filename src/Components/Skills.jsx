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
    <div id="skills">
      <div className={`p-4 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
        <h2 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center font-bold ${darkMode ? 'text-white' : 'text-black'} mb-10 mt-5`}>
          My Skills
        </h2>
        <CardFlip isFlipped={isFlipped} flipDirection="horizontal">
          {/* Frontend Content */}
          <div
            key="frontend"
            className="cursor-pointer space-y-4 md:space-y-8 bg-white bg-opacity-10 rounded-2xl flex flex-col md:flex-row items-center border-gray-500 border-4"
            style={{
              backgroundImage: 'url("frontend_background.png")',
              backgroundSize: 'contain',
              backgroundPosition: 'right center',
              backgroundRepeat: 'no-repeat',
            }}
            ref={ref} onClick={handleContainerClick}
          >
            <div className="flex-1 md:m-10">
              <h3 className={`text-2xl md:text-4xl font-bold mb-5 md:mb-10 ml-2 md:ml-5 ${darkMode ? 'text-white' : 'text-black'}`}>
                Frontend
              </h3>
              {frontendData.map((skill, index) => (
              <div key={index} className={`bg-black bg-opacity-30 backdrop-filter backdrop-blur-md ${darkMode ? 'text-white' : 'text-black'} flex items-center flex-1 ml-2 md:ml-5 md:relative`}>
                <img src={skill.icon[0]} alt={`${skill.skill} icon`} className="w-6 h-6 md:w-8 md:h-8" />

                {/* Opacity Bar */}
                <div
                  className={`h-6 w-11/12 bg-gray-300 absolute rounded-lg top-1/2 transform -translate-y-1/2 left-2 md:left-12 right-20 md:right-4 ${darkMode ? 'opacity-40' : 'opacity-20'}`}
                ></div>

                {/* Colored Bar */}
                <div
                  className={`h-4 md:h-6 ml-2 md:ml-4 rounded-lg mb-2 md:mb-5 mt-2 md:mt-5 ${skill.color} bar ${
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

                <span className={`ml-2 ${darkMode ? 'text-white' : 'text-black'}`}>{skill.label}</span>
              </div>
            ))}

            </div>
            <div className="w-full md:w-2/5 h-48 md:h-full flex items-center justify-center">
              <img src="frontend.png" alt="Frontend" className="w-2/3 h-auto" />
            </div>
          </div>

          {/* Backend Content */}
          <div
            key="backend"
            className="cursor-pointer space-y-4 md:space-y-8 bg-white bg-opacity-10 rounded-2xl flex flex-col md:flex-row items-center border-gray-500 border-4"
            style={{
              backgroundImage: 'url("backend_background.png")',
              backgroundSize: 'contain',
              backgroundPosition: 'right center',
              backgroundRepeat: 'no-repeat',
            }}
            ref={ref} onClick={handleContainerClick}
          >
            <div className="flex-1 md:m-10">
              <h3 className={`text-2xl md:text-4xl font-bold mb-5 md:mb-10 ml-2 md:ml-5 ${darkMode ? 'text-white' : 'text-black'}`}>
                Backend
              </h3>
              {backendData.map((skill, index) => (
                <div key={index} className={`bg-black bg-opacity-30 backdrop-filter backdrop-blur-md ${darkMode ? 'text-white' : 'text-black'} flex items-center flex-1 ml-2 md:ml-5 md:`}>
                  <img src={skill.icon[0]} alt={`${skill.skill} icon`} className="w-6 h-6 md:w-8 md:h-8" />
                  
                  {/* Opacity Bar */}
                  <div
                    className={`h-6 w-11/12 bg-gray-300 absolute rounded-lg top-1/2 transform -translate-y-1/2 left-2 md:left-12 right-20 md:right-4 ${darkMode ? 'opacity-40' : 'opacity-20'}`}
                  ></div>

                  {/* Colored Bar */}
                  <div
                    className={`h-4 md:h-6 ml-2 md:ml-4 rounded-lg mb-2 md:mb-5 mt-2 md:mt-5 ${skill.color} bar ${
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
                  <span className={`ml-2 ${darkMode ? 'text-white' : 'text-black'}`}>{skill.label}</span>
                </div>
              ))}
            </div>
            <div className="w-full md:w-2/5 h-48 md:h-full flex items-center justify-center">
              <img src="backend.png" alt="Backend" className="w-2/3 h-auto" />
            </div>
          </div>
        </CardFlip>
      </div>
    </div>
  );
};

export default Skills;
