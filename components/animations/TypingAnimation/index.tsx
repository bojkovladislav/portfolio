import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const TypingAnimation = ({
  className,
  cursorColor,
}: {
  className: string;
  cursorColor: string;
}) => {
  const text = useTypewriter({
    words: [
      'Full-stack Developer',
      'Frontend Developer',
      'Web Developer',
      'Software Developer',
    ],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 50,
    delaySpeed: 300,
  });

  return (
    <div>
      <span className={className}>{text[0]}</span>{' '}
      <span className="text-[23px] sm:text-5xl font-bold">
        <Cursor
          cursorStyle="_"
          cursorColor={cursorColor}
          cursorBlinking={false}
        />
      </span>
    </div>
  );
};

export default TypingAnimation;
