import React from 'react';
import Image from 'next/image';
import man from '../../public/assets/man.png';
import people1 from '../../public/assets/people1.png';
import people2 from '../../public/assets/people2.png';

export default function History() {
    const bgStyleOne = {
        backgroundImage: `url(${people1.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }
    const bgStyleTwo = {
        backgroundImage: `url(${people2.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }
  return (
    <>
        <div className="h-full py-10">
            <div className="2xl:px-56 px-8 text-center sm:text-start">
                <h1 className="text-[#4C5938] font-bold md:text-[60px] text-[54px]">Nossa História</h1>
            </div>
            <div className="2xl:px-56 px-2 flex flex-col lg:flex-row w-full justify-between my-8">
                <div className="md:w-[486px] md:h-[605px] w-[360px] h-[448px] flex flex-row justify-center items-center">
                    <Image src={man.src} width={486} height={40} alt="Imagem do fundador da Agrossinos" />
                </div>
                <div className="w-full h-full md:w-[60%] flex flex-col gap-2">
                    <div className="text-[#090808]">
                        <h1 className="lg:text-[40px] text-[32px] font-extrabold">Empreendedorismo, pioneirismo e inovação</h1>
                    </div>
                    <div className="flex flex-col gap-3 text-[#090808] md:text-[22px] text-[16px] justify-between md:h-full">
                        <p>A trajetória de Gilberto Tavares se funde com a empresa, que foi fundada por ele em 1977 na cidade de Garibaldi (RS) como Asa Branca Comércio e Representações Ltda, nome que carregou por 20 anos. E, foi no ano de 2004, com a mudança da família para a cidade de São Leopoldo - região metropolitana de Porto Alegre, que iniciou-se a Agrossinos.</p>
                        <p>A tradição e a inovação são os diferenciais do negócio que tem em seu DNA o comprometimento, construindo não apenas uma marca, mas a história de um legado que atravessa gerações.</p>
                        <p>A Agrossinos é referência no setor, sempre alicerçada no pilar de credibilidade no mercado e confiança do cliente.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="2xl:px-56 px-2 w-full h-[460px] sm:flex-row flex flex-col gap-10 pb-10">
            <div className="sm:w-1/2 w-full h-full" style={bgStyleOne} />
            <div className="sm:w-1/2 w-full h-full" style={bgStyleTwo} />
        </div>
    </>
  )
}
