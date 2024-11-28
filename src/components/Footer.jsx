import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-slate-600 text-center w-full p-4 h-[5%] sm:h-[8%] absolute bottom-0">
      <p className='text-xs sm:'>Copyright &copy; {new Date().getFullYear()} Bharat Odedara. All rights reserved.</p>
    </footer>
  );
}

export default Footer;