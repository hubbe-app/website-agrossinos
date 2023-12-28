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
          videoSrc="https://s3-figma-videos-production-sig.figma.com/video/1024672175368923531/TEAM/6e54/58b0/-bb8b-44c7-bab4-d9f56a0fd837?Expires=1704672000&Signature=Yoay-HCIDFNQ~tB2I-rNIW~qnBWHF4mjUmNlxARwVCmzeX1ozkohvWryQEDk6o~XtrbNvtHlF65RsiOsewWbqndshlnglf8Hp5TsH7CT-dxAl7pPyKobw~y2TXJ7CDky77S1gFQG8J-49TmPizOmfikE0eN9NZgHa6fqsEju1qvN08njuoZz29OzSOc6lgqLyWuSG97B59K2z-Cnt03jZMo7Yqgyg9~k8X9L8idhAufFXvx3P8xl8wt9iVXZ7f2Ja9-3ET3xUh9OFbzovlJT-vgGUHCGGpLx7kiZ0J1N76gZ49WlI1R9wQ4vUHZ5kE0-7AgllMm4I~SLPliis~fxhw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
