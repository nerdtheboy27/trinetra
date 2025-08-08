import React, { useState } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav
        className="w-[87.3vw] mt-[2.5vh] h-[8vh] mx-auto px-[1vw] flex flex-col justify-center"
      >
        {/* Desktop / Tablet Navbar */}
        <div className="hidden sm:flex justify-baseline gap-[50.5vh] items-center h-full px-[3vw] py-[1vh] rounded-full backdrop-blur-lg bg-white/10 border border-white/10 shadow-lg">
          
          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="Logo"
              className="h-[5vh]  w-auto"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex gap-[4vw] text-[1.5vw] font-crimson">
            <a href="#" className="text-greytext hover:text-white transition">Home</a>
            <a href="#" className="text-greytext hover:text-white transition">Work</a>
            <a href="#" className="text-greytext hover:text-white transition">Services</a>
            <a href="#" className="text-greytext hover:text-white transition">Contact</a>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="sm:hidden flex justify-between items-center h-full px-[4vw] py-[1vh] rounded-full backdrop-blur-lg bg-white/10 border border-white/10 shadow-lg">
          <img src={logo} alt="Logo" className="h-[5vh] w-auto" />
          <button onClick={() => setIsOpen(!isOpen)} className="text-greytext focus:outline-none">
            <svg className="w-[6vw] h-[6vw]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="sm:hidden backdrop-blur-lg bg-white/10 mt-[1vh] rounded-2xl border border-white/10 shadow-lg py-[2vh] px-[5vw]">
            <div className="flex flex-col items-center gap-[2vh] text-[4vw] font-crimson">
              <a href="#" onClick={() => setIsOpen(false)} className="text-greytext hover:text-white">Home</a>
              <a href="#" onClick={() => setIsOpen(false)} className="text-greytext hover:text-white">Work</a>
              <a href="#" onClick={() => setIsOpen(false)} className="text-greytext hover:text-white">Services</a>
              <a href="#" onClick={() => setIsOpen(false)} className="text-greytext hover:text-white">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
