import Link from 'next/link';
import React from 'react';

export default function SecondBanner() {
  return (
    <>
        <div className="w-full absolute object-cover" style={{background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%); 0% 0% no-repeat padding-box'}}>
            <video autoPlay muted loop src={require("../../public/assets/video2.mp4")} className="w-full h-[84vh] object-cover" />
        </div>
        <div className="h-full">
            <div className="pt-[300px] px-4 2xl:px-56 relative">
                <div className="text-white md:text-[72px] text-[35px] font-extrabold">
                    <h1>Quem Somos</h1>
                </div>
                <Link href="/">
                    <div className="mt-10 flex flex-row items-center gap-2 w-3/4">
                        <h1 className="text-white font-extralight md:text-[32px] text-[23px]">Mais de 40 anos fazendo história no sul do país com proximidade, confiança e comprometimento em cada negócio.</h1>
                    </div>
                </Link>
            </div>
        </div>
    </>
  )
}