import React from 'react';
import Content from '@/components/Content';
import Differentials from '@/components/Differentials';
import History from '@/components/History';
import MainBanner from '@/components/MainBanner';
import Mvv from '@/components/OrgMissionVisionValues';
import MainCarousel from '@/components/MainCarousel';
import img1 from '../../public/assets/carousel1.png';
import img2 from '../../public/assets/carousel2.png';
import img3 from '../../public/assets/carousel3.png';
import videos from '@/cms/videos.json';

export default function Insumos() {
  const contentOne = "O portfólio da empresa se concentra na comercialização de milho, farelo, óleo e casca de soja, farelo de trigo, farelo de arroz desengordurado, farelo de canola, farelo de girassol, farelo de soja semi-integral, farinha de carne, aveia, sal e fosfato, negociações que vão de grãos a insumos para ração.";
  const contentTwo = "Eficiência e qualidade dos insumos são o alicerce do negócio e impulsionam o crescimento de parceiros e clientes.";

  return (
    <div>
      <div className="h-[79vh] max-h-[79vh] 2xl:h-[84vh] 2xl:max-h-[84vh]">
        <MainBanner
          videoSrc={videos.insumos}
          title="Matéria-prima para"
          subtitle="insumos de qualidade"
        />
      </div>
      <Content contentOne={contentOne} contentTwo={contentTwo} />
      <MainCarousel img1={img1} img2={img2} img3={img3} />
    </div>
  )
}
