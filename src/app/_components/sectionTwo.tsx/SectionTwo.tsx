import Image from 'next/image';
import React from 'react';
import reqr from '../../../../public/shapes/req-right.svg';
import reql from '../../../../public/shapes/reqleft.svg';
import CusotmButton from '../button/CusotmButton';
const SectionTwo = () => {
  return (
    <div className="h-[580px] max-h-[580px]">
      <div className="relative  bg-sectionTwo bg-cover bg-center bg-no-repeat h-full   ">
        <div className="container h-full">
          <div className="absolute -top-[65px] left-0 ">
            <Image src={reqr} alt="rectangle" />
          </div>
          <div className="absolute -bottom-[100px] right-0 ">
            <Image src={reql} alt="rectangle" />
          </div>
          <div className="flex flex-col pt-[80px]   items-center">
            <div className=" max-w-[1180px]   text-center  justify-evenly h-full">
              <p className="text-3xl text-white">
                <span className="text-primary">Novapay</span> Tailored to Fit
                Your Business Needs
              </p>
              <p className="text-white text-lg pt-[10px]">
                Real-Time Settlements, Diverse Payment Options, and Total
                Business Control.
              </p>
              <CusotmButton className="mt-[66px]" title="Referral to friends" />
            </div>
          </div>

          {/* <Image src={reqr} alt="rectangle" /> */}
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
