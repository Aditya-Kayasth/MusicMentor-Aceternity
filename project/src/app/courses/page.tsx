"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import data from "@/data/music_data.json";
import { Course } from "@/components/FeaturedSection";
import Image from "next/image";

function Courses() {
  return (
    <div className="bg-black min-h-screen text-white pb-20 pt-28 px-4">
      {/* Title */}
      <div className="text-center mb-4">
        <h1 className="text-[clamp(2.5rem,10vw,6rem)] font-extrabold leading-tight tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent mt-10">
          All Courses <span className="text-gray-400">({data.courses.length})</span>
        </h1>
        <p className="text-gray-300 mt-4 max-w-3xl mx-auto text-lg">
          Explore our wide range of courses designed to help you master your craft.
        </p>
      </div>

      {/* Course Cards */}
      <div className="flex flex-wrap justify-center gap-6 ">
        {data.courses.map((item: Course, index: number) => (
          <CardContainer key={index} className="inter-var -mb-36">
            <CardBody className="bg-black border border-white/10 hover:shadow-2xl hover:shadow-emerald-500/10 rounded-xl p-6 w-auto sm:w-[22rem]">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white mb-2"
              >
                {item.title || "Course Title"}
              </CardItem>

              <CardItem
                as="p"
                translateZ="60"
                className="text-gray-400 text-sm max-w-sm mb-4"
              >
                {item.description ||
                  "This is a brief description of the course. It provides an overview of what the course covers and what students can expect to learn."}
              </CardItem>

              <CardItem translateZ="100" className="w-full mb-6">
                <Image
                  src={item.image || "https://via.placeholder.com/1000"}
                  height="1000"
                  width="1000"
                  className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={item.title || "Course Image"}
                />
              </CardItem>

              <div className="flex justify-between items-center mt-6">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://twitter.com/mannupaaji"
                  target="_blank"
                  className="text-white text-sm hover:underline"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default Courses;
