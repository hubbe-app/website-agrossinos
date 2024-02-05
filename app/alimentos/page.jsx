import React from 'react';
import Content from '@/components/Content';
import History from '@/components/History';
import MainBanner from '@/components/MainBanner';
import MainCarousel from '@/components/MainCarousel';
import img1 from '../../public/assets/a1.png';
import img2 from '../../public/assets/a2.png';
import img3 from '../../public/assets/a3.png';
import videos from '@/cms/videos.json';

export default function Insumos() {
  const contentOne = "Além dos grãos, outro ramo importante de negócio da Agrossinos são os alimentos.";
  const contentTwo = "Com experiência consolidada tanto para atacado, como  para varejo, fornecemos cortes de frango, carne bovina, batatas e pescados para o consumidor.";
  const contentThree = "Nossa equipe trabalha para oferecer suporte personalizado a cada cliente em todos os processos de negociação e temos como objetivo criar conexões fortes para impulsionar o crescimento do agronegócio e parceiros.";

  return (
    <div>
      <div className="h-[84vh]">
        <MainBanner
            videoSrc={videos.alimentos}
            title="Soluções em alimentos"
            subtitle="para atacado e varejo"
            minorSubtitle="Mercados: avícola, bovino e laticínio"
        />
      </div>
      <Content contentOne={contentOne} contentTwo={contentTwo} contentThree={contentThree} />
      <MainCarousel img1={img1} img2={img2} img3={img3} />
    </div>
  )
}
