import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <HelmetProvider>
    <Router>
      <div className="h-screen bg-slate-900">
        <Navbar />
        <main className="w-full h-[92%] pt-16 bg-slate-900">
          <Analytics />
          <Routes>
            <Route path="*" element={<div className='p-6 flex flex-col mx-auto w-[50%] items-center'><h1 className='text-center'>404 Page Not Found!</h1></div>} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </HelmetProvider>
  );
}

export default App;