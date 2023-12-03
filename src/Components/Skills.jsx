import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import CardFlip from 'react-card-flip';
import backendData from './BackendData';
import frontendData from './FrontendData';

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
    <div id="skills" ref={ref} onClick={handleContainerClick} className="cursor-pointer">
      <div className={`p-4 h-screen ml-20 mr-20 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
        <h2 className={`text-6xl text-center font-bold ${darkMode ? 'text-white' : 'text-black'} mb-10 mt-10`}>
          My Skills
        </h2>
        <CardFlip isFlipped={isFlipped} flipDirection="horizontal">
          {/* Frontend Content */}
          <div key="frontend" className="space-y-8 bg-white bg-opacity-10 rounded-2xl flex items-center border-gray-500 border-4">
            <div className="flex-1 m-10">
              <h3 className={`text-4xl font-bold mb-10 ${darkMode ? 'text-white' : 'text-black'}`}>
                Frontend
              </h3>
              {frontendData.map((skill, index) => (
                <div key={index} className={`${darkMode ? 'text-white' : 'text-black'} flex items-center flex-1`}>
                      <img
                        src={skill.icon[0]}
                        alt={`${skill.skill} icon`}
                        className="w-8 h-8"
                      />
                      <div
                        className={`h-8 ml-4 rounded-lg mb-5 mt-5 ${skill.color} bar ${
                          inView ? 'animate-grow-bar' : ''
                        }`}
                        style={{
                          width: inView ? `${skill.level}%` : '0',
                          transition: inView ? 'width 1.5s' : '0s',
                        }}
                      >
                        {inView ? `${skill.level}%` : '0%'}
                      </div>
                  <div className="flex-1">
                    <span className={`ml-4 ${darkMode ? 'text-white' : 'text-black'}`}>
                      {skill.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-2/5 h-full flex items-center justify-center bg-blue-700">
              <img src="frontend.png" alt="Frontend" className="w-2/3 h-auto" />
            </div>
          </div>
            
          {/* Backend Content */}
          <div key="backend" className="space-y-8 bg-white bg-opacity-10 rounded-2xl flex items-center border-gray-500 border-4">
            <div className="w-2/5 h-full flex items-center justify-center bg-orange-700">
              <img src="backend.png" alt="Backend" className="w-2/3 h-auto" />
            </div>
            <div className="flex-1 m-10">
              <h3 className={`text-right text-4xl font-bold mb-10 ${darkMode ? 'text-white' : 'text-black'}`}>
                Backend
              </h3>
              {backendData.map((skill, index) => (
                <div key={index} className={`${darkMode ? 'text-white' : 'text-black'} flex items-center flex-1 items-right justify-end w-full bg-black`}>
                    <div className="flex items-right justify-end w-full bg-white">
                      <div
                        className={`h-8 mr-4 rounded-lg mb-5 mt-5 ${skill.color} bar ${
                          inView ? 'animate-grow-bar' : ''
                        }`}
                        style={{
                          width: inView ? `${skill.level}%` : '0',
                          transition: inView ? 'width 1.5s' : '0s',
                        }}
                      >
                        {inView ? `${skill.level}%` : '0%'}
                      </div>
                      <img
                        src={skill.icon[0]}
                        alt={`${skill.skill} icon`}
                        className="w-8 h-8"
                      />
                    </div>
                  <div className="flex-1">
                    <span className={`mr-4 ${darkMode ? 'text-white' : 'text-black'}`}>
                      {skill.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardFlip>
      </div>
    </div>
  );
};

export default Skills;
