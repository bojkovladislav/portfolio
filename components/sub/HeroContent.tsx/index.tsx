'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  appearance,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import TypingAnimation from '../../animations/TypingAnimation';

const LinkComponent = ({
  text,
  href,
  redirect,
}: {
  text: string;
  href: string;
  redirect: boolean;
}) => {
  return (
    <motion.a
      variants={appearance}
      href={href}
      target={redirect ? '_blank' : '_self'}
      className="p-2 button-primary text-center text-white text-md sm:text-lg text-weight cursor-pointer rounded-lg w-full"
    >
      {text}
    </motion.a>
  );
};

const HeroContent = () => {
  const [isPageReady, setIsPageReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsPageReady(true);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-5 sm:px-20 mt-24 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          className="Welcome-box py-[15px] mt-10 px-4 border border-[#7024f88b] opacity-[90%]"
          variants={slideInFromTop}
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] font-bold">
            Welcome to My Portfolio!
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex sm:gap-2 sm:mt-6 text-white w-auto h-auto flex-col sm:flex-row gap-0"
        >
          <span className="font-bold text-[23px] sm:text-5xl">I'm a</span>
          {isPageReady && (
            <TypingAnimation
              className="text-[23px] sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
              cursorColor="white"
            />
          )}
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-md sm:text-lg text-gray-400 sm:my-5 max-w-[650px]"
        >
          <strong>Hey</strong> &#128075; <br /> My name is Vladyslav. I have
          over 1 year of experience in Typescript, JavaScript, React, HTML, CSS,
          UI libraries like Bootstrap, Material UI, Tailwind, and others, Node
          and Express for the backend, and SQL. During this time, I have a
          proven track record of building efficient and user-friendly React{' '}
          <a
            className="underline font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
            href="#projects"
          >
            applications
          </a>
          .
        </motion.p>
        <div className="flex gap-5 flex-col sm:flex-row">
          {['Scroll To My Projects', 'Download CV'].map((text, i) => (
            <LinkComponent
              text={text}
              href={
                i === 0
                  ? '#projects'
                  : 'https://drive.google.com/file/d/1kCuSnvCCWCJAELQcaY1pkks530vi5WqS/view?usp=sharing'
              }
              redirect={i === 1}
              key={i}
            />
          ))}
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full sm:flex sm:justify-center items-center hidden"
      >
        <Image
          src="/images/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
