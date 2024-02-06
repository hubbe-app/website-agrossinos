import React from 'react';
import MainBanner from '@/components/MainBanner';
import Contact from '@/components/Contact';
import Map from '@/components/Map';
import woman from '../../public/assets/woman.jpg'
export default function FaleConosco() {

  return (
    <div>
        <div className="h-[84vh]">
            <MainBanner
                imgSrc={woman}
                imgAlt='Mulher com tablet'
                title="Fale conosco"
            />
        </div>
        <Contact />
        <Map />
    </div>
  )
}
