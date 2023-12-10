import React from 'react';
import bg from '../../public/assets/bg.png';
import gif from '../../public/assets/gif.gif';
import video from '../../public/assets/video.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function MainBanner() {
//   const bgStyle = {
//     backgroundImage: `url(${bg.src})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//   }

  return (
    // <div className="h-[800px] w-full" style={bgStyle}>
    //   <div className="h-full" style={{background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%); 0% 0% no-repeat padding-box'}}>
    //     <div className="pt-[340px] px-4 2xl:px-56">
    //         <div className="text-white md:text-[72px] text-[35px] font-extrabold">
    //             <h1>A ponte para grandes</h1>
    //             <h1>negócios no agro</h1>
    //         </div>
    //         <div className="mt-10 flex flex-row items-center gap-2">
    //             <h1 className="font-bold text-white md:text-[20px] text-[30px]">Saiba mais</h1>
    //             <FontAwesomeIcon className="text-white" size="lg" icon={faArrowRight} />
    //         </div>
    //     </div>
    //   </div>
    // </div>
    
    <>
        <div className="w-full absolute object-cover">
            <video autoPlay muted loop src={require("../../public/assets/video.mp4")} className="w-full h-[84vh] object-cover" />
        </div>
        <div className="h-full" style={{background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%); 0% 0% no-repeat padding-box'}}>
            <div className="pt-[300px] px-4 2xl:px-56 relative">
                <div className="text-white md:text-[72px] text-[35px] font-extrabold">
                    <h1>A ponte para grandes</h1>
                    <h1>negócios no agro</h1>
                </div>
                <Link href="/">
                    <div className="mt-10 flex flex-row items-center gap-2 group hover:text-[#73473D]">
                        <h1 className="font-bold text-white md:text-[20px] text-[30px] group-hover:text-[#73473D]">Saiba mais</h1>
                        <FontAwesomeIcon className="text-white group-hover:text-[#73473D]" size="lg" icon={faArrowRight} />
                    </div>
                </Link>
            </div>
        </div>
    </>
  );
}