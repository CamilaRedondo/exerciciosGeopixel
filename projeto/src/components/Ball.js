import React, { useState } from 'react';
import '../styles/Bola.css'

const Bola = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    const randomX = Math.random();
    const randomY = Math.random();
    setPosition({ x: randomX, y: randomY });
  };

  return (
    <div
      className="ballObject"
      style={{
        transform: `translate(${position.x * 1000}%, ${position.y * 1000}%)`,
      }}
      onMouseEnter={handleMouseEnter}
    ></div>
  );
};

export default Bola;