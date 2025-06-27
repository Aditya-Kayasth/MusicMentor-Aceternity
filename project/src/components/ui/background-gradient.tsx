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
    initial: { backgroundPosition: "0% 50%" },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    },
  };

  return (
    <motion.div
      whileHover={{ scale: 1.01, x: 4, y: -4 }}
      transition={{ type: "spring", stiffness: 80, damping: 12 }}
      className={cn(
        "relative group p-[3px] transition-transform focus-within:ring-2 ring-white/20 rounded-2xl",
        containerClassName
      )}
      role="region"
      aria-label="Background gradient card"
    >
      {/* Animated gradient background blur */}
      {animate && (
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
          style={{ backgroundSize: "400% 400%", willChange: "background-position" }}
          className={cn(
            "absolute inset-0 z-0 rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition",
            "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00fff7,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#00d4ff,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
          )}
        />
      )}

      {/* Static fallback gradient (always visible, adds richness) */}
      <div
        className={cn(
          "absolute inset-0 z-0 rounded-2xl",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00fff7,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#00d4ff,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
        )}
        style={{ opacity: 0.25 }}
        aria-hidden="true"
      />

      {/* Foreground content */}
      <div
        className={cn(
          "relative z-10 rounded-2xl bg-zinc-900/90 text-white shadow-xl p-6 transition-shadow duration-300 hover:shadow-2xl focus:outline-none",
          className
        )}
      >
        {children}
      </div>
    </motion.div>
  );
};
