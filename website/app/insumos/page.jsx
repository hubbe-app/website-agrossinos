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
          videoSrc="https://s3-figma-videos-production-sig.figma.com/video/1024672175368923531/TEAM/3b34/05f7/-6378-4e9d-a663-f0f5f22f2fbf?Expires=1704672000&Signature=R18lP9FrUo3nXO1hxCflI8R4dWnsoxwcRHDwmIzeNydZHnMf0IliqQAoEl-oxYYUIWTvSusNq2649w4DGIP1SyG~2e2H-lXKXarGrPA46~9szWmiiOXKBRGQi2ROBHn-VyrZRmjteuYDKSflGfFmpeWQA9zX14VrThZU2Cpw-13XLya~hw-BYyXK4OiXMgHoKFFGsHIj0m9yboppuJLCh9tc20jtFk8iPPLWOAsQSFKK9pJfgpu0w9jFCOhDLeBtAhSiBkEdRCwg5MXW1cZL1NX9OVSsaD3NdMduZ0Zr2bunSco~0OOA5PC148KhvSvGVMmTlGHSzcXzwSpxKhEmvA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          title="Negociações de Grãos e"
          subtitle="Insumos para Rações"
        />
      </div>
      <Content contentOne={contentOne} contentTwo={contentTwo} />
      <MainCarousel img1={img1} img2={img2} img3={img3} />
    </div>
  )
}