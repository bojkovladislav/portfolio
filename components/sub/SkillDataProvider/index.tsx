import React from 'react';
import Image from 'next/image';

interface Props {
  src: string;
  width: number;
  height: number;
}

const SkillDataProvider = ({ src, width, height }: Props) => {
  return (
    <Image
      width={width}
      height={height}
      src={src}
      alt="Skill image"
      className="flex-grow"
    />
  );
};

export default SkillDataProvider;
