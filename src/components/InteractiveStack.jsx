import React, { useState, useRef } from "react";

export function InteractiveStack() {
  const [rotation, setRotation] = useState({ x: -15, y: 25 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    dragStartRef.current = { x: clientX, y: clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const deltaX = clientX - dragStartRef.current.x;
    const deltaY = clientY - dragStartRef.current.y;

    setRotation((prev) => ({
      x: Math.max(-60, Math.min(60, prev.x - deltaY * 0.5)),
      y: prev.y + deltaX * 0.5,
    }));

    dragStartRef.current = { x: clientX, y: clientY };
  };

  const handleMouseUp = () => setIsDragging(false);

  const blocks = [
    { title: "AI Voice Squads", color: "from-blue-600 to-indigo-600", desc: "Vapi & Twilio Architecture" },
    { title: "Full-Stack Web App", color: "from-indigo-600 to-purple-600", desc: "React, Vite, TypeScript" },
    { title: "Cloud Integration", color: "from-purple-600 to-pink-600", desc: "Supabase & Cal.com Workflows" },
  ];

  return (
    <div
      className="relative w-full h-[350px] sm:h-[450px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none perspective-1000 touch-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
    >
      {/* 3D Stack Container */}
      <div
        className={`relative w-56 h-64 sm:w-64 sm:h-72 transition-transform ${isDragging ? "duration-75" : "duration-500 ease-out"}`}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {blocks.map((block, index) => {
          const offsetZ = (blocks.length - 1 - index) * 50;
          const translateY = (index - 1) * -18;

          return (
            <div
              key={index}
              className={`absolute inset-0 rounded-2xl p-6 bg-gradient-to-br ${block.color} shadow-2xl border border-white/20 backdrop-blur-md flex flex-col justify-between transition-all duration-300`}
              style={{
                transform: `translateZ(${offsetZ}px) translateY(${translateY}px)`,
                boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
              }}
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-white/80">
                  Block 0{index + 1}
                </span>
                <div className="w-2.5 h-2.5 rounded-full bg-white/80 animate-ping" />
              </div>

              <div>
                <h4 className="text-lg font-bold text-white tracking-tight">{block.title}</h4>
                <p className="text-xs text-white/80 mt-1 font-medium">{block.desc}</p>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-white/60 font-mono">
                <span>AITHERSTACK ENGINE</span>
                <span>ACTIVE</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-2 text-xs text-slate-400 font-mono flex items-center gap-2 pointer-events-none">
        <span>👆 Drag to rotate 3D Stack</span>
      </div>
    </div>
  );
}