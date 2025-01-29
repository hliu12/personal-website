import React, { useState, useEffect } from "react";

const phrases = ["music lover", "hot sauce hater", "chill guy"];

const Home = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [direction, setDirection] = useState("down");

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection((prev) => (prev === "down" ? "up" : "down"));
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-5xl">
        <h1 className="flex flex-col gap-4">
          <div>Hi, I'm Henry,</div>
          <div className="flex items-center gap-3">
            I'm a{" "}
            <span
              className="relative inline-block h-[1.1em] overflow-hidden"
              style={{ minWidth: "500px" }}
            >
              <span
                key={currentPhrase + direction}
                className={`absolute left-0 text-blue-600 whitespace-nowrap transition-transform duration-500 ease-in-out ${
                  direction === "down"
                    ? "animate-slot-machine-down"
                    : "animate-slot-machine-up"
                }`}
              >
                {phrases[currentPhrase]}
              </span>
            </span>
          </div>
          <div>
            who is passionate about building cool things and is a frontend
            engineer at <span className="text-orange-500">Veeva Systems</span>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Home;
