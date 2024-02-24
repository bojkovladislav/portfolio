'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromTop } from '@/utils/motion';
import Image from 'next/image';
import { Satisfy } from 'next/font/google';
import Appearance from '@/components/animations/AppearanceAnimation';

const cursive = Satisfy({ weight: '400', subsets: ['latin'] });

const Encryption = () => {
  return (
    <div className="flex relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute top-0 z-[20]">
        <motion.div
          variants={slideInFromTop}
          className="text-2xl sm:text-5xl font-medium text-center text-gray-200"
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {' '}
            &{' '}
          </span>
          Security
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] ">
        <div className="flex flex-col items-center group cursor-pointer">
          <Image
            src="/images/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/images/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className=" z-10"
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Encryption</h1>
        </div>
      </div>
      <div className="absolute z-[20] bottom-[-50px] sm:bottom-[10px] px-[5px]">
        <Appearance>
          <h1
            className={`${cursive.className} text-2xl font-medium text-center text-slate-300`}
          >
            From concept to execution, shaping digital landscapes
          </h1>
        </Appearance>
      </div>

      <div className="w-full flex justify-center absolute scale-[4] sm:transform-none">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full"
          src="/images/encryption.webm/"
        />
      </div>
    </div>
  );
};

export default Encryption;
