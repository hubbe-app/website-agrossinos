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
          videoSrc={require("../../public/assets/video2.mp4")}
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