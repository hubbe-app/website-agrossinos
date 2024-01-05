import React from 'react';
import logo from '../../public/assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="w-full xl:px-56 px-8 py-20 bg-[#E9ECEF]">
        <div className="w-full flex flex-col xl:items-start items-center justify-between gap-10 md:flex-row">
            <div>
                <Link href="/">
                    <Image src={logo.src} width={170} height={20} alt="Logotipo Agrossinos" />
                </Link>
            </div>
            <div className="flex flex-row xl:gap-10 gap-4">
                <Link href="https://www.facebook.com/profile.php?id=100095617780166" target="_blank">
                    <FontAwesomeIcon icon={faFacebook} size="2xl" color="#4C5938" />
                </Link>
                <Link href="https://www.instagram.com/agrossinos" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} size="2xl" color="#4C5938" />
                </Link>
            </div>
            <div className="text-[#4C5938] flex flex-col gap-2">
                <Link href="/insumos">
                    <h1 className="font-bold text-[20px]">Insumos para Rações</h1>
                </Link>
                <Link href="tel:+555135881231">
                    <h1 className="text-[16px]">(51) 3588.1231 | 3566.3579</h1>
                </Link>
                <Link href="mailto:corretora@agrossinos.com.br">
                    <h1>corretora@agrossinos.com.br</h1> 
                </Link>
            </div>
            <div className="text-[#4C5938] flex flex-col gap-2">
                <Link href="/alimentos">
                    <h1 className="font-bold text-[20px]">Alimentos</h1>
                </Link>
                <Link href="tel:+555135894229">
                    <h1>(51) 3589.4229</h1>
                </Link>
                <Link href="mailto:comercial@agrossinos.com.br">
                    <h1>comercial@agrossinos.com.br</h1>
                </Link>
            </div>
        </div>
    </div>
  )
}