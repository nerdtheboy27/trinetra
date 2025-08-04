import React from "react";
import Galaxy from "../components/Galaxy";
import Folder from "../components/Folder";

const Work = () => {
  return (
  <div className="relative h-[2000px] w-full bg-black text-white overflow-hidden">
  <Galaxy
    className="absolute top-0 left-0 w-full h-full z-0"
    mouseRepulsion={false}
    mouseInteraction={true}
    density={0.5}
    glowIntensity={0.2}
    saturation={1}
    hueShift={200}
    twinkleIntensity={0.1}
    rotationSpeed={0.05}
    starSpeed={0.4}
  />
  <div className="right-30 bottom-50 absolute">
  <Folder
    size={3.5}
    borderRadiusFactor={3}
    secondaryColor="#00D8FF"
    className="absolute right-10 top-10 z-20"
  />
  </div>
  <div className="bg-greytext h-[375px] w-[720px] absolute left-0 top-20 z-10 rounded-3xl m-60">
    Hello
  </div>
</div>


  );
};

export default Work;