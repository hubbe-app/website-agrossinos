import React from 'react';

export default function Content({ contentOne, contentTwo, contentThree }) {
  return (
    <div className="w-full py-28">
      <div className="w-2/3 xl:w-2/4 flex flex-col justify-center m-auto gap-2">
        <h1 className="text-[22px] text-[#4C5938]">
          {contentOne}
        </h1>
        <h1 className="text-[22px] text-[#4C5938]">
          {contentTwo}
        </h1>
        <h1 className="text-[22px] text-[#4C5938]">
          {contentThree}
        </h1>
      </div>
    </div>
  )
}
