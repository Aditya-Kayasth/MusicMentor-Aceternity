import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-zinc-800 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">About</h3>
          <p>
            We provide the best online music education through engaging
            instructors and interactive learning.
          </p>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Courses</a></li>
            <li><a href="#" className="hover:text-white transition">Instructors</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-white">Twitter</a></li>
            <li><a href="#" className="hover:text-white">Instagram</a></li>
            <li><a href="#" className="hover:text-white">YouTube</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-800 py-6 text-center text-xs text-zinc-500">
        &copy; {new Date().getFullYear()} YourMusicSchool. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
