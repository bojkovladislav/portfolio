'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Props {
  previewImage: string;
  previewGif: string;
  title: string;
  description: string;
  href: string;
  index: number;
}

const ProjectCard = ({
  previewImage,
  previewGif,
  title,
  description,
  href,
  index,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-5 max-w-[700px] rounded-lg hover:shadow-md backdrop-blur-sm hover:shadow-cyan-500 transition-shadow duration-300 border-2 border-[#2A0E61]"
      initial="hidden"
      variants={variants}
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <Link href={href} target="_blank">
        <Image
          src={isHovered ? previewGif : previewImage}
          alt="Project Image"
          width={1000}
          height={1000}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="transition-all w-full"
          style={{ opacity: isHovered ? '1' : '0.4' }}
        />
      </Link>
      <div className="flex flex-col gap-3 px-5 pb-5 ">
        <Link
          href={href}
          target="_blank"
          className="text-white text-xl sm:text-2xl font-bold"
        >
          {title}
        </Link>
        <p className="text-gray-300 text-sm sm:text-md">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
