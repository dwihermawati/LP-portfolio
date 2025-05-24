'use client';

// import Image from 'next/image';
import React from 'react';

import { generateClamp } from '@/function/generate-clamp';
import { generateClampInverse } from '@/function/generate-clamp-inverse';

export const ContactBgDecorations: React.FC = () => {
  return (
    <>
      {/* ellipse background */}
      <div
        className='pointer-events-none absolute z-[-20] w-full border-2 border-blue-500 bg-[url("/Images/contact-ellipse-decoration.svg")] bg-cover bg-bottom bg-no-repeat'
        style={{
          // top: generateClamp(-283.56, -149, 1440),
          // width: generateClamp(360, 1418, 1440),
          right: generateClampInverse(-174, -330, 1440),
          height: generateClamp(755, 1277, 1440),
        }}
      />
    </>
  );
};
