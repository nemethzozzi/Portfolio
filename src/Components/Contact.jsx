import React, { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

const Contact = ({ darkMode }) => {
  const contactItems = [
    {
      label: "GitHub",
      text: "/nemethzozzi",
      icon: "icons/github.png",
    },
    {
      label: "Email",
      text: "nemethzoltan0524@gmail.com",
      icon: "icons/email.png",
    },
    {
      label: "LinkedIn",
      text: "/nemethzoltan0524",
      icon: "icons/linkedin.png",
    },
    {
      label: "Discord",
      text: "/nemethzozzi",
      icon: "icons/discord.png",
    },
    {
      label: "Phone",
      text: "06 70 601 0524",
      icon: "icons/phone.png",
    },
  ];

  const ref = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  return (
    <div id="contact">
      <div className={`flex items-center justify-center ${isMobile ? 'h-screen' : 'min-h-screen'} ${darkMode ? 'bg-dark' : 'bg-light'}`}>
        <div className={`max-w-screen-xl mx-2 p-10 ${isMobile ? 'w-full' : isTablet ? 'w-3/4' : 'w-2/3'}`}>
          <h1 className={`text-4xl md:text-6xl text-center font-bold animate-pulse ${darkMode ? 'text-white' : 'text-black'} mb-8`}>Contact Me</h1>

          {isMobile || isTablet ? (
            // Render contact items in mobile and tablet mode
            <div className={`grid grid-cols-1 ${isTablet ? 'sm:grid-cols-2' : ''} gap-4 sm:gap-8 mt-8 border-4 bg-white bg-opacity-10 border-gray-500 rounded-3xl p-8 shadow-md ${darkMode ? 'bg-dark-secondary' : 'bg-light-secondary'}`}>
              {contactItems.map((item, index) => (
                <div key={index} className={`flex items-center text-center ${darkMode ? 'text-white' : 'text-black'}`}>
                  <div className="flex flex-col items-center mt-2">
                    <img src={item.icon} alt={`${item.icon} icon`} className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col items-start mt-2 ml-3">
                    <span className={`text-base font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>{item.label}</span>
                    <span className={`text-xs ${darkMode ? 'text-white' : 'text-black'}`}>{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Render Google Map in larger screens
            <iframe
              title="Google Map"
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://www.google.com/maps/embed/v1/place?q=Szeged&key=hHm3VNho9upDPgRh1ru2pqCEvsAIbCzV`}
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
