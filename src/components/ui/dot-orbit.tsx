import React from 'react';

interface DotProps {
  angle: number;
  radius: number;
}

const Dot: React.FC<DotProps> = ({ angle, radius }) => {
  const rad = (angle * Math.PI) / 180;
  const x = radius * Math.cos(rad);
  const y = radius * Math.sin(rad);

  return (
    <div
      className='absolute h-[8.72px] w-[8.72px] rounded-full bg-neutral-400 md:h-4 md:w-4'
      style={{
        top: `calc(50% + ${y}px)`,
        left: `calc(50% + ${x}px)`,
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

export default Dot;
