import React from 'react';
import MainBanner from '@/components/MainBanner';
import Contact from '@/components/Contact';
import Map from '@/components/Map';
import videos from '@/cms/videos.json';
import Link from 'next/link';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function FaleConosco() {
  return (
    <div>
      <div className='h-[79vh] max-h-[79vh] 2xl:h-[84vh] 2xl:max-h-[84vh]'>
        <MainBanner videoSrc={videos.fale_conosco} title='Fale conosco' />
      </div>

      <div className='w-full flex justify-center'>
        <div className='flex max-sm:flex-col max-sm:gap-20 md:w-2/4 w-3/4 justify-between items-center max-sm:mt-20 mt-32'>
          <div className='text-black flex flex-col gap-2'>
            <Link href='/insumos'>
              <h1 className='font-bold text-[20px] 2xl:text-[32px]'>Insumos para Rações</h1>
            </Link>
            <Link href='tel:+555135881231'>
              <h1 className='text-[16px] 2xl:text-[24px]'>(51) 3588.1231 | 3566.3579</h1>
            </Link>
            <Link href='mailto:corretora@agrossinos.com.br'>
              <h1 className='text-[16px] 2xl:text-[24px]'>corretora@agrossinos.com.br</h1>
            </Link>
          </div>
          <div className='text-black flex flex-col gap-2'>
            <Link href='/alimentos'>
              <h1 className='font-bold text-[20px] 2xl:text-[32px]'>Alimentos</h1>
            </Link>
            <Link href='tel:+555135881231'>
              <h1 className='text-[16px] 2xl:text-[24px]'>(51) 3588.1231 | 3566.3579</h1>
            </Link>
            <Link href='mailto:comercial@agrossinos.com.br'>
              <h1 className='text-[16px] 2xl:text-[24px]'>comercial@agrossinos.com.br</h1>
            </Link>
          </div>
        </div>
      </div>

      <div className='mt-20 mb-32'>
        <Contact />
      </div>
      <Map />
    </div>
  );
}
