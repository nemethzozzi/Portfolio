import React from 'react';

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

  return (
    <div id="contact">
      <div className={`flex items-center justify-center h-screen ${darkMode ? 'bg-dark' : 'bg-light'}`}>
        <div className="max-w-screen-xl mx-8 p-10">
          <h1 className={`text-6xl text-center font-bold ${darkMode ? 'text-white' : 'text-black'} mb-7`}>Contact Me</h1>
          <div className={`border-4 border-gray-500 rounded-lg p-8 shadow-md ${darkMode ? 'bg-dark-secondary' : 'bg-light-secondary'}`}>
            <div className="grid grid-cols-2 gap-4 sm:gap-8 mt-8">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
