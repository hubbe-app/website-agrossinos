import React from 'react';
import MainBanner from '@/components/MainBanner';
import Contact from '@/components/Contact';
import Map from '@/components/Map';

export default function FaleConosco() {

  return (
    <div>
        <div className="h-[84vh]">
            <MainBanner
                videoSrc="https://s3-figma-videos-production-sig.figma.com/video/1024672175368923531/TEAM/aacd/a760/-c0a6-486b-9713-0fe7c884e3f1?Expires=1704672000&Signature=gDnGGiSQcYLqupcPyE-uGo802xLmrN3pAHup-u5CA3U796p2xKWlXbGOlarZTzK~aaBV~nXAI8GWPOHjQQWK~-McAaGXWwx~zfjRpVBn0xXmXuVT~WufKSNKS50hP6O0av4RKbhUCcmVHUugPL~mGMv2P9F0TP8DQWAA1vIPvaFht0ayNNGMNwctNpf8QgLG-ss15R1gcy33B62x74b3nbTcpzC0Cz6U-6TMQR6Y7jDGt4kUY6IXGrzzMk-yZ6KkfudSV2ahU0GPCIkrMSV4A4j28OT5zbs3PT9QHi57vvMhrOJ8u3wW6Ei-3fZNjgEKtGi8TnoYLRX03TIVdMQPaA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                title="Fale conosco"
            />
        </div>
        <Contact />
        <Map />
    </div>
  )
}