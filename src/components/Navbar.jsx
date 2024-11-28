import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css'

function Navbar() {

  return (
    <nav className="px-4 text-white fixed w-full top-0 z-10 h-16 backdrop-blur-lg backdrop-opacity-35 bg-blue-600 bg-opacity-75 flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">Bharat Odedara</Link>
        </h1>
        <div className="space-x-4">
          <NavLink to="/" className='px-3'>Home</NavLink>
          <NavLink to="/about" className='px-3'>About</NavLink>
          <NavLink to="/projects" className='px-3'>Projects</NavLink>
          <NavLink to="/contact" className='px-3'>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;