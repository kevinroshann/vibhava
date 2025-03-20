import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

import { cn } from "../lib/utils";
import React from "react";

const Hero = () => {
 
  return (
    <div
    className="relative flex h-[50rem] w-full items-center justify-center bg-white overflow-x-hidden">
    <div
      className={cn(
        "absolute inset-0",
        "[background-size:40px_40px]",
        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]"
      )} />
    {/* Radial gradient for the container to give a faded look */}
    <div
      className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "></div>
<div className="flex flex-col items-center">
<p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-[5rem] font-bold text-black sm:text-[6rem] md:text-[7rem] lg:text-[6rem] xl:text-[10rem]">


   VIBHAVA 
  </p>
  {/* <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-5xl font-bold text-black sm:text-6xl md:text-8xl lg:text-9xl xl:text-10xl">
    2025
  </p> */}
</div>


  
  </div>
  );
};

export default Hero;

