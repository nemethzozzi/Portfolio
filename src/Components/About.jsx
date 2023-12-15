import React from 'react';

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
      <div className="mt-10 mb-20 p-4 flex flex-col md:flex-row ml-20">
        <div className="w-full md:w-3/4 mt-20 md:ml-4 md:pr-4 order-2 md:order-1">
          <h1 className="text-gray-400 pr-5 text-4xl font-semibold">
            Hello
          </h1>
        <div className="animate-typing overflow-hidden whitespace-nowrap">
          <h1 className="text-5xl font-bold mt-7">
            <span className="text-gray-400">I am</span>{" "}
            <span className="text-sky-700">Zoltán Németh</span>
          </h1>
        </div>
          <p className="text-xl text-gray-400 font-medium mt-8">I study Software Engineering at Szeged University with a penchant for frontend development. I thrive in collaborative team settings, where the exchange of ideas fuels my passion for crafting seamless user experiences. Open to learning new technologies, I'm enthusiastic about contributing to innovative projects and continually expanding my skill set. </p>
          <div className="flex mt-8 space-x-4 sm:space-x-4">
            <a href="https://github.com/nemethzozzi" className="hover:text-sky-500 hover:scale-110 transition-transform">
              <svg className="svg-icon w-8 h-8 hover:fill-current" fill="#9ca3af" viewBox="0 0 16 16">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </a>
            <a href="https://twitter.com/nemeth_zozzi" className="hover:text-sky-500 hover:scale-110 transition-transform">
              <svg className="svg-icon w-8 h-8 hover:fill-current" fill="#9ca3af" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="mailto:nemethzoltan0524@gmail.com" className="hover:text-sky-500 hover:scale-110 transition-transform">
            <svg className="svg-icon w-8 h-8 hover:fill-current" fill="#9ca3af" viewBox="0 0 50 50">
            <path d="M 5.5 7 C 3.019531 7 1 9.019531 1 11.5 L 1 11.925781 L 25 29 L 49 11.925781 L 49 11.5 C 49 9.019531 46.980469 7 44.5 7 Z M 6.351563 9 L 43.644531 9 L 25 22 Z M 1 14.027344 L 1 38.5 C 1 40.980469 3.019531 43 5.5 43 L 44.5 43 C 46.980469 43 49 40.980469 49 38.5 L 49 14.027344 L 43 18.296875 L 43 41 L 7 41 L 7 18.296875 Z"/>
            </svg>
            </a>
            <a href="https://www.linkedin.com/in/zoltán-németh-15532928a/" className="hover:text-sky-500 hover:scale-110 transition-transform">
              <svg className="svg-icon w-8 h-8 hover:fill-current" fill="#9ca3af" viewBox="0 0 16 16">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0" d ="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>
            </a>
            <a href="https://discordapp.com/users/654333734580912148" className="hover:text-sky-500 hover:scale-110 transition-transform">
              <svg className="svg-icon w-8 h-8 hover:fill-current" fill="#9ca3af" viewBox="0 0 16 16">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0" d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
              </svg>         
            </a>
        </div>

          {/* Download CV button */}
          <button
          className="border-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white hover:scale-110 font-bold py-2 px-4 rounded mt-8 transition-all"
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
