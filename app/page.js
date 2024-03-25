import Content from '@/components/Content';
import MainBanner from '@/components/MainBanner';
import Solutions from '@/components/Solutions';
import SolutionsImages from '@/components/SolutionsImages';
import videos from '@/cms/videos.json';

export default function Home() {
  const contentOne =
    'A Agrossinos consolidou-se como referência no mercado, cultivando parcerias sólidas e conquistando resultados notáveis nas negociações de grãos, insumos e alimentos.';
  const contentTwo = 'Nossa trajetória é uma verdadeira ponte para oportunidades no agronegócio.';

  return (
    <main className='flex flex-col'>
      <div className='h-[79vh] max-h-[79vh] 2xl:h-[84vh] 2xl:max-h-[84vh]'>
        <MainBanner
          videoSrc={videos.home}
          title='A ponte para grandes'
          subtitle='negócios no agro'
          buttonText='Quem somos'
          buttonLink='/quemsomos'
        />
      </div>
      <Content contentOne={contentOne} contentTwo={contentTwo} />
      <Solutions />
      <SolutionsImages />
    </main>
  );
}
