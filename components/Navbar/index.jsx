'use client';

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from 'flowbite-react';
import { faCaretDown, faBars } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/assets/logo.png';

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleCloseDropdowns = (e) => {
    e.stopPropagation();
    setIsOpenMenu(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div>
      {isMobile ? (
        <div className='bg-[#F8F9FA] flex flex-row items-center py-8 px-6'>
          <div className='w-full lg:w-1/2'>
            <Link href='/'>
              <Image src={logo} alt='Logotipo Agrosinos' width={110} height={80} />
            </Link>
          </div>
          <div>
            <Dropdown
              inline
              label={<FontAwesomeIcon icon={faBars} className='text-black text-[32px]' />}
              dismissOnClick={false}
              arrowIcon={false}
              isOpen={isOpenMenu}
              onToggle={handleToggleMenu}
            >
              <div className='flex flex-col p-2 items-start gap-2'>
                <Link href='/'>
                  <button onClick={(e) => handleCloseDropdowns(e)} className='text-[#4C5938]' type='button'>
                    Home
                  </button>
                </Link>
                <Link href='/quemsomos'>
                  <button onClick={(e) => handleCloseDropdowns(e)} className='text-[#4C5938]' type='button'>
                    A Agrossinos
                  </button>
                </Link>
                <Link href='/insumos'>
                  <button onClick={(e) => handleCloseDropdowns(e)} className='text-[#4C5938]' type='button'>
                    Insumos para rações
                  </button>
                </Link>
                <Link href='/alimentos'>
                  <button onClick={(e) => handleCloseDropdowns(e)} className='text-[#4C5938]' type='button'>
                    Alimentos
                  </button>
                </Link>
                <Link href='/faleconosco'>
                  <button onClick={(e) => handleCloseDropdowns(e)} className='text-[#4C5938]' type='button'>
                    Fale Conosco
                  </button>
                </Link>
              </div>
            </Dropdown>
          </div>
        </div>
      ) : (
        <div className='bg-[#F8F9FA] flex flex-row items-center py-6 2xl:px-56 px-8 lg:justify-between h-fit'>
          <div className='w-full md:w-2/4'>
            <Link href='/'>
              <Image src={logo} alt='Logotipo Agrossinos' width={150} height={80} />
            </Link>
          </div>
          <div className='flex flex-row gap-10 justify-end w-full'>
            <Link href='/'>
              <p className='text-[#4C5938]'>Home</p>
            </Link>
            <Link href='/quemsomos'>
              <p className='text-[#4C5938]'>A Agrossinos</p>
            </Link>
            <Dropdown
              inline
              label={
                <span className='text-[#4C5938] flex flex-row items-center gap-2 relative z-30'>
                  Soluções <FontAwesomeIcon icon={faCaretDown} className='' />
                </span>
              }
              isOpen={isOpen}
              onToggle={handleToggle}
              dismissOnClick={false}
              arrowIcon={false}
            >
              <div className='flex flex-col p-2 items-start gap-1'>
                <Link href='/insumos'>
                  <button onClick={(e) => handleClose(e)} className='text-[#4C5938]' type='button'>
                    Insumos para rações
                  </button>
                </Link>
                <Link href='/alimentos'>
                  <button onClick={(e) => handleClose(e)} className='text-[#4C5938]' type='button'>
                    Alimentos
                  </button>
                </Link>
              </div>
            </Dropdown>
            <Link href='/faleconosco'>
              <p className='text-[#4C5938]'>Fale Conosco</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
