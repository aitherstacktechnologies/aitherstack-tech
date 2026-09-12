import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function RouteProgressBar() {
  const location = useLocation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setProgress(30));
    const t2 = setTimeout(() => setProgress(80), 200);
    const t3 = setTimeout(() => setProgress(100), 400);
    const t4 = setTimeout(() => setProgress(0), 700);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [location.pathname]);

  if (progress === 0) return null;

  return (
    <div className="route-progress-bar">
      <div className="route-progress-bar__fill" style={{ width: `${progress}%` }} />
    </div>
  );
}