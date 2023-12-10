import Content from '@/components/Content';
import History from '@/components/History';
import Mvv from '@/components/OrgMissionVisionValues';
import SecondBanner from '@/components/SecondBanner';
import React from 'react';

export default function WhoWeAre() {
  const contentOne = "A Agrossinos é uma corretora de grãos, de insumos para rações e de alimentos, focada no agronegócio, atua em todo o Rio Grande do Sul e está situada em São Leopoldo.";
  const contentTwo = "Tem como premissa de sua atuação estar mais próximas de seus parceiros e clientes, além de conectar produtores e compradores, nossa equipe compartilha conhecimento e informação, seja sobre tendências de mercado, sazonalidade ou estratégias de negociação.";

  return (
    <div>
      <div className="h-[84vh]">
        <SecondBanner />
      </div>
      <Content contentOne={contentOne} contentTwo={contentTwo} />
      <Mvv />
      <History />
    </div>
  )
}