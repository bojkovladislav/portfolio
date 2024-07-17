import Socials from '@/components/sub/Socials';
import { navbar } from '@/constants';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <div className="w-full py-2 sm:px-10 fixed top-0 shadow-lg shadow-[#2A0E61] bg-[#03001417] backdrop-blur-md z-50 flex items-center justify-center sm:justify-between">
      <div className="w-[100px] hidden sm:block" />
      <ul className="flex items-center gap-10 sm:gap-40 justify-center h-auto border border-[#7042f861] bg-[#0300145e] px-[30px] sm:px-[20px] py-[10px] rounded-full text-gray-200 ">
        {navbar.map(({ name, href }) => (
          <li key={name}>
            <Link
              href={href}
              className="text-white hover:text-yellow-200 text-sm sm:text-lg transition-all duration-300"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="hidden sm:block">
        <Socials />
      </div>
    </div>
  );
};

export default NavBar;
