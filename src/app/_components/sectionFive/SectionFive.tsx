import React from 'react';
import HeadSection from '../headSection/headSection';
import CardDetail from './card/CardDetail';
import World from '../svgComponent/World';
import Pos from '../svgComponent/Pos';
import QrCode from '../svgComponent/QrCode';
import Link from '../svgComponent/Link';

const SectionFive = () => {
  return (
    <div className="">
      <div className="bg-sectionFive max-h-[695px] h-[695px] bg-center bg-no-repeat bg-cover ">
        <div className="flex justify-between container py-[81px]">
          <div className="w-[50%]">
            <HeadSection title="PAYMENT METHODS" className="w-fit" />
            <p className="text-2xl text-white py-[32px]">
              Diverse payment methods for your convenience
            </p>
            <p className=" text-base text-white">
              Here you can familiarize yourself with our various payment methods
              and easily utilize them for your business needs.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 ">
            <CardDetail
              title="GATEWAY"
              subTitle="Secure and reliable payment gateway"
              icon={<World />}
            />
            <CardDetail
              title="POS"
              subTitle="Easy and fast payment with POS devices"
              icon={<Pos />}
            />
            <CardDetail
              title="QR-CODE"
              subTitle="Payment with a simple scan QR Code"
              icon={<QrCode />}
            />
            <CardDetail
              title="PAYMENT LINK"
              subTitle="Payment link, convenience at your fingertips"
              icon={<Link />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
