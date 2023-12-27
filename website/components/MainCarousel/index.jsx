'use client';

import React from 'react';
// import { Carousel } from 'flowbite-react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';

export default function MainCarousel({ img1, img2, img3 }) {

  return (
    <div className="h-full w-full">
        <Carousel autoPlay={true} interval={2000} showStatus={false} showThumbs={false} infiniteLoop={true} swipeable={true}>
            <div>
                <Image src={img1.src} width={1920} height={200} alt="Imagem insumos" />
            </div>
            <div>
                <Image src={img2.src} width={1920} height={400} alt="Imagem insumos" />
            </div>
            <div>
                <Image src={img3.src} width={1920} height={400} alt="Imagem insumos" />
            </div>
        </Carousel>
    </div>
  )
}