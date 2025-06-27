"use client";

import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

function Contact() {
  return (
    <div className="relative bg-black min-h-screen text-white pb-20 pt-28 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      {/* Contact Card */}
      <div className="relative z-10 max-w-2xl w-full bg-[#0f0f0f] border border-white/10 rounded-xl p-8 shadow-lg mt-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent mb-6">
          Contact Us
        </h1>
        <p className="text-gray-400 text-center mb-8 text-sm sm:text-base">
          Have a question, feedback, or just want to say hello? Fill out the form below and we’ll get back to you soon.
        </p>

        {/* Form */}
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 bg-black border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-black border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-2 bg-black border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="What's on your mind?"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="inline-block px-6 py-2 bg-white text-black font-semibold rounded-md hover:bg-emerald-500 hover:text-white transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Background animation */}
      <BackgroundBeams />
    </div>
  );
}

export default Contact;
