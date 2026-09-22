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

    const ctx = canvas.getContext("2d", { alpha: true, desynchronized: true });
    if (!ctx) return;

    let width = Math.max(1, window.innerWidth);
    let height = Math.max(1, window.innerHeight);
    let animationFrameId = 0;
    let startTimeout = 0;
    let lastFrameTime = 0;
    let running = true;
    let baseGradient = null;
    let vignetteGradient = null;

    // 30 FPS keeps the visual fluid effect while substantially reducing
    // main-thread and GPU work compared with a continuous 60 FPS canvas.
    const targetFPS = width < 768 ? 24 : 30;
    const frameInterval = 1000 / targetFPS;

    let time = 0;
    let targetX = width * 0.5;
    let targetY = height * 0.35;

    const isMobile = width < 768;

    const layers = isMobile
      ? [
          {
            baseX: 0.5, baseY: 0.25,
            amplitudeX: 0.2, amplitudeY: 0.15,
            speed: 0.0008,
            color1: [243, 107, 63],
            color2: [255, 154, 120],
            color3: [255, 180, 140],
            opacity: 0.15
          },
          {
            baseX: 0.85, baseY: 0.3,
            amplitudeX: 0.15, amplitudeY: 0.2,
            speed: 0.001,
            color1: [220, 60, 25],
            color2: [243, 107, 63],
            color3: [200, 50, 20],
            opacity: 0.1
          }
        ]
      : [
          {
            baseX: 0.5, baseY: 0.25,
            amplitudeX: 0.3, amplitudeY: 0.2,
            speed: 0.0008,
            color1: [243, 107, 63],
            color2: [255, 154, 120],
            color3: [255, 180, 140],
            opacity: 0.18
          },
          {
            baseX: 0.2, baseY: 0.65,
            amplitudeX: 0.25, amplitudeY: 0.3,
            speed: 0.0006,
            color1: [255, 180, 140],
            color2: [255, 200, 160],
            color3: [255, 220, 180],
            opacity: 0.12
          },
          {
            baseX: 0.85, baseY: 0.3,
            amplitudeX: 0.2, amplitudeY: 0.25,
            speed: 0.001,
            color1: [220, 60, 25],
            color2: [243, 107, 63],
            color3: [200, 50, 20],
            opacity: 0.14
          }
        ];

    const followers = isMobile
      ? [{ x: targetX, y: targetY, vx: 0, vy: 0, stiffness: 0.01, damping: 0.8, radius: 0.3 }]
      : [
          { x: targetX, y: targetY, vx: 0, vy: 0, stiffness: 0.015, damping: 0.85, radius: 0.35 },
          { x: targetX, y: targetY, vx: 0, vy: 0, stiffness: 0.006, damping: 0.75, radius: 0.5 }
        ];

    const rebuildStaticGradients = () => {
      baseGradient = ctx.createRadialGradient(
        width * 0.5, height * 0.5, 0,
        width * 0.5, height * 0.5, Math.max(width, height) * 0.7
      );
      baseGradient.addColorStop(0, "#1A100C");
      baseGradient.addColorStop(0.4, "#0D0B0A");
      baseGradient.addColorStop(1, "#060504");

      vignetteGradient = ctx.createRadialGradient(
        width * 0.5, height * 0.5, 0,
        width * 0.5, height * 0.5, Math.max(width, height) * 0.7
      );
      vignetteGradient.addColorStop(0, "rgba(0, 0, 0, 0)");
      vignetteGradient.addColorStop(0.5, "rgba(13, 11, 10, 0.15)");
      vignetteGradient.addColorStop(1, "rgba(13, 11, 10, 0.5)");

      canvas.width = width;
      canvas.height = height;
    };

    const handlePointerMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const resize = () => {
      width = Math.max(1, window.innerWidth);
      height = Math.max(1, window.innerHeight);
      rebuildStaticGradients();
    };

    const handleVisibility = () => {
      running = document.visibilityState === "visible";
      if (running && !animationFrameId) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const drawBackground = () => {
      ctx.fillStyle = baseGradient;
      ctx.fillRect(0, 0, width, height);

      layers.forEach((layer, layerIndex) => {
        const follower = followers[Math.min(layerIndex, followers.length - 1)];
        const waveX = Math.sin(time * layer.speed * 100 + layerIndex) * layer.amplitudeX * width;
        const waveY = Math.cos(time * layer.speed * 80 + layerIndex * 2) * layer.amplitudeY * height;
        const fluidX = width * layer.baseX + waveX + (follower.x - width * 0.5) * 0.4;
        const fluidY = height * layer.baseY + waveY + (follower.y - height * 0.5) * 0.4;
        const radius = Math.max(width, height) * (0.45 + layerIndex * 0.08);

        const grad = ctx.createRadialGradient(fluidX, fluidY, 0, fluidX, fluidY, radius);
        grad.addColorStop(0, `rgba(${layer.color1[0]}, ${layer.color1[1]}, ${layer.color1[2]}, ${layer.opacity})`);
        grad.addColorStop(0.3, `rgba(${layer.color2[0]}, ${layer.color2[1]}, ${layer.color2[2]}, ${layer.opacity * 0.6})`);
        grad.addColorStop(0.6, `rgba(${layer.color3[0]}, ${layer.color3[1]}, ${layer.color3[2]}, ${layer.opacity * 0.3})`);
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      });

      followers.forEach((follower, i) => {
        const radius = Math.max(width, height) * follower.radius;
        const grad = ctx.createRadialGradient(follower.x, follower.y, 0, follower.x, follower.y, radius);
        const opacity = 0.06 - i * 0.015;
        grad.addColorStop(0, `rgba(243, 107, 63, ${opacity})`);
        grad.addColorStop(0.2, `rgba(255, 154, 120, ${opacity * 0.7})`);
        grad.addColorStop(0.5, `rgba(255, 180, 140, ${opacity * 0.4})`);
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      });

      ctx.fillStyle = vignetteGradient;
      ctx.fillRect(0, 0, width, height);
    };

    const animate = (timestamp) => {
      animationFrameId = 0;

      if (!running) return;

      if (timestamp - lastFrameTime < frameInterval) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      lastFrameTime = timestamp;
      time += frameInterval / 1000;

      followers.forEach((follower) => {
        const dx = targetX - follower.x;
        const dy = targetY - follower.y;
        follower.vx = (follower.vx + dx * follower.stiffness) * follower.damping;
        follower.vy = (follower.vy + dy * follower.stiffness) * follower.damping;
        follower.x += follower.vx;
        follower.y += follower.vy;
      });

      drawBackground();
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);

    rebuildStaticGradients();

    // Let the critical hero render and become interactive before starting
    // the expensive canvas animation.
    startTimeout = window.setTimeout(() => {
      if (document.visibilityState === "visible") {
        animationFrameId = requestAnimationFrame(animate);
      }
    }, 500);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.clearTimeout(startTimeout);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
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
