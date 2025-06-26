"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import { GridBackground } from "./ui/GridBackground";

function HowerCards() {
  const projects = [
    {
      title: "Live Piano Masterclass",
      description:
        "Join our expert instructors for a real-time piano session covering finger techniques, dynamics, and expression. Perfect for all skill levels.",
      link: "https://yourmusicplatform.com/webinars/piano-masterclass",
    },
    {
      title: "Music Theory Fundamentals",
      description:
        "A comprehensive webinar on the foundations of music theory—scales, chords, intervals, and how they shape modern music.",
      link: "https://yourmusicplatform.com/webinars/music-theory-basics",
    },
    {
      title: "Songwriting for Beginners",
      description:
        "Learn how to turn your ideas into fully-formed songs with guidance from professional songwriters in this interactive session.",
      link: "https://yourmusicplatform.com/webinars/songwriting-101",
    },
    {
      title: "Vocal Training Workshop",
      description:
        "Explore breath control, vocal warm-ups, and pitch training in this engaging webinar led by seasoned vocal coaches.",
      link: "https://yourmusicplatform.com/webinars/vocal-training",
    },
    {
      title: "Home Studio Setup & Recording",
      description:
        "Understand how to create high-quality recordings from your home. Covers gear, DAWs, and tips for clean audio.",
      link: "https://yourmusicplatform.com/webinars/home-recording",
    },
    {
      title: "Composing with MIDI & DAWs",
      description:
        "Dive into digital composition with MIDI tools and software like Ableton Live, FL Studio, and Logic Pro X.",
      link: "https://yourmusicplatform.com/webinars/midi-composing",
    },
  ];

  return (
    <div className="relative w-full py-20 px-4 bg-black overflow-hidden">
      {/* Background grid */}
      <GridBackground className="absolute inset-0 opacity-80 z-0" />

      {/* Foreground content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Explore Webinars
        </h2>
        {/* Subtitle */}
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Learn from real world experiences and know the people who transformed
          their musical journey with us.
        </p>

        {/* Cards */}
        <HoverEffect items={projects} />
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-20">
        <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition z-10">
          More Webinars
        </button>
      </div>
    </div>
  );
}

export default HowerCards;
