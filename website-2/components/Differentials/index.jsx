'use client';

import React, { useState } from 'react';
import d1 from '../../public/assets/d1.png';
import d2 from '../../public/assets/d2.png';
import d3 from '../../public/assets/d3.png';
import d4 from '../../public/assets/d4.png';
import d5 from '../../public/assets/d5.png';
import d6 from '../../public/assets/d6.png';

const images = [
  { src: d1, text: 'Proximidade' },
  { src: d2, text: 'Tradição' },
  { src: d3, text: 'Confiança' },
  { src: d4, text: 'Experiência' },
  { src: d5, text: 'Conhecimento' },
  { src: d6, text: 'Parceria' },
];

export default function Differentials() {
  const [hovered, setHovered] = useState(Array(6).fill(false));

  const handleMouseEnter = (index) => {
    const newHoveredState = Array(6).fill(false);
    newHoveredState[index] = true;
    setHovered(newHoveredState);
  };

  const handleMouseLeave = () => {
    setHovered(Array(6).fill(false));
  };

  const bgStyles = images.map((image, index) => ({
    backgroundImage: `url(${image.src.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }));

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color: '#fff',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  };

  const textContainerStyle = {
    position: 'absolute',
    bottom: '10%',
    width: '100%',
    textAlign: 'center',
  };

  return (
    <div>
      <div className="w-full py-20 bg-[#4C5938]">
        <h1 className="text-center text-[35px] md:text-[65px] font-bold text-white">Diferenciais</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {bgStyles.map((bgStyle, index) => (
          <div
            key={index}
            className="h-[224px] sm:h-[506px] w-full relative"
            style={bgStyle}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex flex-col gap-10" style={{ ...overlayStyle, opacity: hovered[index] ? 1 : 0 }}>
              <div style={textContainerStyle}>
                <p className="text-[16px] md:text-[45px] text-center font-bold text-white">{images[index].text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

