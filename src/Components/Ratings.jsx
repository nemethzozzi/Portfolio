import React, { useState, useEffect } from 'react';

const predefinedRatings = [
  {
    name: 'Courtney Cook',
    stars: 4,
    text: 'Great experience with the car rental service. Will use again!',
    image: './images/users/user1.jpg',
  },
  {
    name: 'Alexander Hipp',
    stars: 1,
    text: 'Excellent service and a fantastic car selection. Highly recommended!',
    image: './images/users/user2.jpg',
  },
  {
    name: 'Jane Smith',
    stars: 2,
    text: 'Service was okay. Room for improvement.',
    image: './images/users/user3.jpg',
  },
  {
    name: 'Courtney Cook',
    stars: 4,
    text: 'Excellent service and a fantastic car selection. Highly recommended!',
    image: './images/users/user4.jpg',
  },
  {
    name: 'Jurica Koletić',
    stars: 5,
    text: 'Excellent service and a fantastic car selection. Highly recommended!',
    image: './images/users/user5.jpg',
  },
  // Add more predefined ratings as needed
];

const Ratings = () => {
  const [currentRating, setCurrentRating] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrevRating = () => {
    setCurrentRating((prevRating) => (prevRating === 0 ? predefinedRatings.length - 1 : prevRating - 1));
  };

  const handleNextRating = () => {
    setCurrentRating((prevRating) => (prevRating === predefinedRatings.length - 1 ? 0 : prevRating + 1));
  };

  const visibleRatings = isMobile
    ? [currentRating]
    : [
        (currentRating - 1 + predefinedRatings.length) % predefinedRatings.length,
        currentRating,
        (currentRating + 1) % predefinedRatings.length,
      ];

  const boxWidth = isMobile ? '80%' : '200px';
  const gap = isMobile ? 0 : 8;

  return (
    <div className="rating-container flex flex-col items-center justify-center h-56 md:h-80">
      <div className="rating-box-container flex items-center space-x-2 md:space-x-4">
        <button
          onClick={handlePrevRating}
          className="text-white bg-white hover:bg-neutral-100 transition-all rounded-lg p-2 focus:outline-none transform hover:-translate-x-1"
        >
          <img src="./icons/arrow_left.png" alt="Previous" className='h-3 md:h-5' />
        </button>
        {visibleRatings.map((index) => (
          <div
            key={index}
            className={`rating-box transition-transform transform bg-neutral-300 rounded-lg p-2${
              index === currentRating
                ? ' scale-110 opacity-100'
                : ' scale-80 opacity-50'
            }`}
            style={{ width: boxWidth, marginRight: `${gap}px` }}
          >
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`${
                    i < predefinedRatings[index].stars
                      ? 'text-yellow-500'
                      : 'text-gray-400'
                  }`}
                >
                  &#9733;
                </span>
              ))}
            </div>
            <p className="rating-text text-gray-700 mt-1 text-xs md:mt-2 md:text-sm">{predefinedRatings[index].text}</p>
            <p className="rating-author text-gray-600 mt-1 text-xxs md:mt-2 md:text-xs">{predefinedRatings[index].name}</p>
            <img
              className="w-6 h-6 md:w-8 md:h-8 rounded-full object-cover mt-2"
              src={predefinedRatings[index].image}
              alt={predefinedRatings[index].name}
            />
          </div>
        ))}
        <button
          onClick={handleNextRating}
          className="text-white bg-white hover:bg-neutral-100 transition-all rounded-lg p-2 focus:outline-none transform hover:translate-x-1"
        >
          <img src="./icons/arrow_right.png" alt="Next" className="h-3 md:h-5"/>
        </button>
      </div>
    </div>
  );
};

export default Ratings;
