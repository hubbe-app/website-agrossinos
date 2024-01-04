import Link from 'next/link'
import React from 'react'

export default function FooterBar() {
  return (
    <div className="flex justify-between md:flex-row flex-col xl:px-56 px-8 py-4 text-center md:text-start">
        <Link href="/politicadeprivacidade" target="_blank">
          <h1 className="text-[#3B3B3B] text-[14px]">Política de Privacidade</h1>
        </Link>
        <div className="flex flex-row gap-1">
          <h1 className="text-[#3B3B3B] text-[14px]">Copyright © 2024 Agrossinos. Desenvolvido por</h1>
          <Link href="https://hubbe.app" target="_blank">
            <h1 className="text-[#3B3B3B] text-[14px] hover:text-[#FF5D5B]">Hubbe.</h1>
          </Link>
        </div>
    </div>
  )
}