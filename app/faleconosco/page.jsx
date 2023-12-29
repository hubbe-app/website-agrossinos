import React from 'react';
import MainBanner from '@/components/MainBanner';
import Contact from '@/components/Contact';
import Map from '@/components/Map';
import videos from '@/cms/videos.json';

export default function FaleConosco() {

  return (
    <div>
        <div className="h-[84vh]">
            <MainBanner
                videoSrc={videos.fale_conosco}
                title="Fale conosco"
            />
        </div>
        <Contact />
        <Map />
    </div>
  )
}