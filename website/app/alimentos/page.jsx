import React from 'react';
import Content from '@/components/Content';
import History from '@/components/History';
import MainBanner from '@/components/MainBanner';
import MainCarousel from '@/components/MainCarousel';
import img1 from '../../public/assets/a1.png';
import img2 from '../../public/assets/a2.png';
import img3 from '../../public/assets/a3.png';

export default function Insumos() {
  const contentOne = " Agrossinos atua na comercialização de milho, farelo, óleo e casca de soja, farelo de trigo, farelo de arroz desengordurado, farelo de canola, farelo de girassol, farelo de soja semi-integral, farinha de carne, aveia, sal e fosfato.";
  const contentTwo = "Eficiência, qualidade e proximidade que impulsionam o crescimento.";

  return (
    <div>
      <div className="h-[84vh]">
        <MainBanner
            videoSrc="https://s3-figma-videos-production-sig.figma.com/video/1024672175368923531/TEAM/1eb0/8050/-fa83-4b80-9751-4a08f4c2cfb9?Expires=1704672000&Signature=W1Wery~2HRllrpqpGCSF7fQeoFAzgbuht9auwxjTlZIN1ltKD355N6JogqXC3clNvrqM14RUThH9S35d2vz4ERZnURIObzl9WJ5jN8A4eIVD6uHxX7e4X8Xrsh8z1vNjQ3~r8JTITSqkinGF18pAPTlPb1yB6Tva8XvArxRtl1FVGkAiaCI6B2ihvDqdYOyX3Gk7cq3WTIKkGH-oS4n2w5JoWUgOt~TlVdoxl20~bnPZE0ZTrdIdNLWRtqIz-HRU7GlGsaRu1fiW2bgcS~M99K0XzGlen8g07L6WF93eX3pWDzHGWHNIwkrq8mbZ3xORepR8d7cER9dtcDi7H12thg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            title="Negociações de Alimentos"
            minorSubtitle="Mercados: avícola, bovino e laticínio"
        />
      </div>
      <Content contentOne={contentOne} contentTwo={contentTwo} />
      <MainCarousel img1={img1} img2={img2} img3={img3} />
    </div>
  )
}