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

export default function Insumos() {
  const contentOne = " Agrossinos atua na comercialização de milho, farelo, óleo e casca de soja, farelo de trigo, farelo de arroz desengordurado, farelo de canola, farelo de girassol, farelo de soja semi-integral, farinha de carne, aveia, sal e fosfato.";
  const contentTwo = "Eficiência, qualidade e proximidade que impulsionam o crescimento.";

  return (
    <div>
      <div className="h-[84vh]">
        <MainBanner
          // videoSrc={require("../../public/assets/video3.mp4")}
          videoSrc="https://s3-figma-videos-production-sig.figma.com/video/1024672175368923531/TEAM/3b34/05f7/-6378-4e9d-a663-f0f5f22f2fbf?Expires=1702857600&Signature=USpcm1hePJe17qiwdtjuXnZ4KhzFoveGW8~lEdi764D1qCibwWml28lRR21LBq8UCa70BHRNsqW~tZD9EsOiaOP7WUUXFEf1MlY5vq-Y08I-4~R70zNYB0mlyarzIjRemwQBUiyDnikcU8yZCRN1Irlt4ajhBTzG0lTqNTb5T0dj32uyU1ECMAsPpgPI4pM5wgqzXmxk6yioYdljx0ghp18O6RWcLQ4GoUHmFdconBuD6EzFlWufHFHFFXkqWKvrw~KnlQngA6pwOiyhaUY-Yhe0b45SCjuifgYCp5OrxUlowlypbpMK57rlx5xyCrryPZfamTU51vubgYq-xZ~ppQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          title="Negociações de Grãos e"
          subtitle="Insumos para Rações"
        />
      </div>
      <Content contentOne={contentOne} contentTwo={contentTwo} />
      <MainCarousel img1={img1} img2={img2} img3={img3} />
    </div>
  )
}