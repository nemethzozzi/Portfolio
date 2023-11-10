import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-800 h-screen mt-10 p-4 text-white flex">
      <div className="w-3/4 mt-20 ml-4">
        <h1 className="text-4xl font-semibold">Hello,</h1>
        <h1 className="text-6xl font-bold mt-7">
          <span className="text-white">I am</span>{" "}
          <span className="text-sky-500">Zoltán Németh</span>
        </h1>
        <p className="text-2xl mt-8">Currently learning in SZTE university.</p>
        <p className="text-2xl">I learn software engineering.</p>
      </div>

      <div className="w-2/5 flex justify-start mt-20">
  <img
    src="/tabló.jpg"
    alt="Zoltán Németh"
    className="w-80 h-80 rounded-full object-cover animation-container"
  />
  <div className="animation-shape">
  </div>
</div>



    </div>
  );
};

export default About;
