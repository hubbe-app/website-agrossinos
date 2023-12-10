'use client';

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown } from 'flowbite-react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/assets/logo.png';

export default function Navbar() {
const [isMobile, setIsMobile] = useState(false);

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

  return (
    <div>
      {isMobile ? (
        <div className="bg-[#F8F9FA] flex flex-row items-center py-8 px-6">
          <div className="w-full lg:w-1/2">
            <Link href="/">
              <Image src={logo} alt="Logotipo Agrosinos" width={110} height={80} />
            </Link>
          </div>
          <div>
            <Dropdown inline label={<FontAwesomeIcon icon={ faBars } className="text-black text-[32px]" />} dismissOnClick={false} arrowIcon={false}>
              <div className="flex flex-col p-2 items-start gap-2">
                <Link href="/" target="_blank">
                  <button className="" type="button">Home</button>
                </Link>
                <Link href="/quemsomos" target="_blank">
                  <button type="button">A Agrossinos</button>
                </Link>
                <Link href="/" target="_blank">
                  <button type="button">Soluções</button>
                </Link>
                <Link href="/" target="_blank">
                  <button type="button">Fale Conosco</button>
                </Link>
              </div>
            </Dropdown>
          </div>
        </div>
      ) : (
        <div className="bg-[#F8F9FA] flex flex-row items-center py-6 2xl:px-56 px-8 lg:justify-between h-fit">
          <div className="w-full md:w-2/4">
            <Link href="/">
              <Image src={logo} alt="Logotipo Agrossinos" width={150} height={80} />
            </Link>
          </div>
          <div className="flex flex-row gap-10 justify-end w-full">
            <Link href="/">
              {/* <button className="bg-white text-[#67A6DB] font-medium rounded-full px-4 py-2 w-56 hover:bg-[#67A6DB] hover:text-white hover:border hover:border-white" type="button">Acesso Candidato</button> */}
                <p className="text-[#4C5938]">Home</p>
            </Link>
            <Link href="/quemsomos">
              {/* <button className="bg-white text-[#67A6DB] font-medium rounded-full px-4 py-2 w-56 hover:bg-[#67A6DB] hover:text-white hover:border hover:border-white" type="button">Acesso Empresa</button> */}
                <p className="text-[#4C5938]">A Agrossinos</p>
            </Link>
            <Link href="/">
                <p className="text-[#4C5938]">Soluções</p>
            </Link>
            <Link href="/">
                <p className="text-[#4C5938]">Fale Conosco</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}