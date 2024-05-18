import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

const Counter = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5, // When 50% of the component is visible
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  const projectsProps = useSpring({
    number: isVisible ? 5 : 0,
    from: { number: 0 },
    config: { duration: 2000 },
  });

  const teamProjectsProps = useSpring({
    number: isVisible ? 3 : 0,
    from: { number: 0 },
    config: { duration: 2000 },
  });

  const experienceProps = useSpring({
    number: isVisible ? 0 : 0,
    from: { number: 0 },
    config: { duration: 2000 },
  });

  return (
    <div
      ref={counterRef}
      className={`counter-container ${isMobile ? 'flex flex-col items-center justify-center' : 'flex justify-center'} text-white`}
    >
      <div
        className={`counter-item font-semibold ${isMobile ? 'mt-6' : 'mx-4 mr-20'}`}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <p className="text-center">Projects</p>
        <div className={`text-9xl ${isMobile ? 'mt-2' : ''}`}>
          <animated.span>{projectsProps.number.interpolate((val) => Math.floor(val))}</animated.span>
        </div>
      </div>
      <div
        className={`counter-item font-semibold ${isMobile ? 'mt-6' : 'mx-4 mr-20'}`}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <p className="text-center">Team Projects</p>
        <div className={`text-9xl ${isMobile ? 'mt-2' : ''}`}>
          <animated.span>{teamProjectsProps.number.interpolate((val) => Math.floor(val))}</animated.span>
        </div>
      </div>
      <div
        className={`counter-item font-semibold ${isMobile ? 'mt-6' : 'mx-4'}`}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <p className="text-center">Years of Experience</p>
        <div className={`text-9xl ${isMobile ? 'mt-2' : ''}`}>
          <animated.span>{experienceProps.number.interpolate((val) => Math.floor(val))}</animated.span>
        </div>
      </div>
    </div>
  );
};

export default Counter;
