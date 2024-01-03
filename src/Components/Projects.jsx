import React from 'react';
import ProjectData from './Data/ProjectsData';
import { useMediaQuery } from 'react-responsive';

const Projects = ({ darkMode }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  const ProjectCard = ({ name, date, github, demo, icons, images }) => (
    <div className="mb-10">
      <div className={`bg-gray-300 bg-opacity-10 rounded-2xl flex flex-col items-start justify-between shadow-md border-sky-700 border-2 ${darkMode ? 'dark-mode' : ''} p-6 h-full`}
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
        <div className="mb-4 text-center">
          <img
            src={images[0]}
            alt={`Project ${name}`}
            className="mx-auto"
            style={{
              width: '100%', // Set the width to 100% for responsiveness
              height: '300px', // Set the desired fixed height for the images
              objectFit: 'cover', // Maintain aspect ratio and cover the container
            }}
          />
        </div>
        <div className="flex items-center mb-3">
          {icons.map((icon, index) => (
            <div key={index} className="mr-2 mb-5">
              <img
                src={icon}
                alt={`Icon ${index + 1}`}
                style={{ width: '30px', height: '30px', transition: 'transform 0.3s' }}
                onMouseEnter={(e) => (e.target.style.transform = 'translateY(-5px)')}
                onMouseLeave={(e) => (e.target.style.transform = 'translateY(0)')}
              />
            </div>
          ))}
        </div>
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>{name}</h2>
        <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-black'}`}>{date}</p>
        <div className="mt-3 flex space-x-4 items-center justify-center">
          <button className={`text-base bg-gray-300 bg-opacity-10 shadow-md hover:scale-105 hover:text-sky-500 duration-300 relative font-bold py-2 px-4 rounded transition-all ${darkMode ? 'text-white' : 'text-black'}`}>
            <a href={github} className="flex items-center relative">
              <span className="underline2"></span>
              Code
              <svg className="svg-icon w-4 h-4 ml-2" fill={darkMode ? 'white' : 'black'} viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.40.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.20-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.20-.82 2.20-.82.44 1.10.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.20 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </a>
          </button>
          {demo ? (
            <button className={`text-base bg-gray-300 bg-opacity-10 shadow-md hover:scale-105 hover:text-sky-500 duration-300 relative font-bold py-2 px-4 rounded transition-all ${darkMode ? 'text-white' : 'text-black'}`}>
              <a href={demo} className="flex items-center relative">
                <span className="underline2"></span>
                Demo
                <svg className="svg-icon w-4 h-4 ml-2" fill={darkMode ? 'white' : 'black'} viewBox="0 0 50 50">
                  <path d="M 8.03125 8.4570312 C 7.770375 8.4589063 7.5103125 8.5625312 7.3203125 8.7695312 C 3.3953125 13.041531 1 18.741 1 25 C 1 31.259 3.3953125 36.958469 7.3203125 41.230469 C 7.7003125 41.644469 8.3569063 41.643094 8.7539062 41.246094 L 10.882812 39.117188 C 11.265812 38.734187 11.263391 38.124656 10.900391 37.722656 C 7.8553906 34.352656 6 29.889 6 25 C 6 20.111 7.8553906 15.647344 10.900391 12.277344 C 11.263391 11.875344 11.265813 11.266812 10.882812 10.882812 L 8.7539062 8.7539062 C 8.5554063 8.5554063 8.292125 8.4551562 8.03125 8.4570312 z M 41.96875 8.4570312 C 41.707625 8.4554062 41.444594 8.5554062 41.246094 8.7539062 L 39.115234 10.884766 C 38.732234 11.267766 38.734656 11.875344 39.097656 12.277344 C 42.143656 15.646344 44 20.111 44 25 C 44 29.889 42.144609 34.352656 39.099609 37.722656 C 38.736609 38.124656 38.734188 38.733187 39.117188 39.117188 L 41.246094 41.246094 C 41.643094 41.643094 42.299687 41.643469 42.679688 41.230469 C 46.604687 36.958469 49 31.259 49 25 C 49 18.741 46.604687 13.041531 42.679688 8.7695312 C 42.489688 8.5625312 42.229875 8.4586563 41.96875 8.4570312 z M 35.625 14.837891 C 35.355125 14.824516 35.079594 14.920406 34.871094 15.128906 L 32.740234 17.259766 C 32.381234 17.618766 32.341969 18.196938 32.667969 18.585938 C 34.123969 20.323937 35 22.561 35 25 C 35 27.439 34.123969 29.675109 32.667969 31.412109 C 32.341969 31.801109 32.381234 32.379281 32.740234 32.738281 L 34.871094 34.871094 C 35.288094 35.288094 35.967516 35.250687 36.353516 34.804688 C 38.625516 32.175687 40 28.748 40 25 C 40 21.252 38.625516 17.824312 36.353516 15.195312 C 36.160516 14.972313 35.894875 14.851266 35.625 14.837891 z M 14.375 14.839844 C 14.105125 14.853219 13.839484 14.974266 13.646484 15.197266 C 11.374484 17.825266 10 21.252 10 25 C 10 28.748 11.374484 32.175688 13.646484 34.804688 C 14.032484 35.250687 14.711906 35.288094 15.128906 34.871094 L 17.259766 32.740234 C 17.618766 32.381234 17.658031 31.803062 17.332031 31.414062 C 15.876031 29.676062 15 27.439 15 25 C 15 22.561 15.876031 20.324891 17.332031 18.587891 C 17.658031 18.198891 17.618766 17.620719 17.259766 17.261719 L 15.128906 15.128906 C 14.920406 14.920406 14.644875 14.826469 14.375 14.839844 z M 25 19 C 21.686 19 19 21.686 19 25 C 19 28.314 21.686 31 25 31 C 28.314 31 31 28.314 31 25 C 31 21.686 28.314 19 25 19 z"/>
                </svg>
              </a>
            </button>
          ) : (
            <button className="text-base bg-gray-300 bg-opacity-10 shadow-md font-bold py-2 px-4 rounded cursor-not-allowed flex items-center relative" disabled>
              Demo
              <svg className="svg-icon w-4 h-4 ml-2 " fill={darkMode ? 'white' : 'black'} viewBox="0 0 50 50">
                  <path d="M 8.03125 8.4570312 C 7.770375 8.4589063 7.5103125 8.5625312 7.3203125 8.7695312 C 3.3953125 13.041531 1 18.741 1 25 C 1 31.259 3.3953125 36.958469 7.3203125 41.230469 C 7.7003125 41.644469 8.3569063 41.643094 8.7539062 41.246094 L 10.882812 39.117188 C 11.265812 38.734187 11.263391 38.124656 10.900391 37.722656 C 7.8553906 34.352656 6 29.889 6 25 C 6 20.111 7.8553906 15.647344 10.900391 12.277344 C 11.263391 11.875344 11.265813 11.266812 10.882812 10.882812 L 8.7539062 8.7539062 C 8.5554063 8.5554063 8.292125 8.4551562 8.03125 8.4570312 z M 41.96875 8.4570312 C 41.707625 8.4554062 41.444594 8.5554062 41.246094 8.7539062 L 39.115234 10.884766 C 38.732234 11.267766 38.734656 11.875344 39.097656 12.277344 C 42.143656 15.646344 44 20.111 44 25 C 44 29.889 42.144609 34.352656 39.099609 37.722656 C 38.736609 38.124656 38.734188 38.733187 39.117188 39.117188 L 41.246094 41.246094 C 41.643094 41.643094 42.299687 41.643469 42.679688 41.230469 C 46.604687 36.958469 49 31.259 49 25 C 49 18.741 46.604687 13.041531 42.679688 8.7695312 C 42.489688 8.5625312 42.229875 8.4586563 41.96875 8.4570312 z M 35.625 14.837891 C 35.355125 14.824516 35.079594 14.920406 34.871094 15.128906 L 32.740234 17.259766 C 32.381234 17.618766 32.341969 18.196938 32.667969 18.585938 C 34.123969 20.323937 35 22.561 35 25 C 35 27.439 34.123969 29.675109 32.667969 31.412109 C 32.341969 31.801109 32.381234 32.379281 32.740234 32.738281 L 34.871094 34.871094 C 35.288094 35.288094 35.967516 35.250687 36.353516 34.804688 C 38.625516 32.175687 40 28.748 40 25 C 40 21.252 38.625516 17.824312 36.353516 15.195312 C 36.160516 14.972313 35.894875 14.851266 35.625 14.837891 z M 14.375 14.839844 C 14.105125 14.853219 13.839484 14.974266 13.646484 15.197266 C 11.374484 17.825266 10 21.252 10 25 C 10 28.748 11.374484 32.175688 13.646484 34.804688 C 14.032484 35.250687 14.711906 35.288094 15.128906 34.871094 L 17.259766 32.740234 C 17.618766 32.381234 17.658031 31.803062 17.332031 31.414062 C 15.876031 29.676062 15 27.439 15 25 C 15 22.561 15.876031 20.324891 17.332031 18.587891 C 17.658031 18.198891 17.618766 17.620719 17.259766 17.261719 L 15.128906 15.128906 C 14.920406 14.920406 14.644875 14.826469 14.375 14.839844 z M 25 19 C 21.686 19 19 21.686 19 25 C 19 28.314 21.686 31 25 31 C 28.314 31 31 28.314 31 25 C 31 21.686 28.314 19 25 19 z"/>
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div id="projects" className={`p-4 flex items-center justify-center ${darkMode ? 'bg-dark' : 'bg-light'}`}>
      <div className={`${isMobile ? 'w-full' : 'max-w-screen-xl mx-8 ml-20'}`}>
        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold ${darkMode ? 'text-white' : 'text-black'} mb-10 mt-20`}>
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ProjectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
