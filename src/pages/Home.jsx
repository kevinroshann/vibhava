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

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingScreen setLoading={setLoading} />
      ) : (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
          <NavBar />
          <Hero />
          <About />
          <Features />
          <RevealBento />
          <Footer />
        </main>
      )}
    </>
  );
}

export default App;
