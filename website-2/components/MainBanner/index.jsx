// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import Link from 'next/link';

// export default function MainBanner() {

//   return (
//     <>
//         <div className="w-full absolute object-cover">
//             <video autoPlay muted loop src={require("../../public/assets/video.mp4")} className="w-full h-[84vh] object-cover" />
//         </div>
//         <div className="h-full" style={{background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%); 0% 0% no-repeat padding-box'}}>
//             <div className="pt-[300px] px-4 2xl:px-56 relative">
//                 <div className="text-white md:text-[72px] text-[35px] font-extrabold">
//                     <h1>A ponte para grandes</h1>
//                     <h1>negócios no agro</h1>
//                 </div>
//                 <Link href="/">
//                     <div className="mt-10 flex flex-row items-center gap-2 group hover:text-[#73473D]">
//                         <h1 className="font-bold text-white md:text-[20px] text-[30px] group-hover:text-[#73473D]">Saiba mais</h1>
//                         <FontAwesomeIcon className="text-white group-hover:text-[#73473D]" size="lg" icon={faArrowRight} />
//                     </div>
//                 </Link>
//             </div>
//         </div>
//     </>
//   );
// }

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function MainBanner({ videoSrc, title, subtitle, minorSubtitle, minorSubtitleTwo, buttonText, buttonLink }) {
  return (
    <>
      <div className="w-full absolute z-[-10] object-cover">
        <video autoPlay muted loop src={videoSrc} className="w-full h-[84vh] object-cover" />
      </div>
      <div className="h-full">
        <div className="pt-[300px] px-4 2xl:px-56 relative z-20 gradient-background">
          <div className="text-white md:text-[72px] text-[35px] font-extrabold">
            <h1>{title}</h1>
            <h1>{subtitle}</h1>
            {minorSubtitle && (
                <div className="mt-10 flex flex-row items-center gap-2 w-3/4">
                    <h1 className="text-white font-extralight md:text-[32px] text-[23px]">{minorSubtitle}</h1>
                </div>
            )}
            {minorSubtitleTwo && (
              <div className="flex flex-row items-center gap-2 w-3/4">
                <h1 className="text-white font-extralight md:text-[32px] text-[23px]">{minorSubtitleTwo}</h1>
              </div>
            )}
          </div>
          {buttonText && buttonLink && (
            <Link href={buttonLink}>
              <div className="mt-10 flex flex-row items-center gap-2 group hover:text-[#73473D]">
                <h1 className="font-bold text-white md:text-[20px] text-[30px] group-hover:text-[#73473D]">{buttonText}</h1>
                <FontAwesomeIcon className="text-white group-hover:text-[#73473D]" size="lg" icon={faArrowRight} />
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
