// src/screens/Hero.jsx
import React from "react";
import heroImage from "../assets/hero-bg3.png";
import heroline from "../assets/hero-line.png";
import Header from "../components/Header";
import insta from "../assets/instagram.png";
import fb from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import yt from "../assets/youtube.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-black bg-cover  bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
     
      {/* Header */}
      <Header />
      
      {/* Hero Content - add your content here */}
      <div className="relative z-10 h-full flex items-center justify-center">
        {/* Your hero content goes here */}
         <img 
              src= {heroline}
              alt="Logo"
              className="h-auto w-full max-w-screen 4k:max-w-[2000px] object-contain scale-x-150 absolute top-25 4k:top-80 pointer-events-none"
            /> 

        <div className="w-[35%] [word-spacing:2rem] tracking-wider font-crimson font-extralight text-[75px] absolute left-[12%] top-[20%] h-[40%]" >
        WE  DESIGN <br />FUTURE 
        </div>
        <div className=" flex absolute justify-between gap-30 left-25  4k:left-50  4k:gap-40 4k:bottom-10 grayscale bottom-8">
          <img 
              src= {insta}
              alt="Logo"
              className="h-8  4k:h-11 w-auto "
            /> 
            <img 
              src= {fb}
              alt="Logo"
              className="h-8 4k:h-11 w-auto"
            /> 
            <img 
              src= {twitter}
              alt="Logo"
              className="h-8 4k:h-11 w-auto"
            /> 
            <img 
              src= {linkedin}
              alt="Logo"
              className="h-8  4k:h-11 w-auto"
            /> 
            <img 
              src= {yt}
              alt="Logo"
              className="h-8  4k:h-11 w-auto"
            /> 
            
            </div>
      </div>
    </section>
  );
};

export default Hero;