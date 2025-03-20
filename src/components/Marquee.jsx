import React from "react";


const Marquee = () => {
  const items = [
    { src: "/logo/1.png", alt: "React" },
    { src: "/logo/2.png", alt: "React" },
    { src: "/logo/3.png", alt: "React" },
    { src: "/logo/4.png", alt: "React" },
    { src: "/logo/5.png", alt: "React" },
    { src: "/logo/6.png", alt: "React" },
    { src: "/logo/7.png", alt: "React" },
    { src: "/logo/8.png", alt: "React" },
    { src: "/logo/9.png", alt: "React" },
    { src: "/logo/10.png", alt: "React" },
    { src: "/logo/11.png", alt: "React" },
    { src: "/logo/12.png", alt: "React" },
    { src: "/logo/13.png", alt: "React" },
    { src: "/logo/14.png", alt: "React" },
   
    
  ];

  return (
    <div className="marquee fadeout-horizontal bg-white" style={{ "--num-items": items.length }}>
      <div className="marquee-track">
        {items.map((item, index) => (
          <div key={index} className="marquee-item" style={{ "--item-position": index + 1 }}>
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;