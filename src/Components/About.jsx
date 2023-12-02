import React from 'react';

const About = () => {
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
      <div className="h-screen mt-10 p-4 text-white flex flex-col md:flex-row">
        <div className="w-full md:w-3/4 mt-20 md:ml-4 md:pr-4 order-2 md:order-1">
          <h1 className="text-4xl font-semibold">Hello,</h1>
          <h1 className="text-6xl font-bold mt-7">
            <span className="text-white">I am</span>{" "}
            <span className="text-sky-500">Zoltán Németh</span>
          </h1>
          <p className="text-2xl mt-8">Currently learning in SZTE university.</p>
          <p className="text-2xl">I learn software engineering.</p>

          {/* Download CV button */}
          <button
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded mt-8"
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
              width: '60%',
              maxWidth: '500px',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
