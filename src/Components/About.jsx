import React from 'react';
import ReactTyped from "react-typed";
import { FaGithub, FaTwitter, FaEnvelope, FaLinkedin, FaDiscord } from 'react-icons/fa';

const About = ({ darkMode }) => {
  // Function to handle the download action
  const handleDownloadCV = () => {
    // Replace 'your-cv-file.pdf' with the actual filename/path of your CV
    const cvFile = '/Németh Zoltán CV.pdf';
    // Create a link element
    const downloadLink = document.createElement('a');
    // Set the href attribute to the CV file
    downloadLink.href = cvFile;
    // Set the download attribute with the desired file name
    downloadLink.download = 'Németh Zoltán CV.pdf';
    // Append the link to the document
    document.body.appendChild(downloadLink);
    // Trigger a click on the link to start the download
    downloadLink.click();
    // Remove the link from the document after download
    document.body.removeChild(downloadLink);
  };

  return (
    <div id="about">
      <div className="mt-10 mb-20 p-4 flex flex-col md:flex-row ml-4 md:ml-20">
        <div className="w-full md:w-3/4 md:ml-4 md:pr-4 order-2 md:order-1">
          <h1 className={`mt-14 pr-5 text-xl md:text-2xl lg:text-3xl font-semibold text-${darkMode ? 'white' : 'black'}`}>
            Hello
          </h1>
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-7">
              <span className={`text-${darkMode ? 'white' : 'black'}`}>I'm{" "}</span>
              <span className="text-sky-700">
                <ReactTyped
                  strings={["Németh Zoltán", "a Software Engineer"]}
                  typeSpeed={100}
                  loop
                  backSpeed={20}
                  cursorChar="|"
                  showCursor={true}
                />
              </span>
            </h1>
          </div>
          <p className={`text-base md:text-base lg:text-lg font-medium mt-8 max-w-sm md:max-w-md lg:max-w-lg text-${darkMode ? 'white' : 'black'}`}>
            Study at Szeged University with a penchant for frontend development. I thrive in collaborative team settings, where the exchange of ideas fuels my passion for crafting seamless user experiences. Open to learning new technologies, I'm enthusiastic about contributing to innovative projects and continually expanding my skill set.
          </p>
          <div className="flex mt-8 space-x-4 sm:space-x-4">
            <a href="https://github.com/nemethzozzi">
              <div className="border-2 border-sky-700 rounded-full hover:scale-110 p-3"
                style={{
                  transition: 'box-shadow 0.3s',
                  boxShadow: 'none',
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 0 30px rgba(3, 105, 161, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = 'none';
                }}>
                <FaGithub size={20} />
              </div>
            </a>
            <a href="https://twitter.com/nemeth_zozzi">
              <div className="border-2 border-sky-700 rounded-full hover:scale-110 p-3"
                style={{
                  transition: 'box-shadow 0.3s',
                  boxShadow: 'none',
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 0 30px rgba(3, 105, 161, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = 'none';
                }}>
                <FaTwitter size={20} />
              </div>
            </a>
            <a href="mailto:nemethzoltan0524@gmail.com">
              <div className="border-2 border-sky-700 rounded-full hover:scale-110 p-3"
                style={{
                  transition: 'box-shadow 0.3s',
                  boxShadow: 'none',
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 0 30px rgba(3, 105, 161, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = 'none';
                }}>
                <FaEnvelope size={20} />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/zoltán-németh-15532928a/">
              <div className="border-2 border-sky-700 rounded-full hover:scale-110 p-3"
                style={{
                  transition: 'box-shadow 0.3s',
                  boxShadow: 'none',
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 0 30px rgba(3, 105, 161, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = 'none';
                }}>
                <FaLinkedin size={20} />
              </div>
            </a>
            <a href="https://discordapp.com/users/654333734580912148">
              <div className="border-2 border-sky-700 rounded-full hover:scale-110 p-3"
                style={{
                  transition: 'box-shadow 0.3s',
                  boxShadow: 'none',
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = '0 0 30px rgba(3, 105, 161, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = 'none';
                }}>
                <FaDiscord size={20} />
              </div>
            </a>
          </div>

          {/* Download CV button */}
          <button
            className="border-2 border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white hover:scale-110 font-bold py-2 px-4 rounded-xl mt-8 transition-all"
            onClick={handleDownloadCV}
          >
            Download CV
          </button>
        </div>

        <div className="w-full md:w-2/5 flex justify-start mt-20 order-1 md:order-2">
          <img
            src="/tablo.jpg"
            alt="Zoltán Németh"
            className="w-full md:w-80 h-80 rounded-full object-cover animation-container"
            style={{
              height: '60%',
              width: '80%',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
