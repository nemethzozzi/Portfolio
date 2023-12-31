import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from 'react-responsive';
import backendData from './Data/BackendData';
import frontendData from './Data/FrontendData';

const Skills = ({ darkMode }) => {
  const [refFrontend, inViewFrontend] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [refBackend, inViewBackend] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Use media queries for responsiveness
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1023 });

  return (
    <div id="skills" className={`p-2 max-w-screen-lg mx-auto ${darkMode ? 'bg-dark' : 'bg-light'}`}>
      <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold ${darkMode ? 'text-white' : 'text-black'} mb-10 mt-20`}>
        My Skills
      </h1>

      {/* Frontend and Backend Content */}
      <div className={`flex flex-col${isTabletOrMobile ? '' : 'md:flex-row'}`}>
        {/* Frontend Content */}
        <div className={`flex-1 md:m-5 mb-8 bg-gray-300 bg-opacity-10 shadow-md rounded-2xl ${isTabletOrMobile ? '' : 'order-first md:order-last'} border-sky-700 border-2 ${darkMode ? 'dark-mode' : ''} p-6`} ref={refFrontend}
              style={{
                  transition: 'box-shadow 0.3s',
                  boxShadow: 'none',
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 0 30px rgba(3, 105, 161, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = 'none';
                }}>
          <h3 className={`text-xl md:text-2xl font-bold mb-3 md:mb-5 ml-1 md:ml-3 ${darkMode ? 'text-white' : 'text-black'}`}>
            Frontend
          </h3>
          {frontendData.map((skill, index) => (
            <div key={index} className={`${darkMode ? 'text-white' : 'text-black'} flex items-center flex-1 ml-1 md:ml-3 md:relative mb-5`}>
              <img src={skill.icon[0]} alt={`${skill.skill} icon`} className="w-4 h-4 md:w-6 md:h-6" />
              {/* Colored Bar with Opacity Background */}
              <div className={`relative mb-1 md:mb-3 mt-1 md:mt-3`} style={{ width: '100%' }}>
                {/* Opacity Background */}
                <div
                  className={`h-2 md:h-2 rounded-lg absolute top-0 left-2 bg-opacity-50 bg-gray-400`}
                  style={{ width: '100%' }}
                ></div>
                {/* Skill Level Percentage */}
                <div className="absolute bottom-3 w-full h-full flex items-center justify-end">
                  <span className={`text-xs md:text-sm ${darkMode ? 'text-white' : 'text-black'}`}>
                    {inViewBackend ? `${skill.level}%` : ''}
                  </span>
                </div>

                {/* Colored Bar */}
                <div
                  className={`h-2 md:h-2 ml-1 md:ml-2 rounded-lg ${skill.color} bar ${
                    inViewBackend ? 'animate-grow-bar' : ''
                  } relative`}
                  style={{
                    width: inViewBackend ? `${skill.level}%` : '0',
                    transition: inViewBackend ? 'width 1.5s' : '0s',
                    opacity: '1',
                  }}
                ></div>
              </div>
              <span className={`ml-1 ${darkMode ? 'text-white' : 'text-black'}`}>{skill.label}</span>
            </div>
          ))}
        </div>

        {/* Backend Content */}
        <div className={`flex-1 md:m-5 mb-8 bg-gray-300 bg-opacity-10 shadow-md rounded-2xl ${isTabletOrMobile ? '' : 'order-first md:order-last'} border-sky-700 border-2 ${darkMode ? 'dark-mode' : ''} p-6`} ref={refBackend}                 style={{
                  transition: 'box-shadow 0.3s',
                  boxShadow: 'none',
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 0 20px rgba(3, 105, 161, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = 'none';
                }}>
          <h3 className={`text-xl md:text-2xl font-bold mb-3 md:mb-5 ml-1 md:ml-3 ${darkMode ? 'text-white' : 'text-black'}`}>
            Backend
          </h3>
          {backendData.map((skill, index) => (
            <div key={index} className={`${darkMode ? 'text-white' : 'text-black'} flex items-center flex-1 ml-1 md:ml-3 md:relative mb-5`}>
            <img src={skill.icon[0]} alt={`${skill.skill} icon`} className="w-4 h-4 md:w-6 md:h-6" />
              {/* Colored Bar with Opacity Background */}
              <div className={`relative mb-1 md:mb-3 mt-1 md:mt-3`} style={{ width: '100%' }}>
                {/* Opacity Background */}
                <div
                  className={`h-2 md:h-2 rounded-lg absolute top-0 left-2 bg-opacity-50 bg-gray-400`}
                  style={{ width: '100%' }}
                ></div>
                {/* Skill Level Percentage */}
                <div className="absolute bottom-3 w-full h-full flex items-center justify-end">
                  <span className={`text-xs md:text-sm ${darkMode ? 'text-white' : 'text-black'}`}>
                    {inViewBackend ? `${skill.level}%` : ''}
                  </span>
                </div>

                {/* Colored Bar */}
                <div
                  className={`h-2 md:h-2 ml-1 md:ml-2 rounded-lg ${skill.color} bar ${
                    inViewBackend ? 'animate-grow-bar' : ''
                  } relative`}
                  style={{
                    width: inViewBackend ? `${skill.level}%` : '0',
                    transition: inViewBackend ? 'width 1.5s' : '0s',
                    opacity: '1',
                  }}
                ></div>
              </div>
              <span className={`ml-1 ${darkMode ? 'text-white' : 'text-black'}`}>{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
