import { useEffect, useRef, useState } from "react";
import "./LiquidBackground.css";

function getMotionMode() {
  if (typeof window === "undefined") return "static";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;

  return reducedMotion || !finePointer ? "static" : "interactive";
}

export default function LiquidBackground() {
  const canvasRef = useRef(null);
  const backgroundRef = useRef(null);
  const [motionMode, setMotionMode] = useState(getMotionMode);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    const handleChange = () => setMotionMode(getMotionMode());

    reducedMotion.addEventListener?.("change", handleChange);
    finePointer.addEventListener?.("change", handleChange);

    return () => {
      reducedMotion.removeEventListener?.("change", handleChange);
      finePointer.removeEventListener?.("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (motionMode !== "interactive") return;

    const canvas = canvasRef.current;
    const background = backgroundRef.current;
    if (!canvas || !background) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrameId;
    let time = 0;

    // Cursor/touch position with smoothing
    let targetX = width * 0.5;
    let targetY = height * 0.35;
    let currentX = targetX;
    let currentY = targetY;

    // Multiple fluid layers
    const layers = [
      { 
        baseX: 0.5, baseY: 0.25, 
        amplitudeX: 0.3, amplitudeY: 0.2,
        speed: 0.0008,
        color1: [243, 107, 63],    // warm orange
        color2: [255, 154, 120],   // peach
        color3: [255, 180, 140],   // light peach
        opacity: 0.18
      },
      { 
        baseX: 0.2, baseY: 0.65, 
        amplitudeX: 0.25, amplitudeY: 0.3,
        speed: 0.0006,
        color1: [255, 180, 140],   // light peach
        color2: [255, 200, 160],   // cream
        color3: [255, 220, 180],   // warm cream
        opacity: 0.12
      },
      { 
        baseX: 0.85, baseY: 0.3, 
        amplitudeX: 0.2, amplitudeY: 0.25,
        speed: 0.001,
        color1: [220, 60, 25],     // deep red/orange
        color2: [243, 107, 63],    // warm orange
        color3: [200, 50, 20],     // dark red
        opacity: 0.14
      }
    ];

    // Mouse/touch followers with spring physics
    const followers = [
      { x: targetX, y: targetY, vx: 0, vy: 0, stiffness: 0.015, damping: 0.85, radius: 0.35 },
      { x: targetX, y: targetY, vx: 0, vy: 0, stiffness: 0.006, damping: 0.75, radius: 0.5 }
    ];

    const handlePointerMove = (event) => {
      if (event.clientX !== undefined && event.clientY !== undefined) {
        targetX = event.clientX;
        targetY = event.clientY;
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("resize", resize);
    resize();

    // Draw fluid gradient background
    const drawBackground = () => {
      // Base dark background
      const baseGrad = ctx.createRadialGradient(
        width * 0.5, height * 0.5, 0,
        width * 0.5, height * 0.5, Math.max(width, height) * 0.7
      );
      baseGrad.addColorStop(0, "#1A100C");    // dark brown
      baseGrad.addColorStop(0.4, "#0D0B0A");  // deep background
      baseGrad.addColorStop(1, "#060504");    // near black
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw fluid layers
      layers.forEach((layer, layerIndex) => {
        const follower = followers[Math.min(layerIndex, followers.length - 1)];
        
        // Calculate fluid position with wave motion
        const waveX = Math.sin(time * layer.speed * 100 + layerIndex) * layer.amplitudeX * width;
        const waveY = Math.cos(time * layer.speed * 80 + layerIndex * 2) * layer.amplitudeY * height;
        
        const fluidX = width * layer.baseX + waveX + (follower.x - width * 0.5) * 0.4;
        const fluidY = height * layer.baseY + waveY + (follower.y - height * 0.5) * 0.4;
        const radius = Math.max(width, height) * (0.45 + layerIndex * 0.08);

        const grad = ctx.createRadialGradient(
          fluidX, fluidY, 0,
          fluidX, fluidY, radius
        );
        
        grad.addColorStop(0, `rgba(${layer.color1[0]}, ${layer.color1[1]}, ${layer.color1[2]}, ${layer.opacity})`);
        grad.addColorStop(0.3, `rgba(${layer.color2[0]}, ${layer.color2[1]}, ${layer.color2[2]}, ${layer.opacity * 0.6})`);
        grad.addColorStop(0.6, `rgba(${layer.color3[0]}, ${layer.color3[1]}, ${layer.color3[2]}, ${layer.opacity * 0.3})`);
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      });

      // Draw cursor followers as soft glowing orbs
      followers.forEach((follower, i) => {
        const radius = Math.max(width, height) * follower.radius;
        const grad = ctx.createRadialGradient(
          follower.x, follower.y, 0,
          follower.x, follower.y, radius
        );
        
        const opacity = 0.06 - i * 0.015;
        grad.addColorStop(0, `rgba(243, 107, 63, ${opacity})`);
        grad.addColorStop(0.2, `rgba(255, 154, 120, ${opacity * 0.7})`);
        grad.addColorStop(0.5, `rgba(255, 180, 140, ${opacity * 0.4})`);
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      });

      // Vignette overlay
      const vignette = ctx.createRadialGradient(
        width * 0.5, height * 0.5, 0,
        width * 0.5, height * 0.5, Math.max(width, height) * 0.7
      );
      vignette.addColorStop(0, "rgba(0, 0, 0, 0)");
      vignette.addColorStop(0.5, "rgba(13, 11, 10, 0.15)");
      vignette.addColorStop(1, "rgba(13, 11, 10, 0.5)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);
    };

    const animate = () => {
      time += 0.016;

      // Spring physics for followers
      followers.forEach((follower) => {
        const dx = targetX - follower.x;
        const dy = targetY - follower.y;
        
        follower.vx += dx * follower.stiffness;
        follower.vy += dy * follower.stiffness;
        
        follower.vx *= follower.damping;
        follower.vy *= follower.damping;
        
        follower.x += follower.vx;
        follower.y += follower.vy;
      });

      // Smooth current position for CSS fallback
      currentX += (targetX - currentX) * 0.025;
      currentY += (targetY - currentY) * 0.025;

      background.style.setProperty("--cursor-x", `${currentX}px`);
      background.style.setProperty("--cursor-y", `${currentY}px`);

      ctx.clearRect(0, 0, width, height);
      drawBackground();

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", resize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [motionMode]);

  // Static fallback for reduced motion / coarse pointer
  useEffect(() => {
    if (motionMode !== "static") return;

    const background = backgroundRef.current;
    if (!background) return;

    // Set static positions for CSS gradients
    background.style.setProperty("--cursor-x", "50vw");
    background.style.setProperty("--cursor-y", "35vh");
  }, [motionMode]);

  return (
    <div
      ref={backgroundRef}
      className="liquid-background"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="liquid-canvas" />
      <div className="liquid-grain" />
      <div className="liquid-vignette" />
    </div>
  );
}