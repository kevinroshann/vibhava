import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "./Button";

const navItems = ["/","Events", "Workshops"];

const NavBar = () => {
  // State for toggling audio and visual indicator
  // const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  // const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // // Refs for audio and navigation container
  // const audioElementRef = useRef(null);
  // const navContainerRef = useRef(null);

  // const { y: currentScrollY } = useWindowScroll();
  // const [isNavVisible, setIsNavVisible] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);


  // useEffect(() => {
  //   if (currentScrollY === 0) {
  //     // Topmost position: show navbar without floating-nav
  //     setIsNavVisible(true);
  //     navContainerRef.current.classList.remove("floating-nav");
  //   } else if (currentScrollY > lastScrollY) {
  //     // Scrolling down: hide navbar and apply floating-nav
  //     setIsNavVisible(false);
  //     navContainerRef.current.classList.add("floating-nav");
  //   } else if (currentScrollY < lastScrollY) {
  //     // Scrolling up: show navbar with floating-nav
  //     setIsNavVisible(true);
  //     navContainerRef.current.classList.add("floating-nav");
  //   }

  //   setLastScrollY(currentScrollY);
  // }, [currentScrollY, lastScrollY]);

  // useEffect(() => {
  //   gsap.to(navContainerRef.current, {
  //     y: isNavVisible ? 0 : -100,
  //     opacity: isNavVisible ? 1 : 0,
  //     duration: 0.2,
  //   });
  // }, [isNavVisible]);

  return (
    <div
      // ref={navContainerRef}
      className="absolute inset-x-0 top-4 z-50 h-16  border-2 border-black rounded-2xl transition-all duration-700 sm:inset-x-6"


    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
<div className="flex items-center gap-7">
<a href="/">
<Button
      id="product-button"
      title="VIBHAVA"
      containerClass="bg-blue-50 flex items-center justify-center gap-1"
    />
</a>

</div>


          {/* Navigation Links and Audio Button */}
          <div className="flex h-full items-center">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-black text-2xl"
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:block text-black">
  {navItems.map((item, index) => (
    <a
      key={index}
      href={item}
      className="nav-hover-btn !text-black"
    >
      {item}
    </a>
  ))}
</div>


          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white text-black flex flex-col items-center p-4 md:hidden">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item}
                className="py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>
    </div>
  );
};

export default NavBar;
