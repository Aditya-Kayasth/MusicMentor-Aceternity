import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: { backgroundPosition: "0 50%" },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    },
  };

  return (
    <motion.div
      whileHover={{ scale: 1.015, x: 4, y: -4 }} // ↗ hover motion
      transition={{ type: "spring", stiffness: 100, damping: 10 }} // subtle & natural
      className={cn("relative p-[3px] group transition-transform", containerClassName)}
    >
      {/* Animated background blur */}
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? { duration: 6, repeat: Infinity, repeatType: "reverse" }
            : undefined
        }
        style={{ backgroundSize: "400% 400%" }}
        className={cn(
          "absolute inset-0 rounded-2xl z-0 blur-md opacity-50 group-hover:opacity-70 transition",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00fff7,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#00d4ff,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
        )}
      />

      {/* Faint static overlay for richer tone */}
      <div
        className={cn(
          "absolute inset-0 rounded-2xl z-0",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00fff7,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#00d4ff,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
        )}
        style={{ opacity: 0.3 }}
      />

      {/* Card content */}
      <div
        className={cn(
          "relative z-10 rounded-2xl bg-zinc-900/95 text-white shadow-xl p-6 transition-all duration-300 hover:shadow-2xl",
          className
        )}
      >
        {children}
      </div>
    </motion.div>
  );
};
