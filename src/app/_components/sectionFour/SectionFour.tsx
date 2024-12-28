import React from 'react';
import Card from './card/Card';
import HeadSection from '../headSection/headSection';
import Wallet from '../svgComponent/Wallet';
import EWallet from '../svgComponent/EWallet';
import Time from '../svgComponent/Time';
import Qr from '../svgComponent/Qr';
import Shield from '../svgComponent/Shield';
import Dollar from '../svgComponent/Dollar';
const SectionFour = () => {
  return (
    <div className="bg-[#0F1F39] max-h-[760px]  relative ">
      <div className=" container py-[80px] flex flex-col ">
        <HeadSection title="Features" className="max-w-fit" />
        <p className="text-center text-2xl text-white my-[32px]">
          NOVAPAY FEATURES
        </p>
        <div className="w-full h-full mt-[48px]  ">
          <div className="grid grid-cols-3  gap-y-[90px]">
            <Card
              title="Instant Settlements"
              subtitle={'Real-time secure transactions for faster operations.'}
              icon={<Wallet />}
            />
            <Card
              title="Multiple Payment Methods"
              subtitle="Save thousands to millions of bucks by using single tool for different"
              icon={<EWallet />}
            />
            <Card
              title="Complete Business Control"
              subtitle="Real-time secure transactions for faster operations."
              icon={<Time />}
            />
            <Card
              title="Complete Business Control"
              subtitle="Real-time secure transactions for faster operations."
              icon={<Qr />}
            />
            <Card
              title="Complete Business Control"
              subtitle="Real-time secure transactions for faster operations."
              icon={<Shield />}
            />
            <Card
              title="Complete Business Control"
              subtitle="Real-time secure transactions for faster operations."
              icon={<Dollar />}
            />
          </div>
        </div>

        {/* <Image
          src={SecFoutBg}
          alt="svg"
          className="absolute  items-center"
          fill
        /> */}
      </div>
    </div>
  );
};

export default SectionFour;
