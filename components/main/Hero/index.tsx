import HeroContent from '@/components/sub/HeroContent.tsx';
import React from 'react';

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] sm:left-0 z-[1] w-full h-full object-cover"
      >
        <source src="/images/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};

export default Hero;
