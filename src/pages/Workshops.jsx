import { useState, useRef } from "react";
import { Link } from "react-router-dom";

export const Workshops = () => {
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
  // Array of card data
  const cards = [
    {
      title: "WorkShop and Sessions",
      description: "Description",
      link: "/Workshop",
    },
    {
      title: "Alumni Networking",
      description: "A new card added to the grid layout.",
      link: "/Events",
    },
    {
      title: "Panel Discussions",
      description: "A new card added to the grid layout.",
      link: "#",
    },
    {
      title: "Startup and Industry engagement",
      description: "Description",
      link: "#",
    },
    {
      title: "Project EXPO",
      description: "Description",
      link: "#",
    },
    {
      title: "Much more",
      description: "",
      link: "#",
    },
  ];

  return (
    <section className="bg-white pb-10 pt-32">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 pt-7 pb-7">
        <p className="font-circular-web font-bold text-7xl sm:text-8xl md:text-9xl lg:text-10xl xl:text-11xl text-black tracking-tight">Schedule</p>
      </div>
      <div className="grid h-auto w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
    {cards.map((card, index) => (
      <div key={index} className="card-container">
        <Link to={card.link}>
          <div className="card bg-[#46beb9] p-5 md:p-6 lg:p-8 min-h-[200px] sm:min-h-[250px]">
            <h1 className="card-title">{card.title}</h1>
            {card.description && (
              <p className="card-description">{card.description}</p>
            )}
          </div>
        </Link>
      </div>
    ))}
  </div>
  
    </div>
  </section>
  );
};

export default Workshops;
