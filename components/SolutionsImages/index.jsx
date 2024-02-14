'use client';

import React, { useState } from 'react';
import img1 from '../../public/assets/img1.png';
import img2 from '../../public/assets/img2.png';
import Link from 'next/link';

export default function SolutionsImages() {
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);

  const bgStyleFirst = {
    backgroundImage: `url(${img1.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  };

  const bgStyleSecond = {
    backgroundImage: `url(${img2.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  };

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
    transition: 'opacity 0.5s ease',
  };

  return (
    <div className='w-full xl:h-[763px] h-full'>
      <div className='w-full flex lg:flex-row flex-col h-full'>
        <div className='xl:w-1/2 w-full xl:h-[763px] sm:h-[500px] h-[339px]' style={bgStyleFirst}>
          <Link href='/insumos'>
            <div className='flex flex-col gap-10' style={{ ...overlayStyle, opacity: hovered1 }}>
              <div>
                <p className='xl:text-[54px] text-[35px] text-center font-bold leading-tight'>Grãos e insumos</p>
                <p className='xl:text-[54px] text-[35px] text-center font-bold leading-tight'>para rações</p>
              </div>
              <button className='py-2 px-10 bg-white rounded-full text-[#4C5938] text-[20px]'>Conheça</button>
            </div>
          </Link>
        </div>
        <div className='xl:w-1/2 w-full xl:h-[763px] sm:h-[500px] h-[339px]' style={bgStyleSecond}>
          <Link href='/alimentos'>
            <div className='flex flex-col gap-10' style={{ ...overlayStyle, opacity: hovered2 }}>
              <p className='xl:text-[54px] text-[35px] text-center font-bold'>Alimentos</p>
              <button className='py-2 px-10 bg-white rounded-full text-[#4C5938] text-[20px]'>Conheça</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
