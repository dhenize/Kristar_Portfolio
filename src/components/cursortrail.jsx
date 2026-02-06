import { useEffect, useState } from 'react';
import './cursortrail.css';

const CursorTrail = () => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    let sparkleId = 0;

    const handleMouseMove = (e) => {
      const newSparkle = {
        id: sparkleId++,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 8 + 4, // Random size between 4-12px
        duration: Math.random() * 800 + 600, // Random duration 600-1400ms
      };

      setSparkles((prev) => [...prev, newSparkle]);

      // Remove sparkle after animation completes
      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
      }, newSparkle.duration);
    };

    // Throttle mousemove for performance
    let throttleTimeout;
    const throttledMouseMove = (e) => {
      if (!throttleTimeout) {
        throttleTimeout = setTimeout(() => {
          handleMouseMove(e);
          throttleTimeout = null;
        }, 30); // Create sparkle every 30ms
      }
    };

    window.addEventListener('mousemove', throttledMouseMove);

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      if (throttleTimeout) clearTimeout(throttleTimeout);
    };
  }, []);

  return (
    <div className="cursor-trail-container">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            animationDuration: `${sparkle.duration}ms`,
          }}
        />
      ))}
    </div>
  );
};

export default CursorTrail;