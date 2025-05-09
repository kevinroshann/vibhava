import { useState } from "react";

import LoadingScreen from "../components/Loading";
import About from "../components/About";
import Hero from "../components/Hero";
import NavBar from "../components/Navbar";
import Features from "../components/Features";
// import Story from "../components/Story";
// import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { RevealBento } from "../components/con";
import ShiftingCountdown from "../components/Countdown";
import AboutSection from "../components/About2";
import Marquee from "../components/Marquee";
// import { AnimatedTestimonials } from "../components/ui/animated-testimonials";
import { AnimatedTestimonialsDemo } from "../components/Testimonial";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingScreen setLoading={setLoading} />
      ) : (
        <main className="relative min-h-screen w-screen overflow-x-hidden bg-white lg:pl-20 lg:pr-20 pb-16">
          <NavBar />
          <Hero />
          {/* <About /> */}

          <ShiftingCountdown />
          <AboutSection />

          <Features />
          <AnimatedTestimonialsDemo />
          <Marquee />
          <RevealBento />
          <Footer />
        </main>
      )}
    </>
  );
}

export default App;
