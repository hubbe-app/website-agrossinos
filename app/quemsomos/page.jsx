import React from 'react';
import Content from '@/components/Content';
import Differentials from '@/components/Differentials';
import History from '@/components/History';
import MainBanner from '@/components/MainBanner';
import Mvv from '@/components/OrgMissionVisionValues';
import videos from '@/cms/videos.json';

export default function WhoWeAre() {
  const contentOne =
    'A Agrossinos é uma corretora de grãos e insumos para ração e alimentos, criando conexões entre fornecedores e clientes com negociações justas para ambos os lados. Localizada na cidade de São Leopoldo e com atuação no sul e centro-oeste do país.';
  const contentTwo =
    'Tem como premissa de sua atuação estar mais próxima de seus parceiros e clientes, além de conectar produtores e compradores, nossa equipe compartilha conhecimento e informação, seja sobre tendências de mercado, sazonalidade ou estratégias de negociação.';

  return (
    <div>
      <div className='h-[84vh]'>
        <MainBanner
          videoSrc={videos.quem_somos}
          title='Quem Somos'
          minorSubtitle='Há 20 anos atua no Sul do país, com comprometimento e confiança, fortalecendo parcerias a cada negócio.'
        />
      </div>
      <Content contentOne={contentOne} contentTwo={contentTwo} />
      <Mvv />
      <History />
      <Differentials />
    </div>
  );
}
