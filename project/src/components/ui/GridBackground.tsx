// components/ui/GridBackground.tsx
import React from "react";
import { cn } from "@/lib/utils";

export const GridBackground = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 pointer-events-none z-0 select-none [background-size:40px_40px]",
        "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
        "opacity-80",
        className
      )}
    />
  );
};
