import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




const Projects = () => {

const imageStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
};

const ImageSlider1 = () => {
  const settings1 = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <Slider {...settings1}>
      <div>
        <img src="/ruhawebshop1.png" alt="Image 1" style={imageStyle}/>
      </div>
      <div>
        <img src="/ruhawebshop2.png" alt="Image 2" style={imageStyle}/>
      </div>
      <div>
        <img src="/ruhawebshop3.png" alt="Image 2" style={imageStyle}/>
      </div>
      <div>
        <img src="/ruhawebshop4.png" alt="Image 2" style={imageStyle}/>
      </div>
    </Slider>
  );
};

const ImageSlider2 = () => {
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Adjust the number of slides to show for the second slider
    slidesToScroll: 2, // Adjust the number of slides to scroll for the second slider
    initialSlide: 0,
  };

  return (
    <Slider {...settings2}>
      <div>
        <img src="/image3.png" alt="Image 3" />
      </div>
      <div>
        <img src="/image4.png" alt="Image 4" />
      </div>
      {/* Add more image slides as needed for the second slider */}
    </Slider>
  );
};

const ImageSlider3 = () => {
  const settings3 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust the number of slides to show for the second slider
    slidesToScroll: 3, // Adjust the number of slides to scroll for the second slider
    initialSlide: 0,
  };

  return (
    <Slider {...settings3}>
      <div>
        <img src="/image3.png" alt="Image 3" />
      </div>
      <div>
        <img src="/image4.png" alt="Image 4" />
      </div>
      {/* Add more image slides as needed for the second slider */}
    </Slider>
  );
};

const ImageSlider4 = () => {
  const settings4 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Adjust the number of slides to show for the second slider
    slidesToScroll: 4, // Adjust the number of slides to scroll for the second slider
    initialSlide: 0,
  };

  return (
    <Slider {...settings4}>
      <div>
        <img src="/image3.png" alt="Image 3" />
      </div>
      <div>
        <img src="/image4.png" alt="Image 4" />
      </div>
      {/* Add more image slides as needed for the second slider */}
    </Slider>
  );
};

