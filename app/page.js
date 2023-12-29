import Content from "@/components/Content";
import MainBanner from "@/components/MainBanner";
import Solutions from "@/components/Solutions";
import SolutionsImages from "@/components/SolutionsImages";
import videos from '@/cms/videos.json';

export default function Home() {
  const contentOne = "A Agrossinos consolidou-se como referência no mercado ao longo de mais de quatro décadas, cultivando parcerias sólidas e conquistando resultados notáveis nas negociações de grãos, insumos e alimentos.";
  const contentTwo = "Nossa trajetória é uma verdadeira ponte para oportunidades no agronegócio.";

  return (
    <main className="flex flex-col">
      <div className="h-[84vh]">
        <MainBanner
          videoSrc={videos.home}
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
