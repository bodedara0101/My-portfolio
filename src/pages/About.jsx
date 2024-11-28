import React from 'react';
import { Helmet } from 'react-helmet-async';

function About() {
  return (
    <div className="p-6 h-[100%]">
      <Helmet>
        <title>About Me - Bharat Odedara</title>
        <meta name="description" content="Learn more about me, my skills, and my journey as a developer." />
      </Helmet>
      <h2 className="text-3xl font-bold mb-4 text-blue-600">About Me :</h2>
      <p className=' text-slate-200'>
        Hi! I'm a developer with a background in [your skills/technologies here].
        I love coding and am continuously learning to improve my skills.
      </p>
    </div>
  );
}

export default About;