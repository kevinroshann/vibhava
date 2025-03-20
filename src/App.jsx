import { useState } from "react";
// import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LoadingScreen from "./components/Loading";
import Workshops from "./pages/Workshops"
// import About from "./components/About";
// import Hero from "./components/Hero";
import Home from "./pages/Home"
import Events from "./pages/Events"
import NavBar from "./components/Navbar";
// import Features from "./components/Features";
// import Story from "./components/Story";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import { RevealBento } from "./components/con";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingScreen setLoading={setLoading} />
      ) : (
        <main className="relative min-h-screen w-screen ">
          <NavBar />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events" element={<Events/>} />
          <Route path="/Workshops" element={<Workshops/>} />
          {/* <About />
          <Features />
          <RevealBento />
          <Footer /> */}
          </Routes>
        </main>
      )}
    </>
  );
}

export default App;
