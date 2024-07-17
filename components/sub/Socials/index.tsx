import React from 'react';
import SocialMedia from '../SocialMedia';
import { socialMedias } from '@/constants';

const Socials = ({ forFooter }: { forFooter?: boolean }) => {
  return (
    <ul className="flex gap-5">
      {socialMedias.map(({ src, href, name }) => (
        <li key={name}>
          <SocialMedia
            src={src}
            href={href}
            name={name}
            forFooter={forFooter}
          />
        </li>
      ))}
    </ul>
  );
};

export default Socials;
