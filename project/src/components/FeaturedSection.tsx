"use client";
import React from "react";
import data from "../data/music_data.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";

export interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

function FeaturedSection() {
  const featuredCourses = data.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="bg-zinc-950 min-h-screen py-24 px-6">
      {/* Title Section */}
      <div className="text-center max-w-2xl mx-auto mb-20">
      <h2 className="text-center text-6xl font-bold text-white mb-10">
        Featured Courses
      </h2>
        <p className="text-lg sm:text-xl text-gray-400">
          Learn from world-class instructors and take your musical skills to new heights.
        </p>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto gap-y-10">
        {featuredCourses.map((course: Course) => (
          <Link
            key={course.id}
            href={`/courses/${course.slug}`}
            className="flex justify-center"
          >
            <BackgroundGradient
              animate
              className="rounded-2xl max-w-sm w-full p-6 bg-zinc-900 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="flex flex-col h-full">
                <h1 className="text-2xl font-extrabold text-white mb-5 underline decoration-cyan-300 underline-offset-4 ">
                  {course.title}
                </h1>
                <p className=" text-gray-300 mb-2 flex-grow line-clamp-3">
                  {course.description}
                </p>
                <p className="text-l text-gray-300 mb-2">
                  <strong className="text-white">Instructor:</strong> {course.instructor}
                </p>
                <p className="text-base text-cyan-400 font-semibold mb-4">
                  ₹{course.price}
                </p>
                <span className="inline-block bg-cyan-600 text-black text-sm font-semibold px-4 py-2 rounded-full self-start hover:bg-cyan-400 transition">
                  Learn More →
                </span>
              </div>
            </BackgroundGradient>
          </Link>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-20">
        <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">
          View All Courses
        </button>
      </div>
    </div>
  );
}

export default FeaturedSection;