const ImageSlider5 = () => {
  const settings5 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Adjust the number of slides to show for the second slider
    slidesToScroll: 5, // Adjust the number of slides to scroll for the second slider
    initialSlide: 0,
  };

  return (
    <Slider {...settings5}>
      <div>
        <img src="/image3.png" alt="Image 3" />
      </div>
      <div>
        <img src="/image4.png" alt="Image 4" />
      </div>
      {/* Add more image slides as needed for the second slider */}
    </Slider>
  );
};


  return (
    <div className="bg-gray-800 p-4">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-6xl text-center font-bold text-white mb-7 mt-10">My Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="bg-gray-500 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Clothe Webshop</h2>
            <p className="text-gray-600 mb-3">
              This was my first bigger unique project. You can see how it works{" "}
              <a href="https://ruhawebshopnz.web.app" className="text-gray-800 hover:text-white">
                here
              </a>
            </p>
            <ImageSlider1 />
            <p className="text-gray-600 mt-5 mb-3">
              <div className="flex items-center">
              <span style={{ marginTop: '-13px' }}>The code: </span>
                <a href="https://github.com/nemethzozzi/ClothingWebshop">
                <svg className="svg-icon w-8 h-8 hover:fill-current hover:text-white" fill="9ca3af" viewBox="0 0 25 25" style={{ marginLeft: '8px' }}>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
            </div>
          </p>
          <div className="flex space-x-2">
          <svg className="svg-icon w-4 h-4 text-white" viewBox="0 0 30 30">
            <path d="M16 2L3 7L5 24L16 30L27 24L29 7L16 2Z" fill="#DD0031"/>
            <path d="M16 2V30L27 24L29 7L16 2Z" fill="#C3002F"/>
            <path d="M15.9998 5.09375L7.87305 23.3638H10.9031L12.5368 19.2757H19.4348L21.0685 23.3638H24.0986L15.9998 5.09375ZM18.3736 16.7557H13.626L15.9998 11.0298L18.3736 16.7557Z" fill="white"/>
          </svg>
          <svg className="svg-icon w-4 h-4 text-white" viewBox="0 0 43 43">
            <path d="M0,0 L256,0 L256,256 L0,256 L0,0 Z" fill="#1976d2"/>
            <polygon points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264" fill="#fff"/>
            <path d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z" fill="#fff"/>
          </svg>
          <svg className="svg-icon w-4 h-4 text-white" viewBox="0 0 30 30">
            <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"/>
            <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"/>
            <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white"/>
          </svg>
          <svg className="svg-icon w-4 h-4 text-white" viewBox="0 0 30 30">
            <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"/>
            <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"/>
            <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"/>
          </svg>
          <svg className="svg-icon w-4 h-4 text-white" viewBox="0 0 50 50">
            <path d="M25.01,8.565c-0.386-0.753-1.466-0.755-1.848,0l-2.347,4.426L15.404,2.547 c-0.471-0.874-1.798-0.653-1.952,0.325L8.003,37.997L30.25,18.75L25.01,8.565z" fill="#ffa000"/>
            <path d="M25.795 22.604L20.815 12.992 8.003 37.997z" fill="#f57f17"/>
            <path d="M35.859,11.838c-0.13-0.802-1.115-1.12-1.69-0.544L8.003,38.002l14.479,7.614 c0.917,0.512,2.034,0.512,2.951,0.001L40,38.005L35.859,11.838z" fill="#ffca28"/>
          </svg>
          </div>
  
          </div>
          <div className="bg-gray-500 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Voting Website</h2>
            <p className="text-gray-600">
              text here
            </p>
             <ImageSlider2 />
            <p className="text-gray-600 mt-5 mb-3">
              <div className="flex items-center">
              <span style={{ marginTop: '-13px' }}>The code: </span>
                <a href="https://github.com/nemethzozzi/VotingWebsite">
                <svg className="svg-icon w-8 h-8 hover:fill-current hover:text-white" fill="9ca3af" viewBox="0 0 25 25" style={{ marginLeft: '8px' }}>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
            </div>
          </p>
          </div>

          <div className="bg-gray-500 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">RF1 Project</h2>
            <p className="text-gray-600">
              text here
            </p>
            <ImageSlider3 />
            <p className="text-gray-600 mt-5 mb-3">
              <div className="flex items-center">
              <span style={{ marginTop: '-13px' }}>The code: </span>
                <a href="https://github.com/nemethzozzi/VotingWebsite">
                <svg className="svg-icon w-8 h-8 hover:fill-current hover:text-white" fill="9ca3af" viewBox="0 0 25 25" style={{ marginLeft: '8px' }}>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
            </div>
          </p>
          </div>
          <div className="bg-gray-500 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Legyen ön is Milliomos</h2>
            <p className="text-gray-600">
              text here
            </p>
            <ImageSlider4 />
            <p className="text-gray-600 mt-5 mb-3">
              <div className="flex items-center">
              <span style={{ marginTop: '-13px' }}>The code: </span>
                <a href="https://github.com/nemethzozzi/VotingWebsite">
                <svg className="svg-icon w-8 h-8 hover:fill-current hover:text-white" fill="9ca3af" viewBox="0 0 25 25" style={{ marginLeft: '8px' }}>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
            </div>
          </p>
          </div>
          <div className="bg-gray-500 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Snake</h2>
            <p className="text-gray-600">
              text here
            </p>
            <ImageSlider5 />
            <p className="text-gray-600 mt-5 mb-3">
              <div className="flex items-center">
              <span style={{ marginTop: '-13px' }}>The code: </span>
                <a href="https://github.com/nemethzozzi/VotingWebsite">
                <svg className="svg-icon w-8 h-8 hover:fill-current hover:text-white" fill="9ca3af" viewBox="0 0 25 25" style={{ marginLeft: '8px' }}>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
            </div>
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
