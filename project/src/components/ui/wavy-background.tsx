"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { createNoise3D } from "simplex-noise";
import { cn } from "@/lib/utils";

type WavyBackgroundProps = {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  paused?: boolean;
};

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth = 50,
  backgroundFill = "black",
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  paused = false,
}: WavyBackgroundProps) => {
  const noise = useRef(createNoise3D());
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const ntRef = useRef(0);
  const initializedRef = useRef(false);

  const [isSafari, setIsSafari] = useState(false);

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];

  const getSpeed = () => (speed === "fast" ? 0.002 : 0.001);

  const drawWave = useCallback(
    (n: number, w: number, h: number) => {
      const ctx = ctxRef.current;
      if (!ctx) return;

      ntRef.current += getSpeed();
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (let x = 0; x < w; x += 5) {
          const y = noise.current(x / 800, 0.3 * i, ntRef.current) * 100;
          ctx.lineTo(x, y + h * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }
    },
    [waveColors, waveWidth, speed]
  );

  const render = useCallback(() => {
    if (paused) return;

    const ctx = ctxRef.current;
    const canvas = canvasRef.current;
    if (!ctx || !canvas) return;

    const w = canvas.width;
    const h = canvas.height;

    ctx.fillStyle = backgroundFill;
    ctx.globalAlpha = waveOpacity;
    ctx.fillRect(0, 0, w, h);

    drawWave(5, w, h);

    animationIdRef.current = requestAnimationFrame(render);
  }, [drawWave, paused, backgroundFill, waveOpacity]);

  const setCanvasSize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ✅ Optimize for mobile
    const dpr = typeof window !== "undefined" && window.devicePixelRatio > 1 ? 1.5 : 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.scale(dpr, dpr);
    ctx.filter = `blur(${blur}px)`;

    ctxRef.current = ctx;
  }, [blur]);

  const init = useCallback(() => {
    if (typeof window === "undefined") return;

    if (!initializedRef.current) {
      setCanvasSize();
      initializedRef.current = true;
    }

    const resizeHandler = () => {
      cancelAnimationFrame(animationIdRef.current!);
      setCanvasSize();
      if (!paused) {
        render();
      }
    };

    window.addEventListener("resize", resizeHandler);
    render();

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [render, paused, setCanvasSize]);

  useEffect(() => {
    const isSafariBrowser =
      typeof navigator !== "undefined" &&
      navigator.userAgent.includes("Safari") &&
      !navigator.userAgent.includes("Chrome");

    setIsSafari(isSafariBrowser);
  }, []);

  useEffect(() => {
    const cleanupResize = init();
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (cleanupResize) cleanupResize();
    };
  }, [init]);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center overflow-hidden",
        containerClassName
      )}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={isSafari ? { filter: `blur(${blur}px)` } : {}}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
