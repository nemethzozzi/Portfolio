import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin, FaDiscord, FaPhone } from 'react-icons/fa';

const Footer = ({ isTablet }) => {
  const contactItems = [
    {
      label: "GitHub",
      text: "/nemethzozzi",
      icon: <FaGithub style={{ fontSize: '24px', color: 'white' }} />,
    },
    {
      label: "Email",
      text: "nemethzoltan0524@gmail.com",
      icon: <FaEnvelope style={{ fontSize: '24px', color: 'white' }} />,
    },
    {
      label: "LinkedIn",
      text: "/nemethzoltan0524",
      icon: <FaLinkedin style={{ fontSize: '24px', color: 'white' }} />,
    },
    {
      label: "Discord",
      text: "/nemethzozzi",
      icon: <FaDiscord style={{ fontSize: '24px', color: 'white' }} />,
    },
    {
      label: "Phone",
      text: "06 70 601 0524",
      icon: <FaPhone style={{ fontSize: '24px', color: 'white' }} />,
    },
  ];

  return (
    <footer className="bg-sky-700 footer-container relative">
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-8 mt-8 p-8 bg-light-secondary relative z-10`}>
        {contactItems.map((item, index) => (
          <div key={index} className="flex items-center text-center">
            <div className="flex flex-col items-center mt-2">
              {item.icon}
            </div>
            <div className="flex flex-col items-start mt-2 ml-3">
              <span className="text-base font-semibold text-white">{item.label}</span>
              <span className="text-xs text-white">{item.text}</span>
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
