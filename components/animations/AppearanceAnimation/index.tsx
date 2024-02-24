'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Appearance = ({ children }: { children: ReactNode }) => {
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
      initial="hidden"
      variants={variants}
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay: animationDelay }}
    >
      {children}
    </motion.div>
  );
};

export default Appearance;
