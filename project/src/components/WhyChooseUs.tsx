"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Real-Time Collaboration",
    description:
      "Work in perfect sync with your team, clients, or stakeholders. Our platform allows real-time editing and instant feedback, making collaboration seamless, efficient, and productive—no matter where you are.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white text-xl font-bold">
        Real-Time Collaboration
      </div>
    ),
  },
  {
    title: "Instant Updates",
    description:
      "No more refreshing pages or resending files. Every change you make is automatically reflected across the team. Stay confident knowing you're always working with the latest version.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white text-xl font-bold">
        Instant Updates
      </div>
    ),
  },
  {
    title: "Smart Version Control",
    description:
      "Never lose track of your progress. Our built-in version history lets you revert, compare, and recover past edits. Maintain project clarity and protect your work at every stage.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white text-xl font-bold">
        Smart Versioning
      </div>
    ),
  },
  {
    title: "Effortless Content Creation",
    description:
      "From idea to execution, our platform supports your creative flow. Generate, organize, and optimize content faster with built-in tools designed to eliminate roadblocks and boost output.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--indigo-500))] text-white text-xl font-bold">
        Built for Creators
      </div>
    ),
  },
];

export function WhyChooseUs() {
  return (
    <div className="w-full py-16 bg-black">
      <h2 className="text-center text-6xl font-bold text-white mb-10">
        Why Choose Us
      </h2>
      <StickyScroll content={content} />
    </div>
  );
}
