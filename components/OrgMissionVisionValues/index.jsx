import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faEye, faGem } from '@fortawesome/free-solid-svg-icons';


export default function Mvv() {
  return (
    <div className="flex flex-col md:flex-row gap-10 px-8 xl:px-56 mb-10 justify-between">
        <div className="flex flex-col gap-2 w-full md:w-1/4">
            <div className="flex flex-row gap-2 items-center">
                <FontAwesomeIcon icon={faBullseye} size="xl" />
                <h1 className="text-[28px] text-[090808] font-bold">Missão</h1>
            </div>
            <p className="text-[20px] text-[#212529]">Oferecer sempre o melhor serviço para os nossos parceiros através de negociações transparentes e eficientes.</p>
        </div>

        <div className="flex flex-col gap-2 w-full md:w-1/4">
            <div className="flex flex-row gap-2 items-center">
                <FontAwesomeIcon icon={faEye} size="xl" />
                <h1 className="text-[28px] text-[090808] font-bold">Visão</h1>
            </div>
            <p className="text-[20px] text-[#212529]">Ser reconhecida por clientes e fornecedores como referência no setor do agronegócio.</p>
        </div>

        <div className="flex flex-col gap-2 w-full md:w-1/4">
            <div className="flex flex-row gap-2 items-center">
                <FontAwesomeIcon icon={faGem} size="xl" />
                <h1 className="text-[28px] text-[090808] font-bold">Valores</h1>
            </div>
            <p className="text-[20px] text-[#212529]">Respeitamos e valorizamos:</p>
            <ul className="flex flex-col gap-1">
                <li className="text-[20px] text-[#212529]">&#8226; Respeito e transparência em todas as negociações</li>
                <li className="text-[20px] text-[#212529]">&#8226; Busca constante por conhecimento e aprimoramento</li>
                <li className="text-[20px] text-[#212529]">&#8226; Parcerias sólidas com confiança e colaboração</li>
                <li className="text-[20px] text-[#212529]">&#8226; Comprometimento em gerar os melhores resultados</li>
                <li className="text-[20px] text-[#212529]">&#8226; Proximidade com nossos parceiros</li>
            </ul>
        </div>

    </div>
  )
}
