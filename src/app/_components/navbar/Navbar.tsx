import { navItem } from '@/constant/navbarItem';
import React from 'react';
import CusotmButton from '../button/CusotmButton';
import Image from 'next/image';
import LOGO from '../../../../public/logo/Logo.svg';
import Hamburger from '@shapes/hamburger.svg';
import Login from './Login';
const Navbar = () => {
  return (
    <div className="w-full">
      {/* <div className="fixed top-0 bg-white z-50 w-full h-full"></div> */}
      <header className=" fixed right-0 z-10 top-10 w-full   ">
        <nav className="container">
          <div className=" flex  bg-[#0F1F3999]  backdrop-blur-lg  shadow-navbar w-full h-[72px] rounded-[40px]">
            {/* <div className="t w-full h-full rounded-3xl"></div> */}
            <div className="flex justify-between items-center p-6 w-full relative">
              <div className=" w-28 h-[73px] opacity-[8%] absolute bg-gradient-to-r to-transparent from-[#00ff75] rounded-full left-0 top-0  " />
              <div>
                <Image alt="logo" src={LOGO} priority={true} width={210} />
              </div>
              <div className=" hidden lg:flex gap-4">
                {navItem.map((item, i) => (
                  <span className="text-sm text-white" key={`${item + i}`}>
                    {item.toUpperCase()}
                  </span>
                ))}
              </div>
              {/* hamburger menu */}
              <div className="lg:hidden flex ml-auto justify-end items-end cursor-pointer">
                <Image src={Hamburger} alt="hamburger" width={32} height={32} />
              </div>
              {/* menu */}

              <div className="hidden lg:flex gap-x-3">
                <CusotmButton variant="outline" title="FA" />
                <Login />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
