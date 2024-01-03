import React, { useRef, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import emailjs from 'emailjs-com';

const Contact = ({ darkMode }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  const [emailData, setEmailData] = useState({
    userEmail: '',
    emailTopic: '',
    emailMessage: '',
  });



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmailData({ ...emailData, [name]: value });
  };

  const handleSendEmail = async () => {
    try {
      // Replace these values with your Email.js credentials
      const serviceID = 'service_ixnfwjg';
      const templateID = 'template_epfbsxl';
      const userID = 'GQpVNxDO9SZL6JKLz';

      // Set up the email data
      const emailParams = {
        to_email: 'nemethzoltan0524@gmail.com',
        from_email: emailData.userEmail,
        subject: emailData.emailTopic,
        message: emailData.emailMessage,
      };

      // Send email using Email.js
      const response = await emailjs.send(serviceID, templateID, emailParams, userID);

      console.log('Email sent:', response);

      // Clear the form after sending the email
      setEmailData({
        userEmail: '',
        emailTopic: '',
        emailMessage: '',
      });

      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email. Please try again later.');
    }
  };

  return (
     <div id="contact" className={`p-2 max-w-screen-lg mx-auto bg-${darkMode ? 'dark' : 'light'}-bg text-${darkMode ? 'white' : 'black'}`}>
      <div className={`flex items-center justify-center ${isMobile ? 'h-full' : 'min-h-screen'}`}>
        <div className={`max-w-screen-xl mx-2 p-10 bg-gray-300 bg-opacity-10 shadow-md rounded-2xl border-sky-700 border-2 ${isMobile ? 'w-full' : isTablet ? 'w-3/4' : 'w-2/3'}`}>
          <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 animate-pulse">
            Contact Me
          </h1>
          <div className="space-y-4 flex flex-col items-center">
            <input
              type="email"
              name="userEmail"
              placeholder="Your Email"
              value={emailData.userEmail}
              onChange={handleInputChange}
              className={`w-full p-3 border-2 border-sky-700 rounded-xl ${darkMode ? 'text-white bg-transparent' : 'text-black bg-transparent'}`}
              style={{
                transition: 'box-shadow 0.3s',
                boxShadow: 'none',
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 0 20px rgba(3, 105, 161, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = 'none';
              }}
            />
            <input
              type="text"
              name="emailTopic"
              placeholder="Email Topic"
              value={emailData.emailTopic}
              onChange={handleInputChange}
              className={`w-full p-3 border-2 border-sky-700 rounded-xl ${darkMode ? 'text-white bg-transparent' : 'text-black bg-transparent'}`}
              style={{
                transition: 'box-shadow 0.3s',
                boxShadow: 'none',
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 0 20px rgba(3, 105, 161, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = 'none';
              }}            
            />
            <textarea
                name="emailMessage"
                placeholder="Your Message"
                value={emailData.emailMessage}
                onChange={handleInputChange}
                className={`w-full p-3 border-2 border-sky-700 rounded-xl ${darkMode ? 'text-white bg-transparent' : 'text-black bg-transparent'}`}
                style={{
                  transition: 'box-shadow 0.3s',
                  boxShadow: 'none',
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 0 20px rgba(3, 105, 161, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = 'none';
                }}
              ></textarea>
            <button onClick={handleSendEmail} className="border-2 border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white hover:scale-110 font-bold py-2 px-4 rounded-xl mt-8 transition-all">
              Send Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;