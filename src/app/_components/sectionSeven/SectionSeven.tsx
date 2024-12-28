import React from 'react';
import HeadSection from '../headSection/headSection';
import Image from 'next/image';
import El from '../../../../public/images/el-sec7.svg';
interface Props {
  step: string;
  title: string;
}
const SectionSeven = () => {
  return (
    <div className="bg-[#030F1D]  h-[660px] ">
      <div className=" flex flex-col container pt-[80px] relative">
        <div className="absolute -bottom-12 left-[13%] max-w-[1280px] ">
          <Image src={El} alt="eleman" quality={75} width={1100} />
        </div>
        <HeadSection
          title="PARTNER, MERCHANT & Coins Support"
          className="w-fit"
        />
        <p className="text-white text-xl py-[32px]">
          Simple Steps for Seamless Payments
        </p>
        <p className="text-white text-base">
          Follow these easy steps to integrate NOVAPAY and start processing
          cryptocurrency transactions seamlessly.
        </p>
        <div className=" grid grid-cols-4 place-items-center   gap-x-[50px]">
          <Card step="1" title="Sign up and Complete KYC" />
          <Card step="2" title="Generate the API Key" />
          <Card step="3" title="Integrate it into your website" />
          <Card step="4" title="Process transactions seamlessly" />
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;

export const Card = ({ step, title }: Props) => {
  return (
    <div className="shadow-card h-[200px]   w-[200px] rounded-[80px] mt-[55px] backdrop-blur-xl">
      <div className="flex flex-col w-[200px] px-8 h-[168px]  justify-center">
        <p className="text-white text-lg">{step}</p>
        <p className="text-white text-sm pt-[8px]">{title}</p>
      </div>
    </div>
  );
};
