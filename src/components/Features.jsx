import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { Link } from "react-router-dom";

export const Features = () => {
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
    <section className="bg-white pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-6xl text-black">Events</p>
          <p className="max-w-md font-circular-web text-lg text-black">
            Brief description of events happening
          </p>
        </div>

        <div className="grid h-auto w-full grid-cols-2 grid-rows-3 gap-7">
          {cards.map((card, index) => (
            <div key={index} className="card-container" onMouseMove={handleMouseMove}>
              <Link to={card.link}>
                <div className="card bg-[#46beb9] p-5">
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

export default Features;
