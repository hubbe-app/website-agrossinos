import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import wpLogo from '@/public/assets/whatsapp.svg';

export default function WhatsAppButton() {
  return (
    <Link
      target='blank'
      href='https://wa.me/5551999885916'
      className='fixed flex justify-center items-center rounded-full max-sm:bottom-3 bottom-20 xl:bottom-28 max-sm:right-3 right-12 xl:right-16 w-16 xl:w-24 h-16 xl:h-24 shadow-lg bg-[#25D366]'
    >
      <Image className='w-8 h-8 xl:w-10 xl:h-10' src={wpLogo} alt='WhatsApp' />
    </Link>
  );
}
