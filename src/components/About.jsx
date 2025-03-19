import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  const [key, setKey] = useState(0);

  // Re-renders the component every 10 seconds to restart Typewriter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1);
    }, 30000); // Restart every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-screen bg-white flex flex-col justify-center items-center text-green-400 font-mono text-lg p-6">
      <div className="w-full max-w-4xl bg-gray-900 p-4 rounded-lg border border-green-500 shadow-lg">
        
        {/* Tmux Header */}
        <div className="bg-green-800 text-black px-3 py-1 rounded-t-lg text-sm flex justify-between">
          <span>tmux: Terminal Multiplexer</span>
          <span>user@terminal</span>
        </div>

        {/* Terminal Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">

          {/* Left Panel - About Me */}
          <div className="border border-green-500 p-3">
            <p className="text-green-300">user@terminal:~$ cat vibhava.txt</p>
            <Typewriter
              key={key}
              words={["vibhava innovation Summit 2025 is a premier technical conclave desined to showcase the ingenuity,technical prowess and innovative spirit of SOE students CUSAT ",
                
              ]}
              loop={1}  
              cursor
              cursorStyle="_"
              typeSpeed={50}
              delaySpeed={500}
            />
          </div>

          {/* Right Panel */}
          <div className="flex flex-col gap-2">

            {/* About Country */}
            <div className="border border-green-500 p-3">
              <p className="text-green-300">user@terminal:~$ cat CUSAT.txt</p>
              <Typewriter
                key={key + 1}
                words={[" some sample data some sample data some sample data some sample data some sample data"]}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                delaySpeed={500}
              />
            </div>

            {/* About City */}
            <div className="border border-green-500 p-3">
              <p className="text-green-300">user@terminal:~$ cat WHATWEHAVE.txt</p>
              <Typewriter
                key={key + 2}
                words={["some sample data some sample data some sample data some sample data some sample data some sample data "]}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                delaySpeed={500}
              />
            </div>

          </div>
        </div>
      </div>

      {/* Terminal-Like Effect Section */}
      <div className="w-full max-w-4xl bg-gray-900 mt-6 p-4 rounded-lg border border-green-500 shadow-lg text-center">
        <div className="bg-green-800 text-black px-3 py-1 rounded-t-lg text-sm text-left">
          <span>user@terminal</span>
        </div>
        <div className="p-6 text-green-400 text-2xl md:text-4xl font-bold flex justify-center gap-8 md:gap-16">
          {/* First Column */}
          <div className="flex flex-col items-center">
            <div className="min-h-[40px]">
              <Typewriter
                key={key + 3}
                words={["50+"]}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                delaySpeed={500}
              />
            </div>
            <span className="text-xl md:text-3xl">Events</span>
          </div>

          {/* Second Column */}
          <div className="flex flex-col items-center">
            <div className="min-h-[40px]">
              <Typewriter
                key={key + 4}
                words={["20+"]}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                delaySpeed={500}
              />
            </div>
            <span className="text-xl md:text-3xl">Workshops</span>
          </div>

          {/* Third Column */}
          <div className="flex flex-col items-center">
            <div className="min-h-[40px]">
              <Typewriter
                key={key + 5}
                words={["100+"]}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                delaySpeed={500}
              />
            </div>
            <span className="text-xl md:text-3xl">Members</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
