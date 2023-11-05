import React from 'react';

const Projects = () => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">My Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Clothe Webshop</h2>
            <p className="text-gray-600">
              text here
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Voting Website</h2>
            <p className="text-gray-600">
              text here
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Project 3</h2>
            <p className="text-gray-600">
              text here
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Project 3</h2>
            <p className="text-gray-600">
              text here
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Project 3</h2>
            <p className="text-gray-600">
              text here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
