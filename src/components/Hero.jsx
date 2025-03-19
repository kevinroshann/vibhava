import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const parallaxTextRef = useRef(null);

  useGSAP(() => {
    gsap.to("#parallax-image", {
      y: "30%",
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(parallaxTextRef.current, {
      y: "-20%",
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div ref={heroRef} className="relative h-dvh w-screen overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img
          id="parallax-image"
          src="videos/hero-1.jpg"
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
        {/* Black Gradient Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      <div
        ref={parallaxTextRef}
        className="absolute inset-0 flex flex-col justify-center items-center text-center text-white"
      >
        <h1 className="special-font hero-heading text-blue-100">
          VI<b>BHA</b>VA
        </h1>
        <h1 className="special-font hero-heading text-blue-100">2<b>02</b>5</h1>
        
        {/* Terminal-like Typewriter Effect */}
        <div className="mt-4 p-4 bg-black text-green-400 font-mono text-lg rounded-lg w-auto max-w-md text-left">
          <Typewriter
            words={[
              "$ March 25",
              "$ Cusat largest Innovation summit",
              "$ Vibhava is Back"
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
