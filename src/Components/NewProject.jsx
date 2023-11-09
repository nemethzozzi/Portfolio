import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Projects = () => {

  const data = [
    {
      name: "Clothe Webshop",
      description: "This was my first bigger unique project. You can see how it works",
      images: [
        "/ruhawebshop1.png",
        "/ruhawebshop2.png",
        "/ruhawebshop3.png",
        "/ruhawebshop4.png",
      ],
      github: "https://github.com/nemethzozzi/VotingWebsite",
        



      icons: (
        <svg className="svg-icon w-4 h-4 text-white" viewBox="0 0 30 30">
        <path d="M16 2L3 7L5 24L16 30L27 24L29 7L16 2Z" fill="#DD0031"/>
        <path d="M16 2V30L27 24L29 7L16 2Z" fill="#C3002F"/>
        <path d="M15.9998 5.09375L7.87305 23.3638H10.9031L12.5368 19.2757H19.4348L21.0685 23.3638H24.0986L15.9998 5.09375ZM18.3736 16.7557H13.626L15.9998 11.0298L18.3736 16.7557Z" fill="white"/>
      </svg>
      )
      (
        <svg className="svg-icon w-4 h-4 text-white" viewBox="0 0 43 43">
        <path d="M0,0 L256,0 L256,256 L0,256 L0,0 Z" fill="#1976d2"/>
        <polygon points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264" fill="#fff"/>
        <path d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z" fill="#fff"/>
      </svg>
      )
      (
        <svg className="svg-icon w-4 h-4 text-white" viewBox="0 0 30 30">
        <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"/>
        <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"/>
        <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white"/>
        </svg>
      )
      (
        <svg className="svg-icon w-4 h-4 text-white" viewBox="0 0 30 30">
        <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"/>
        <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"/>
        <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"/>
      </svg>
      )
      (
        <svg className="svg-icon w-4 h-4 text-white" viewBox="0 0 50 50">
        <path d="M25.01,8.565c-0.386-0.753-1.466-0.755-1.848,0l-2.347,4.426L15.404,2.547 c-0.471-0.874-1.798-0.653-1.952,0.325L8.003,37.997L30.25,18.75L25.01,8.565z" fill="#ffa000"/>
        <path d="M25.795 22.604L20.815 12.992 8.003 37.997z" fill="#f57f17"/>
        <path d="M35.859,11.838c-0.13-0.802-1.115-1.12-1.69-0.544L8.003,38.002l14.479,7.614 c0.917,0.512,2.034,0.512,2.951,0.001L40,38.005L35.859,11.838z" fill="#ffca28"/>
        </svg>
      ),

    },
    {
      name: "Voting Website",
      description: "text",
      images: [
        "/ruhawebshop1.png",
        "/ruhawebshop2.png",
        "/ruhawebshop3.png",
        "/ruhawebshop4.png",
      ],
      github: "https://github.com/nemethzozzi/VotingWebsite",
      icons: (
        <svg className="svg-icon w-4 h-4 text-white" viewBox="0 0 30 30">
        <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"/>
        <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"/>
        <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white"/>
        </svg>

      ), 
    },
    {
      name: "Rf1 Project",
      description: "text",
      images: [
        "/ruhawebshop1.png",
        "/ruhawebshop2.png",
        "/ruhawebshop3.png",
        "/ruhawebshop4.png",
      ],
      github: "https://github.com/nemethzozzi/VotingWebsite",
      icons: (
        <svg className="svg-icon w-4 h-4 text-white" viewBox="0 0 30 30">
        <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"/>
        <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"/>
        <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white"/>
        </svg>
      ), 
    },
    {
      name: "Legyen ön is milliomos",
      description: "",
      images: [
        "/ruhawebshop1.png",
        "/ruhawebshop2.png",
        "/ruhawebshop3.png",
        "/ruhawebshop4.png",
      ],
      github: "https://github.com/nemethzozzi/VotingWebsite",
      icons: (
        <svg className="svg-icon w-4 h-4 text-white" viewBox="0 0 30 30">
        <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"/>
        <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"/>
        <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white"/>
        </svg>

      ), 
    },
    {
      name: "snake",
      description: "",
      images: [
        "/ruhawebshop1.png",
        "/ruhawebshop2.png",
        "/ruhawebshop3.png",
        "/ruhawebshop4.png",
      ],
      github: "https://github.com/nemethzozzi/VotingWebsite",
      icons: (
        <svg className="svg-icon w-4 h-4 text-white" viewBox="0 0 30 30">
        <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#E44D26"/>
        <path d="M26 5H16V29.5L24 27L26 5Z" fill="#F16529"/>
        <path d="M9.5 17.5L8.5 8H24L23.5 11H11.5L12 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5H9.5Z" fill="white"/>
        </svg>
      ), 
    }
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return (
    <div className="container mx-auto p-4">
      <Slider {...settings}>
        {data.map((project, index) => (
          <div key={index}>
            <div className="project-container">
              <div className="relative">
                <img src={project.images[currentImageIndex]} alt="Image" className="w-full" />
              </div>
              <h1 className="text-2xl font-bold">{project.name}</h1>
              <p className="text-gray-600">{project.description}</p>
              <a href={project.github}>{project.icons}</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
