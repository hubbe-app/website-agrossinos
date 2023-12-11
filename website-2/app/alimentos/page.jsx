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
        //   videoSrc={require("../../public/assets/video4.mp4")}
            videoSrc="https://s3-figma-videos-production-sig.figma.com/video/1024672175368923531/TEAM/4698/66df/-2f07-4a60-9748-b7cff76345f9?Expires=1702857600&Signature=SzcsQetGQu9bzQR5MbKcB4gINY3pvzYxLddkp0g2Nt6lDhWtxOjU135th3ZyMlWWA-WLUbcZTDP8jq0AggMxW6FuPax4V7na~oLRth6CGndiQ~JYnOUVpBx6gt3fm9IYE~9LCQuaWGn8BELxkKhRnL9j9IjhFJXSvJBKtBGwiC8cRas1w1IXNa7K48B~Cz~uSjGYTgtaBdjfRzWcL0fLGybqRJYfTq1LeNBY1k~fBET3ZV2zJSEaeMyGYeFhZXC-WIZQdj9LjL0s8pltihjHerUT55FwHcY0oIDhdcoQyuDJszHB6WI9gxRhZF6IfMQn60giWtoV87u~KbWvO8oQlw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            title="Negociações de Alimentos"
            minorSubtitle="Legumes (batata)"
            minorSubtitleTwo="Mercados: avícola, bovinos e laticínio"
        />
      </div>
      <Content contentOne={contentOne} contentTwo={contentTwo} />
      <MainCarousel img1={img1} img2={img2} img3={img3} />
    </div>
  )
}