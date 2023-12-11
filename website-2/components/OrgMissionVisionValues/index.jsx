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
            <p className="text-[20px] text-[#212529]">Ser a ponte para grandes negócios na comercialização de alimentos e na corretagem de insumos para ração.</p>
        </div>

        <div className="flex flex-col gap-2 w-full md:w-1/4">
            <div className="flex flex-row gap-2 items-center">
                <FontAwesomeIcon icon={faEye} size="xl" />
                <h1 className="text-[28px] text-[090808] font-bold">Visão</h1>
            </div>
            <p className="text-[20px] text-[#212529]">Ser referência no agronegócio no Rio Grande do Sul.</p>
        </div>

        <div className="flex flex-col gap-2 w-full md:w-1/4">
            <div className="flex flex-row gap-2 items-center">
                <FontAwesomeIcon icon={faGem} size="xl" />
                <h1 className="text-[28px] text-[090808] font-bold">Valores</h1>
            </div>
            <p className="text-[20px] text-[#212529]">Respeitamos e valorizamos:</p>
            <ul className="flex flex-col gap-1">
                <li className="text-[20px] text-[#212529]">&#8226; Satisfação do Cliente</li>
                <li className="text-[20px] text-[#212529]">&#8226; Qualidade em todas as ações</li>
                <li className="text-[20px] text-[#212529]">&#8226; Respeito incondicional</li>
                <li className="text-[20px] text-[#212529]">&#8226; Transparência e confiança nas negociações</li>
                <li className="text-[20px] text-[#212529]">&#8226; Cooperação contínua com o cliente</li>
                <li className="text-[20px] text-[#212529]">&#8226; Proximidade com o cliente</li>
            </ul>
        </div>

    </div>
  )
}