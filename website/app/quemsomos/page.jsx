import React from 'react';
import Content from '@/components/Content';
import Differentials from '@/components/Differentials';
import History from '@/components/History';
import MainBanner from '@/components/MainBanner';
import Mvv from '@/components/OrgMissionVisionValues';

export default function WhoWeAre() {
  const contentOne = "A Agrossinos é uma corretora de grãos, de insumos para rações e de alimentos, focada no agronegócio, atua em todo o Rio Grande do Sul e está situada em São Leopoldo.";
  const contentTwo = "Tem como premissa de sua atuação estar mais próximas de seus parceiros e clientes, além de conectar produtores e compradores, nossa equipe compartilha conhecimento e informação, seja sobre tendências de mercado, sazonalidade ou estratégias de negociação.";

  return (
    <div>
      <div className="h-[84vh]">
        <MainBanner
          videoSrc="https://s3-figma-videos-production-sig.figma.com/video/1024672175368923531/TEAM/2b65/63f8/-e7ad-4cba-9fc2-970f4deed794?Expires=1704672000&Signature=DVs5ITcdam9PXiTQGds90JAIN8K4XPDNepvr8umEWNlm9U5mZHndQ1LEIEQc0dRwH7hVgIQrEpb3M2-pgKvvYqJXxSYMWP7clE3cmyXFdl92uAEbTqFu2KBFUrchr-TL9PYopRXJ0i1UyNbmtSOsWB5UNkJEyAx93u1KuT7mQTccKCjkuV9gMPsNfuaefqnJq~c48UDAb0--XB2zcDBlBq6HTgl-WyU0P2lhkI4~OGgupKHyb9IQZM~K7D0N3cBW7LFv~mP~~IqoVQ7Zq-xs0OiB9sDgBNSETPUXN7uevLoKnsr2OkbH7Hqcg6C~cwbnNVhxjwz9JJabyApG9wRI2A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          title="Quem Somos"
          minorSubtitle="Mais de 40 anos fazendo história no sul do país com proximidade, confiança e comprometimento em cada negócio."
        />
      </div>
      <Content contentOne={contentOne} contentTwo={contentTwo} />
      <Mvv />
      <History />
      <Differentials />
    </div>
  )
}