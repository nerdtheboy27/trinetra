// src/components/Header.jsx
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-10 left-0 right-0 z-50">
      <nav className="container mx-auto 4k:px-100px px-60 py-3">
        {/* Desktop/Tablet View - now properly responsive */}
        <div className="hidden pl-30 sm:flex justify-baseline gap-[30%] items-center backdrop-blur-lg bg-white/10 px-8 py-2 rounded-full border border-white/10 shadow-lg ">
          {/* Logo with responsive spacing */}
          <div className="">
            <img 
              src="/path-to-your-logo.png"
              alt="Logo"
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation Links with responsive spacing */}
          <div className="flex 4k:gap-30  text-[27px] font-crimson items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-30">
            <a href="#" className="text-greytext hover:text-white transition duration-300">Home</a>
            <a href="#" className="text-greytext hover:text-white transition duration-300">Work</a>
            <a href="#" className="text-greytext hover:text-white transition duration-300">Services</a>
            <a href="#" className="text-greytext hover:text-white transition duration-300">Contact</a>
          </div>
        </div>

        {/* Mobile View - unchanged */}
        <div className="sm:hidden flex justify-between items-center backdrop-blur-lg bg-white/10 px-6 py-3 rounded-full border border-white/10 shadow-lg">
          <img 
            src="/path-to-your-logo.png"
            alt="Logo"
            className="h-8 w-auto"
          />

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-greytext focus:outline-none"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown - unchanged */}
        {isOpen && (
          <div className="sm:hidden backdrop-blur-lg bg-white/10 mt-4 rounded-2xl border border-white/10 shadow-lg py-4">
            <div className="flex flex-col items-center text-[27px] font-crimson gap-6">
              <a href="#" className="text-greytext hover:text-white transition duration-300" onClick={() => setIsOpen(false)}>Home</a>
              <a href="#" className="text-greytext hover:text-white transition duration-300" onClick={() => setIsOpen(false)}>Work</a>
              <a href="#" className="text-greytext hover:text-white transition duration-300" onClick={() => setIsOpen(false)}>Services</a>
              <a href="#" className="text-greytext hover:text-white transition duration-300" onClick={() => setIsOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;