import Content from "@/components/Content";
import MainBanner from "@/components/MainBanner";
import Solutions from "@/components/Solutions";
import SolutionsImages from "@/components/SolutionsImages";

export default function Home() {
  const contentOne = "A Agrossinos consolidou-se como referência no mercado ao longo de mais de quatro décadas, cultivando parcerias sólidas e conquistando resultados notáveis nas negociações de grãos, insumos e alimentos.";
  const contentTwo = "Nossa trajetória é uma verdadeira ponte para oportunidades no agronegócio.";

  return (
    <main className="flex flex-col">
      <div className="h-[84vh]">
        <MainBanner
          // videoSrc={require("../public/assets/video.mp4")}
          videoSrc="https://s3-figma-videos-production-sig.figma.com/video/1024672175368923531/TEAM/6a2c/8521/-e199-4048-813c-d84beebd9a66?Expires=1702857600&Signature=fBU5oapLJcEDPEzPUSUCP68KkdTXvmxMX1sEuS~i2zA8Kv0vf1fFGgoSGTsqVqfMOzRWNimWA0La8~R1FQPBtHRSVtJaU5KxxSUE9UpDOxhsyxoNnWr8sb3UK~nH-nApoOxofqkEPNmzKBxCZlxihZy-tTepgBPipNal2dATKbk-eTE6svTA45QIwyoTeL4yij0KOB91Z3fQY~sfO7KGYofpKJezmYwWAYUFxFu6PICor62K~IgmR2DBoo1n-bv8cEpr4hr5shEvVrOqLRcjRlHCGTUYZE3nW94Yf4r00UOCHZZgFCu~jQQUycES46iRUvhwas21JRhHf2nEBPHauA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          title="A ponte para grandes"
          subtitle="negócios no agro"
          buttonText="Saiba mais"
          buttonLink="/"
        />
      </div>
      <Content contentOne={contentOne} contentTwo={contentTwo} />
      <Solutions />
      <SolutionsImages />
    </main>
  )
}
