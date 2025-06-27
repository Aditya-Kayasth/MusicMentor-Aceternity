"use client";

import React, { useMemo, useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  const cardsBreakpoints = useMemo(() => {
    if (cardLength <= 1) return [0];
    return content.map((_, index) => index / (cardLength - 1));
  }, [content, cardLength]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const closestIndex = cardsBreakpoints.reduce((acc, point, index) => {
      return Math.abs(latest - point) < Math.abs(latest - cardsBreakpoints[acc])
        ? index
        : acc;
    }, 0);

    if (closestIndex !== activeCard) {
      setActiveCard(closestIndex);
    }
  });

  const backgroundColors = ["#0f172a", "#000000", "#171717"];
  const gradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
  ];

  const backgroundGradient = gradients[activeCard % gradients.length];
  const backgroundColor = backgroundColors[activeCard % backgroundColors.length];

  return (
    <motion.div
      animate={{ backgroundColor }}
      className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10"
      ref={ref}
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
                className="mt-6 max-w-sm text-base text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-60 w-80 items-center justify-center rounded-xl bg-white/10 p-6 text-center text-2xl font-bold text-white shadow-xl backdrop-blur-md lg:flex",
          contentClassName
        )}
        aria-live="polite"
      >
        {content[activeCard]?.content ?? "Loading..."}
      </div>
    </motion.div>
  );
};
