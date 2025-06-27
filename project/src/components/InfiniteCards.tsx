"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { GridBackground } from "./ui/GridBackground";

export function InfiniteCards() {
  const testimonials = [
    {
      quote:
        "I had zero music background when I started, and now I can read sheet music and play confidently. These courses truly changed my life.",
      name: "Emily Zhang",
      title: "Piano Student, Beginner to Intermediate",
    },
    {
      quote:
        "From basic chords to composing my own songs—this platform gave me the confidence and tools to become a real musician.",
      name: "Derek Martinez",
      title: "Singer-Songwriter",
    },
    {
      quote:
        "The instructors break down even complex music theory into bite-sized, fun lessons. I’m finally mastering what used to feel impossible.",
      name: "Priya Nair",
      title: "Guitarist & Aspiring Producer",
    },
    {
      quote:
        "Perfect for busy professionals like me. I can learn at my own pace and revisit lessons whenever I want. Total game-changer.",
      name: "Tom Reynolds",
      title: "Adult Learner & Hobbyist",
    },
    {
      quote:
        "Their approach blends creativity with discipline. I’ve not only improved technically, but I’ve also discovered my own musical voice.",
      name: "Aisha K.",
      title: "Vocal Coach & Performer",
    },
  ];

  return (
    <div className="relative h-[45rem] w-full overflow-hidden rounded-md bg-black flex flex-col items-center justify-center px-6 sm:px-10 md:px-20 py-24 text-center">
      {/* Grid Background */}
      <GridBackground className="opacity-80" />

      {/* Section Title */}
      <div className="relative z-10 mb-12 max-w-3xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
          Hear From Our Students
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Real stories from real learners who transformed their musical journey with us. Be inspired by what’s possible when you unlock your creative potential.
        </p>
      </div>

      {/* Testimonials Carousel */}
      <div className="relative z-10 w-full max-w-7xl text-left">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
        />
      </div>
    </div>
  );
}
