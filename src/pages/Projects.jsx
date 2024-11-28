import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className="p-6 h-[100%]">
      <Helmet>
        <title>Projects - Bharat Odedara</title>
        <meta name="description" content="Learn more about me, my skills, and my journey as a developer." />
      </Helmet>
      <h2 className="text-4xl font-bold mb-4  text-blue-600">Projects :</h2>
      <div className="p-5 bg-black rounded-lg space-y-4 h-96 overflow-hidden w-[50%] flex flex-col justify-center items-center mx-auto">
        <div className="p-4 bg-gray-200 rounded-lg w-full">
          <h3 className="text-xl font-bold">Project 1</h3>
          <p>Description of Project 1.</p>
        </div>
        <div className="p-4 bg-gray-200 rounded-lg w-full">
          <h3 className="text-xl font-bold">Project 2</h3>
          <p>Description of Project 2.</p>
        </div>
        <div className="p-4 bg-gray-200 rounded-lg w-full">
          <h3 className="text-xl font-bold">Project 2</h3>
          <p>Description of Project 2.</p>
        </div>
        <div className="p-4 bg-gray-200 rounded-lg w-full">
          <h3 className="text-xl font-bold">Project 2</h3>
          <p>Description of Project 2.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;