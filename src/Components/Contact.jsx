import React, { useState, useRef } from 'react';
import CardFlip from 'react-card-flip';

const Contact = ({ darkMode }) => {
  const ref = useRef(null);

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

  const [isFlipped, setFlipped] = useState(false);

  const handleContainerClick = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div id="contact">
      <div className={`flex items-center justify-center h-screen ${darkMode ? 'bg-dark' : 'bg-light'}`}>
        <div className="max-w-screen-xl mx-8 p-10">
          <h1 className={`text-6xl text-center font-bold ${darkMode ? 'text-white' : 'text-black'} mb-7`}>Contact Me</h1>
          <div>
            <CardFlip isFlipped={isFlipped} flipDirection="vertical">
              {/* Front side */}
                <div className={`cursor-pointer border-4 border-gray-500 rounded-3xl p-8 shadow-md ${darkMode ? 'bg-dark-secondary' : 'bg-light-secondary'}`}
                     style={{ 
                     height: '350px', 
                     width: '600px',
                     }}
                     ref={ref} onClick={handleContainerClick}
                     >
                  <img src="qr.png" alt="QR Code" className="w-1/2 h-full mx-auto" />
                  <p className= "text-2xl text-center animate-pulse font-bold">Or click on me</p>
                </div>
              {/* Back side */}
              <div className={`cursor-pointer grid grid-cols-2 gap-4 sm:gap-8 mt-8 border-4 border-gray-500 rounded-3xl p-8 shadow-md ${darkMode ? 'bg-dark-secondary' : 'bg-light-secondary'}`}
                   style={{ 
                   height: '350px', 
                   width: '600px',
                   }}
                   ref={ref} onClick={handleContainerClick}
                   >
                {contactItems.map((item, index) => (
                  <div key={index} className={`flex items-center text-center ${darkMode ? 'text-white' : 'text-black'}`}>
                    <div className="flex flex-col items-center mt-2">
                      <img
                        src={item.icon}
                        alt={`${item.icon} icon`}
                        className="w-10 h-10"
                      />
                    </div>
                    <div className="flex flex-col items-start mt-2 ml-3">
                      <span className="text-lg font-semibold">{item.label}</span>
                      <span className="text-sm">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardFlip>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Contact;
