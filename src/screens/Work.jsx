import React from "react";
import Galaxy from "../components/Galaxy";
import Folder from "../components/Folder";

const Work = () => {
  return (
  <div className="relative h-[200vh] w-full bg-black text-white overflow-hidden">
  <Galaxy
    className="absolute top-0 left-0 w-full h-full z-0"
    mouseRepulsion={false}
    mouseInteraction={true}
    density={1}
    glowIntensity={0.2}
    saturation={1}
    hueShift={200}
    twinkleIntensity={0.05}
    rotationSpeed={0.05}
    starSpeed={0.3}
  />
  <div className="right-30 bottom-50 absolute">
  <Folder
    size={3.5}
    borderRadiusFactor={3}
    secondaryColor="#00D8FF"
    className="absolute right-10 top-10 z-20"
  />
  </div>
  <div className="bg-greytext h-[19.6vw] w-[37.5vw] absolute left-[15vw] top-[30vh] z-10 rounded-3xl ">
    Hello
  </div>
</div>


  );
};

export default Work;