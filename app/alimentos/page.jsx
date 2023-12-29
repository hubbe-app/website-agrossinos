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
  const contentOne = " Agrossinos atua na comercialização de milho, farelo, óleo e casca de soja, farelo de trigo, farelo de arroz desengordurado, farelo de canola, farelo de girassol, farelo de soja semi-integral, farinha de carne, aveia, sal e fosfato.";
  const contentTwo = "Eficiência, qualidade e proximidade que impulsionam o crescimento.";

  return (
    <div>
      <div className="h-[84vh]">
        <MainBanner
            videoSrc={videos.alimentos}
            title="Negociações de Alimentos"
            minorSubtitle="Mercados: avícola, bovino e laticínio"
        />
      </div>
      <Content contentOne={contentOne} contentTwo={contentTwo} />
      <MainCarousel img1={img1} img2={img2} img3={img3} />
    </div>
  )
}