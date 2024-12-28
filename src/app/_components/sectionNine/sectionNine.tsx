import React from 'react';
import HeadSection from '../headSection/headSection';
import Image from 'next/image';
import Done from '../../../../public/shapes/done.svg';
import CusotmButton from '../button/CusotmButton';
import STARTUP from '../../../../public/shapes/startup-1.svg';
import business from '../../../../public/shapes/business-2.svg';
import Enterprize from '../../../../public/shapes/enterprize-3.svg';
import { businessList, enterpriseList, startupList } from '@/constant/business';
interface CardProps {
  title: string;
  arrySubtitles: string[];

  icon: string;
  bgline?: string;
}
const SecNine = () => {
  return (
    <div className="bg-sectionNine bg-cover bg-center  bg-no-repeat h-[950px] max-h-[960px] ">
      <div className="container pt-[96px] flex flex-col items-center">
        <HeadSection title="Packages & Price" className="w-fit" />
        <div className="flex flex-col ">
          <p className="text-white text-2xl pt-8 uppercase text-center">
            Try Novapay at no cost for one year
          </p>
          <p className="text-white text-center py-[32px] text-base">
            With 1% cashback in your gateway currency for 6 months
          </p>
        </div>
        <div className="grid grid-cols-3 gap-x-2 w-fit  pt-8">
          <BussinessCard
            arrySubtitles={startupList}
            icon={STARTUP}
            title="Startup"
          />
          <BussinessCard
            arrySubtitles={businessList}
            icon={business}
            title="Business"
          />
          <BussinessCard
            arrySubtitles={enterpriseList}
            icon={Enterprize}
            title="Enterprize"
          />
        </div>
      </div>
    </div>
  );
};

export default SecNine;

export const BussinessCard = ({
  arrySubtitles,
  icon,
  title,

}: CardProps) => {
  return (
    <div
      className={`${
        title !== 'Business' ? 'bg-[#0F1F394D]' : 'bg-[#5956F599]'
      } backdrop-blur-[48px] max-h-[530px] rounded-[24px] p-4 max-w-[390px] w-[380px]`}
    >
      {/* logo */}
      <div className="w-[128px] flex items-center justify-center rounded-[16px] h-[128px] backdrop-blur-[32px] shadow-[0px_0px_3px_0px_#FFFFFF80_inset] bg-[#0F1F3999]">
        <Image src={icon} alt="img" width={96} height={96} />
      </div>
      <p className="py-[14px] text-white text-[60px] leading-[80px] font-[800] ">
        {title}
      </p>
      <p className="text-primary text-sm">{`Best Settings for ${title}`}</p>
      <div className="w-full h-[2px] bg-gradient-to-r from-[#00FF75] to-[#5956F5] my-[14px] " />
      <div className="  w-full mb-[48px]">
        {arrySubtitles.map((item, i) => (
          <div key={`${item + i}`} className="flex pb-[14px]  ">
            <p className="flex flex-1 text-white text-xs">{item}</p>
            <Image src={Done} alt="done" width={24} height={24} />
          </div>
        ))}
      </div>
      <CusotmButton title="CONTACT US" className="w-full py-5" />
    </div>
  );
};
