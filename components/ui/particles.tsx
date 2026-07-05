"use client";

import React, { useRef, useEffect } from "react";

interface ParticlesProps {
  quantity?: number;
  refresh?: boolean;
}

export function Particles({
  quantity = 40,
  refresh = false,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<any[]>([]);
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
    }
    initCanvas();
    animate();
    window.addEventListener("resize", initCanvas);

    return () => {
      window.removeEventListener("resize", initCanvas);
    };
  }, []);

  useEffect(() => {
    initCanvas();
  }, [refresh]);

  const initCanvas = () => {
    resizeCanvas();
    drawParticles();
  };

  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      circles.current = [];
      canvasSize.current.w = canvasContainerRef.current.offsetWidth;
      canvasSize.current.h = canvasContainerRef.current.offsetHeight;
      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      canvasRef.current.style.width = `${canvasSize.current.w}px`;
      canvasRef.current.style.height = `${canvasSize.current.h}px`;
      context.current.scale(dpr, dpr);
    }
  };

  const circleParams = (): any => {
    const x = Math.floor(Math.random() * canvasSize.current.w);
    const y = Math.floor(Math.random() * canvasSize.current.h);
    const size = Math.random() * 2 + 0.5;
    const alpha = 0;
    const targetAlpha = parseFloat((Math.random() * 0.4 + 0.1).toFixed(1));
    const dx = (Math.random() - 0.5) * 0.08;
    const dy = -Math.random() * 0.08 - 0.03; // Slowly drift upwards
    return {
      x,
      y,
      size,
      alpha,
      targetAlpha,
      dx,
      dy,
    };
  };

  const drawParticles = () => {
    for (let i = 0; i < quantity; i++) {
      circles.current.push(circleParams());
    }
  };

  const drawCircle = (circle: any, update = false) => {
    if (context.current) {
      const { x, y, size, alpha } = circle;
      context.current.beginPath();
      context.current.arc(x, y, size, 0, 2 * Math.PI);
      context.current.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      context.current.fill();

      if (!update) return;

      // Update alpha (fade in)
      if (circle.alpha < circle.targetAlpha) {
        circle.alpha += 0.01;
      }

      // Update positions
      circle.x += circle.dx;
      circle.y += circle.dy;

      // Wrap around bounds
      if (
        circle.x < -circle.size ||
        circle.x > canvasSize.current.w + circle.size ||
        circle.y < -circle.size ||
        circle.y > canvasSize.current.h + circle.size
      ) {
        const recycled = circleParams();
        // Reposition at bottom
        recycled.y = canvasSize.current.h + recycled.size;
        recycled.x = Math.floor(Math.random() * canvasSize.current.w);
        Object.assign(circle, recycled);
      }
    }
  };

  const animate = () => {
    if (context.current) {
      context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
      circles.current.forEach((circle: any) => {
        drawCircle(circle, true);
      });
    }
    requestAnimationFrame(animate);
  };

  return (
    <div ref={canvasContainerRef} className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
