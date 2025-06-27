import React from 'react';
import { WavyBackground } from './ui/wavy-background';
import { ToolKit } from './ToolKit';

function Instructors() {
  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center pt-24 pb-16 bg-black">
      <WavyBackground>
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white drop-shadow-md mb-6">
            Meet Our Instructors
          </h2>

          <p className="text-lg max-w-2xl text-gray-300 mx-auto mb-14">
            Our instructors are industry professionals with a passion for teaching.
            They bring a wealth of knowledge and experience to help you achieve your musical goals.
          </p>

          <div className="mt-10">
            <ToolKit />
          </div>
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructors;
