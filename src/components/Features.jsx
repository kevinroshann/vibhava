import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { Link } from "react-router-dom";
export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-6xl text-blue-50">
          Events
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          brief description of events happeining
        </p>
      </div>

      <div className="grid h-auto w-full grid-cols-2 grid-rows-3 gap-7">
      <BentoTilt className="bento-tilt_1 md:col-span-1 md:row-span-1">
        <Link to="/Workshop">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <BentoCard
              // src="videos/feature-6.mp4"
              title={<> WorkShop and Sessions</>}
              description="Description"
            /></div></Link>
        </BentoTilt>
        {/* Card 1 - EVENTS */}
        <BentoTilt className="bento-tilt_1 md:col-span-1 md:row-span-1">
        <Link to="/Events">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <BentoCard
              // src="videos/feature-6.mp4"
              title={<> Alumini Networking</>}
              description="A new card added to the grid layout."
            /></div></Link>
        </BentoTilt>

        {/* Card 2 - SCHEDULE */}
        <BentoTilt className="bento-tilt_1 md:col-span-1 md:row-span-1">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <BentoCard
              // src="videos/feature-6.mp4"
              title={<> Panel Discussions</>}
              description="A new card added to the grid layout."
            /></div>
        </BentoTilt>

        {/* Card 3 - AZUL */}
        <BentoTilt className="bento-tilt_1 md:col-span-1 md:row-span-1">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <BentoCard
              // src="videos/feature-6.mp4"
              title={<> Startup and Industry engagement</>}
              description="Description"
            /></div>
        </BentoTilt>

        {/* Card 4 - ANOTHER CARD (Example) */}
        <BentoTilt className="bento-tilt_1 md:col-span-1 md:row-span-1">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <BentoCard
              // src="videos/feature-6.mp4"
              title={<> Project EXPO</>}
              description="Description"
            /></div>
        </BentoTilt>

        {/* Card 5 - ANOTHER CARD (Example) */}
       

        
        <BentoTilt className="bento-tilt_1 md:col-span-1 md:row-span-1">
          <div className="flex size-full flex-col justify-between bg-violet-300  p-5">
            <BentoCard
              // src="videos/feature-6.mp4"
              title={<>Much more</>}
              // description="A new card added to the grid layout."
            /></div>
        </BentoTilt>

      </div>

    </div>
  </section>
);

export default Features;
