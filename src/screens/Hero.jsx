import React from "react";
import heroImage from "../assets/hero-bg3.png";
import heroline from "../assets/hero-line.png";
import Header from "../components/Header";
import insta from "../assets/instagram.png";
import fb from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import yt from "../assets/youtube.png";
import ellipse from "../assets/ellipse.png";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    designation: "Creative Director",
    image: "https://i.pinimg.com/1200x/87/67/62/8767623ced0908c3dc251f67ff80e81c.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Lead Designer",
    image: "https://i.pinimg.com/736x/b3/81/e2/b381e2d7d1ca3c1ca3d6aeaa9db56abd.jpg",

  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Lead Designer",
    image: "https://i.pinimg.com/736x/b3/81/e2/b381e2d7d1ca3c1ca3d6aeaa9db56abd.jpg",
    
  },
  {
    id: 4,
    name: "Jane Smith",
    designation: "Lead Designer",
    image: "https://i.pinimg.com/736x/b3/81/e2/b381e2d7d1ca3c1ca3d6aeaa9db56abd.jpg",
    
  },
  // Add more team members as needed
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-black bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Header */}
      <Header />

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        {/* Decorative Line Image */}
        <img
          src={heroline}
          alt="Line"
          className="w-[80vw] ml-[7.5vw] max-w-none object-contain scale-x-[1.5] absolute top-[25vh] pointer-events-none"
        />

        {/* Hero Text */}
        <div className="absolute left-[15vw] top-[20vh] w-[35vw] h-[40vh] font-crimson  [word-spacing:1rem] font-thin text-[5vw]  leading-[1.22]">
          WE DESIGN<br />FUTURE
        </div>
        <div className="absolute uppercase text-greytext left-[15vw] top-[48vh] w-[48vw] h-[10vh] font-crimson  font-medium text-[1.14vw] z-20 leading-[1]">
          <p className="tracking-[0.26vw] p-0 ">Building immersive realities </p><br/> frame by frame, beat by beat, line by line.<br/>
        </div>
        <div className="absolute  text-greytext left-[47vw] top-[77vh] w-[26vw] h-[10vh] font-crimson [word-spacing:0.1rem] font-regular text-[0.8vw] z-20 leading-[2]">
          A hybrid collective of filmmakers, animators, engineers, and futurists. We build brand universes, episodic sagas, and digital products that look, sound, and behave like they belong in future.
        </div>

        {/* Team Members Tooltip */}
       <div className="absolute left-[15vw] bottom-[9vh] z-50 flex items-center space-x-4">
  <div className="flex flex-row items-center justify-center mb-10 w-full">
    <AnimatedTooltip items={teamMembers} />
  </div>
</div>
 <div className="absolute left-[15vw] bottom-[15vh] text-[1vw] text-neutral-500 font-crimson font-regular z-49 flex items-center space-x-4">
  <div className="flex  flex-row items-center justify-center mb-[6vh] w-full">
    Trusted by clients
  </div>
</div>

        {/* Decorative Line Images */}
        <img
          src={ellipse}
          alt="Line"
          className="w-[30vw] h-[27vh]  absolute left-[34vh] top-[12vh] z-40 scale-50"
        />
        <img
          src={ellipse}
          alt="Line"
          className="w-[30vw] h-[27vh]  absolute left-[34vh] top-[12vh] z-40 scale-50"
        />
        <img
          src={ellipse}
          alt="Line"
          className="w-[30vw] h-[27vh]  absolute left-[34vh] top-[12vh] z-40 scale-50"
        />
        <img
          src={ellipse}
          alt="Line"
          className="w-[30vw] h-[27vh]  absolute left-[34vh] top-[12vh] z-40 scale-50"
        />
        <img
          src={ellipse}
          alt="Line"
          className="w-[30vw] h-[27vh]  absolute left-[34vh] top-[12vh] z-40 scale-50"
        />
        {/* ... other ellipse images ... */}

        {/* Social Icons */}
        <div className="flex absolute gap-[5vw] left-[13.5vw] bottom-[3.5vh] grayscale">
          <img src={insta} alt="Instagram" className="h-[3.6vh] w-auto" />
          <img src={fb} alt="Facebook" className="h-[3.6vh] w-auto" />
          <img src={twitter} alt="Twitter" className="h-[3.6vh] w-auto" />
          <img src={linkedin} alt="LinkedIn" className="h-[3.6vh] w-auto" />
          <img src={yt} alt="YouTube" className="h-[3.6vh] w-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;