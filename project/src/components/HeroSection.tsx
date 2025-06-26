import { GridBackground } from "./ui/GridBackground";
import { Spotlight } from "./ui/Spotlight";
import React from "react";
import { Button } from "./ui/moving-border";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <GridBackground />
        <Spotlight className="left-4 md:-top-40 md:left-80" fill="cyan" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full text-center px-4 mt-10 mb-6">
        <h1 className="text-[clamp(2.5rem,10vw,6rem)] font-extrabold leading-tight tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
          Master the art of music
        </h1>
      </div>

      <div className="relative z-10 max-w-2xl text-center mt-2 mb-10 px-4">
        <p className="text-base sm:text-lg md:text-xl text-gray-300">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you're a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>
      </div>

      <div className="relative z-10 mt-6">
        <Button
          borderRadius="1.75rem"
          className="bg-black text-white font-bold text-xl border-white/10 px-6 py-3"
          borderClassName="bg-[radial-gradient(cyan_50%,transparent_70%)] opacity-90 blur-md"
        >
          Explore courses
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
