import React from 'react';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import skillsData from './SkillsData';

const Skills = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div id="skills" ref={ref}>
      <div className={`p-4 h-screen ml-20 ${darkMode ? 'bg-dark' : 'bg-light'}`}>
        <h2 className={`text-6xl text-center font-bold ${darkMode ? 'text-white' : 'text-black'} mb-10 mt-10`}>
          My Skills
        </h2>
        <div className="space-y-8">
          {skillsData.map((skill, index) => (
            <div key={index} className={`${darkMode ? 'text-white' : 'text-black'} flex items-center`}>
              <img
                src={skill.icon[0]} // Assuming you only want to use the first icon in the array
                alt={`${skill.skill} icon`}
                className="w-8 h-8" // Set the width and height accordingly
              />
              <div
                className={`h-8 ml-4 rounded-lg ${skill.color} bar ${
                  inView ? 'animate-grow-bar' : ''
                }`}
                style={{
                  width: inView ? `${skill.level}%` : '0',
                  transition: inView ? 'width 1.5s' : '0s',
                }}
              >
                {inView ? `${skill.level}%` : '0%'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
