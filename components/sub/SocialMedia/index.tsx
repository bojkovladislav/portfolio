'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  href: string;
  src: string;
  name: string;
  forFooter?: boolean;
}

const SocialMedia = ({ href, src, name, forFooter }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);
  const isMail = href.startsWith('mailto:');
  const hintIsShown = isHovered && isMail;

  useEffect(() => {
    if (isHovered) return;

    let timeout: NodeJS.Timeout;

    if (copied) {
      timeout = setTimeout(() => {
        setCopied(false);
      }, 500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [copied, isHovered]);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText('vladyslav.boiko.job@gmail.com');

      setCopied(true);
    } catch (error) {
      throw new Error('Failed to copy email.');
    }
  }

  return (
    <Link
      href={href}
      target={!isMail ? '_blank' : '_self'}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isMail && (
        <p
          onClick={handleCopyEmail}
          className="transition-all duration-500 text-gray-300 z-[20] absolute text-sm hover:text-white"
          style={{
            opacity: hintIsShown ? 1 : 0,
            pointerEvents: hintIsShown ? 'auto' : 'none',
            top: forFooter ? '-20px' : '5px',
            paddingBottom: forFooter ? '5px' : '0',
            right: forFooter ? '0' : '30px',
            paddingRight: forFooter ? '0' : '5px',
          }}
        >
          {copied ? 'copied!' : 'copy'}
        </p>
      )}

      <Image
        src={src}
        alt={name}
        width={30}
        height={30}
        className="opacity-75 w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] hover:opacity-100 transition-opacity duration-300"
      />
    </Link>
  );
};

export default SocialMedia;
