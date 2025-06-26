import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";

export function SpotlightPreview() {
  return (
    <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
      
      {/* Grid Background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 select-none [background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      {/* Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      {/* Optional: Add content inside spotlight here */}
      <div className="relative z-10 text-white text-center">
        <h1 className="text-4xl font-bold">Spotlight Preview</h1>
        <p className="mt-2 text-lg text-gray-300">Add your content here</p>
      </div>
      
    </div>
  );
}
