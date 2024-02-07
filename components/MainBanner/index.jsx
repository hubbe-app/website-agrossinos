import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function MainBanner({ videoSrc, title, subtitle, minorSubtitle, minorSubtitleTwo, buttonText, buttonLink }) {
  return (
    <>
      <div className="w-full absolute z-[-10] object-cover">
        <video autoPlay muted loop src={videoSrc} className="w-full h-[79vh] max-h-[79vh] 2xl:max-h-[84vh] object-cover filter brightness-[80%]" />
      </div>
      <div className="h-full">
        <div className="2xl:pt-[300px] pt-[200px] px-4 xl:px-56 relativegradient-background">
          <div className="text-white md:text-[52px] text-[32px] font-extrabold leading-tight">
            <h1>{title}</h1>
            <h1>{subtitle}</h1>
            {minorSubtitle && (
                <div className="mt-10 flex flex-row items-center gap-2 w-3/4 max-sm:w-full">
                    <h1 className="text-white font-extralight text-[23px]">{minorSubtitle}</h1>
                </div>
            )}
            {minorSubtitleTwo && (
              <div className="flex flex-row items-center gap-2 w-3/4">
                <h1 className="text-white font-extralight text-[23px]">{minorSubtitleTwo}</h1>
              </div>
            )}
          </div>
          {buttonText && buttonLink && (
            <Link className='flex w-fit' href={buttonLink}>
              <div className="mt-10 w-fit flex flex-row items-center gap-2 group hover:text-[#73473D]">
                <h1 className="font-bold text-white text-[20px] group-hover:text-[#73473D]">{buttonText}</h1>
                <FontAwesomeIcon className="text-white group-hover:text-[#73473D]" size="lg" icon={faArrowRight} />
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
