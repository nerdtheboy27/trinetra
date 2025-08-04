import React from "react";
import Galaxy from "../components/Galaxy";
import Folder from "../components/Folder";
import logo from "../assets/react.svg"
const WorkFolder = () => {
  return (

      
      <div className="h-screen bg-black  text-white flex items-center justify-center">

  <Galaxy 
    mouseRepulsion={false}
    mouseInteraction={true}
    density={0.5}
    glowIntensity={0.2}
    saturation={1}
    hueShift={200}
    twinkleIntensity={0.1}
    rotationSpeed={0.05}
    starSpeed = {0.4}
  
  />
  <div className="bg-greytext h-[375px] w-[720px] absolute  left-0 rounded-3xl  m-60">
        <Folder
        size={3.5}
        color="#000000"
        borderRadiusFactor={3}
        secondaryColor="#00D8FF" 
        className=" ml-70 mt-20"
         items={[<div  className=" text-black "> <img 
                       src= {logo}
                       alt="Logo"
                       className="h-full  4k:h-11 w-full "
                     /> </div>, <div>Doc 2</div>]} 
        />
      </div>
      
</div>

  );
};

export default WorkFolder;



// Basic usage
