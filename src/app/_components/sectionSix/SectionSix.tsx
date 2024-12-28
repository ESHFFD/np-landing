import React from 'react';
import HeadSection from '../headSection/headSection';

import SliderImage from "./swiper/SliderImage";

import BNB from "@images/coins/BNB.svg";
import Dai from "@images/coins/dai.svg";
import EHT from "@images/coins/ETH.svg";
import LinkCoin from "@images/coins/Link.svg";
import Shiba from "@images/coins/Shiba.svg";
import Ton from "@images/coins/Ton.svg";
import USDT from "@images/coins/USDT-Tether.svg";
import Dogs from "@images/coins/dogs-dogs-logo.svg";
import ETC from "@images/coins/etc.svg";
import Pol from "@images/coins/pol.svg";
import Uniswap from "@images/coins/uniswap.svg";

import coinbase from "@images/partners/coinbase.png";
import chainova from "@images/partners/chainova.webp";
import shahr from "@images/partners/shahr.webp";
import metaMast from "@images/partners/MetaMask.webp";

// import shahr from "@images/partners/shahr.webpp";
import shenasa from "@images/partners/shenasa.png";
import ton from "@images/partners/ton.png";
const listAllCoins = [
  BNB,
  Dai,
  EHT,
  LinkCoin,
  Shiba,
  Ton,
  USDT,
  Dogs,
  ETC,
  Pol,
  Uniswap,
];
const listAllMPartners = [chainova, coinbase, shahr, metaMast, shenasa, ton];
const SectionSix = () => {
  return (
    <div className="bg-[#E2E1EE] h-[769px] max-h-[770px]">
      <div className="flex justify-between container">
        <div className="max-h-[609px] pt-[80px] flex w-[58%] justify-evenly">
          <SliderImage
            array={listAllMPartners}
            title="Partners"
            bgColor="bg-secondary"
          />
          <SliderImage
            array={listAllCoins}
            title="COINS"
            bgColor="bg-primary"
          />
          <div></div>
        </div>
        <div className="w-[42%] pt-[80px]">
          <HeadSection
            title="PARTNER, MERCHANT & Coins Support"
            className="w-fit  !border-[#1D232E]"
            titleClassName="!text-[#0F1F39]"
          />
          <p className="text-[#0F1F39] text-xl py-8 .uppercase ">
            Our partners, empowering your cryptocurrency payment gateway
          </p>
          <p className="text-base">
            You can get to know the partners and merchants that utilize our
            cryptocurrency payment gateway and see how they can aid in the
            growth of your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
