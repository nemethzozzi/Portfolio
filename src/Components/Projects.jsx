import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectData from './Data/ProjectsData';
import { useMediaQuery } from 'react-responsive';

const Projects = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Adjust the max width as needed

  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
  };

  const ImageSlider = ({ images }) => {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
    };

    return (
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index + 1}`} style={imageStyle} />
          </div>
        ))}
      </Slider>
    );
  };

  const ProjectCard = ({ name, description, github, icons, images, additionalImages }) => (
    <div className={`mb-10 ${isMobile ? 'w-full' : 'w-1/2'}`}>
      <div className="bg-gray-500 p-4 rounded-lg shadow-md flex flex-col md:flex-row">
        <div className="md:w-1/2 pr-4">
          <ImageSlider images={images} />
          {/* Display additional images */}
          {additionalImages && (
            <div className="flex flex-wrap">
              {additionalImages.slice(0, 4).map((image, index) => (
                <div key={index} className="w-1/4 p-2">
                  <img src={image} alt={`Additional Image ${index + 1}`} style={imageStyle} />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">{name}</h2>
            <p className="text-gray-600 ml-10 0 mr-10">{description}
              <div className="flex items-center mt-3">
                {icons.map((icon, index) => (
                  <div key={index} className="mr-2">
                    <img src={icon} alt={`Icon ${index + 1}`} style={{ width: '35px', height: '35px' }} />
                  </div>
                ))}
              </div>
            </p>
          </div>

          <div className="mt-5 mb-3 flex items-center justify-center">
            <button className="mr-5 bg-sky-500 hover:bg-sky-600 text-white font-bold py-1 px-2 rounded">
              <a href={github} className="flex flex-col items-center">
                GitHub
                <svg className="svg-icon w-4 h-4" fill="white" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div id="projects">
      <div className="p-4">
        <div className="max-w-screen-xl mx-8 ml-20">
          <h1 className="text-6xl text-center font-bold text-white mb-7 mt-10">My Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
            {ProjectData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
