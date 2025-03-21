import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function Projects() {

  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description for Project 1',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description for Project 2',
      image: 'https://via.placeholder.com/150',
    }
  ];

  return (
    <div className="p-6 h-[100%]">
      <Helmet>
        <title>Projects - Bharat Odedara</title>
        <meta name="description" content="Learn more about me, my skills, and my journey as a developer." />
      </Helmet>
      <h2 className="text-4xl font-bold mb-4  text-blue-600">My work :</h2>
      <div className="p-5 bg-black rounded-lg space-y-4 h-96 overflow-hidden w-[50%] flex flex-col justify-center items-center mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="flex items-center space-x-4 bg-white p-5">
            <img src={project.image} alt={project.title} className="w-16 h-16 rounded-full" />
            <div className='flex flex-col'>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;