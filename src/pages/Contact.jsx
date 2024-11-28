import React from 'react';
import { Helmet } from 'react-helmet-async';

function Contact() {
  return (
    <div className="p-6 h-[100%]">
      <Helmet>
        <title>Contect - Bharat Odedara</title>
        <meta name="description" content="Learn more about me, my skills, and my journey as a developer." />
      </Helmet>
      <h2 className="text-3xl font-bold mb-4 text-blue-600">Contact Me :</h2>
      <p className='text-slate-200'>Feel free to reach out through any of my social media or email me at bharatodedara930@gmail.com.</p>
    </div>
  );
}

export default Contact;