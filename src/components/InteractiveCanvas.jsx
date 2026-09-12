import React, { useEffect, useRef } from 'react';

export default function InteractiveCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let canvasRect = canvas.getBoundingClientRect();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      canvasRect = canvas.getBoundingClientRect();
    };

    window.addEventListener('resize', handleResize);

    // Grid Dot Matrix Parameters
    const spacing = 40;
    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX - canvasRect.left;
      mouse.y = e.clientY - canvasRect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let x = 20; x < width; x += spacing) {
        for (let y = 20; y < height; y += spacing) {
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Subtle interactive displacement
          let radius = 1.5;
          let alpha = 0.25;

          if (dist < 120) {
            radius = 1.5 + (1 - dist / 120) * 3;
            alpha = 0.25 + (1 - dist / 120) * 0.5;
          }

          ctx.fillStyle = `#DAD8D0`; // Warm Stone
          ctx.globalAlpha = alpha;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
}