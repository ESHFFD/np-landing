'use client';

import { useState } from 'react';
import logo from '../../../../../public/images/accordion.svg';
import Image from 'next/image';

type AccordionProps = {
  title: string;
  description: string;
};

const Accordion: React.FC<AccordionProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" rounded-lg overflow-hidden  bg-[#FFFFFF26] shadow-card backdrop-blur-[54px]">
      {/* Accordion Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-start items-center p-4 "
      >
        <span
          className={`font-bold  w-5 h-5 mr-3 rounded-sm ${isOpen ? 'bg-secondary' : 'bg-primary'}`}
        >
          {isOpen ? '-' : '+'}
        </span>
        <h3 className="text-base  text-white font-normal">{title}</h3>
      </button>

      {isOpen && (
        <>
          <div className=" bg-gradient-to-r from-[#00FF75] to-[#FF00D6] w-[200px] h-[2px] ml-4"></div>
          <div className="flex p-4 gap-3 justify-start align-middle items-center">
            <Image alt="bg" src={logo} />
            <p className="text-sm  text-white font-normal text-left">
              {description}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Accordion;
