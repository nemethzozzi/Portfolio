import React, { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

const Contact = ({ darkMode }) => {
  const ref = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  return (
    <div id="contact">
      <div className={`flex items-center justify-center ${isMobile ? 'h-screen' : 'min-h-screen'} ${darkMode ? 'bg-dark' : 'bg-light'}`}>
        <div className={`max-w-screen-xl mx-8 p-10 ${isMobile ? 'w-full' : isTablet ? 'w-3/4' : 'w-2/3'}`}>
          <h1 className={`text-4xl md:text-6xl text-center font-bold animate-pulse ${darkMode ? 'text-white' : 'text-black'} mb-8`}>Contact Me</h1>
          <img src="qr.png" alt="QR Code" className={`w-${isMobile ? 'full' : '1/2'} mx-auto max-w-full`} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
