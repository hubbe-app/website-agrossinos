import React from 'react';
import MainBanner from '@/components/MainBanner';

export default function FaleConosco() {

  return (
    <div>
      <div className="h-[84vh]">
        <MainBanner
          videoSrc={require("../../public/assets/video5.mp4")}
          title="Fale conosco"
        />
      </div>
    </div>
  )
}