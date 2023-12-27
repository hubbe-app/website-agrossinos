import React from 'react';
import MainBanner from '@/components/MainBanner';
import Contact from '@/components/Contact';
import Map from '@/components/Map';

export default function FaleConosco() {

  return (
    <div>
        <div className="h-[84vh]">
            <MainBanner
            //   videoSrc={require("../../public/assets/video5.mp4")}
                videoSrc="https://s3-figma-videos-production-sig.figma.com/video/1024672175368923531/TEAM/6d9d/fe91/-437a-457a-bab5-d189b561b2a6?Expires=1702857600&Signature=M-4TKEgQOU4GRb6O48iYSQvPbZ-OJhRNRZmcfMWtwPTWNKesbupGgLnPkH3lsOOULVP7hJRlWePtt7lNU3HQ6SsbgTgL52vKHnlWjaa9Z0CaUVbD6rRXghTKchcamR1HuUffkQvcDeDN1WLLv3kRsiqoxSQU3vIE5On9pOM4vNHq6DSOu7dGYpYEWM5VlukdqRVqsYE74s9kC2cNAscGwhV77pZOR1r9EvzMESyZA1QNINVnTWQ-dIGtnyTaDO8r4c7~u-6FxsTHYWl~oW~ajqARyGENaghoqAh0f-9DpURoef-yL9XKNbAcN~ETb9k4QNIawtZK51vran1uGPot9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                title="Fale conosco"
            />
        </div>
        <Contact />
        <Map />
    </div>
  )
}