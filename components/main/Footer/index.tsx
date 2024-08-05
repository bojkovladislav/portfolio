'use client';

import Socials from '@/components/sub/Socials';
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  function handleScrollToTheTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <footer className="flex relative z-[20] backdrop-blur-sm justify-between py-5 px-5 sm:px-14 w-full h-full items-center border-t-2 border-[#2A0E61] border-opacity-70 mt-32  bg-[#03001417]">
      <Link
        href="https://drive.google.com/file/d/14Jgo_8lxeS1bQTNK3QzB0AQ8-E7uG8Ul/view"
        target="_blank"
        className="underline font-bold text-[12px] sm:text-lg text-gray-300 hover:text-white transition-all duration-300"
      >
        Download CV
      </Link>
      <Socials forFooter />
      <ArrowUpCircleIcon
        onClick={handleScrollToTheTop}
        className="hover:text-white text-slate-300 cursor-pointer w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] transition-all"
      />
    </footer>
  );
};

export default Footer;
