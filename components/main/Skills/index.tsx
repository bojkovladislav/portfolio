'use client';

import SkillDataProvider from '@/components/sub/SkillDataProvider';
import { skills } from '@/constans';
import React from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Appearance from '@/components/animations/AppearanceAnimation';
import { Satisfy } from 'next/font/google';

const cursive = Satisfy({ weight: '400', subsets: ['latin'] });

const Skills = () => {
  const { scrollYProgress } = useScroll();
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 600]);

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-20 h-full relative overflow-hidden w-full pt-28 pb-10 sm:p-44"
    >
      <div className="absolute z-[20] top-0 px-[5px]">
        <Appearance>
          <h1
            className={`${cursive.className} text-2xl font-medium text-center text-slate-300`}
          >
            From frontend elegance to backend robustness, crafting digital
            experiences
          </h1>
        </Appearance>
      </div>
      <div className="flex flex-col gap-8 relative z-[20]">
        <motion.div
          className="flex mt-4 gap-5 sm:gap-20 items-center p-5"
          style={{ x: x1 }}
        >
          {skills.map(({ width, height, Image, skill_name }) => (
            <SkillDataProvider
              width={width}
              height={height}
              src={Image}
              key={skill_name}
            />
          ))}
        </motion.div>

        <motion.div
          className="flex mt-4 gap-5 sm:gap-20 items-center p-5 flex-row-reverse"
          style={{ x: x2 }}
        >
          {skills.map(({ width, height, Image, skill_name }, i) => (
            <SkillDataProvider
              width={width}
              height={height}
              src={Image}
              key={skill_name}
            />
          ))}
        </motion.div>
      </div>

      <div className="w-full h-full absolute scale-150 sm:scale-100">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/images/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
