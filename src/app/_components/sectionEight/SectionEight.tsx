import React from 'react';
import HeadSection from '../headSection/headSection';
import CusotmButton from '../button/CusotmButton';
import './card.css';
import Image from 'next/image';
import Guard from '../../../../public/shapes/guard.svg';
import Identity from '../../../../public/shapes/identity.svg';
import Auth from '../../../../public/shapes/auth.svg';
interface CardProps {
  title: string;
  subTitle: string;
  icon: string;
  bgGradient: string;
}
const SectionEight = () => {
  return (
    <div className="bg-sectionEight  bg-cover bg-center  bg-no-repeat h-[771px] ">
      <div className="flex justify-between container ">
        <div className="max-w-[30%] flex flex-col pt-[80px] ">
          <Card
            bgGradient="card-gradient-pureple"
            icon={Guard}
            subTitle="Our dedicated fraud and security teams work to keep your money safe."
            title="GUARDED"
          />
          <Card
            bgGradient="card-gradient-green"
            icon={Identity}
            subTitle="Identifying fake and fraudulent users and blocking any type of fraudulent transactions using artificial intelligence."
            title="Identification"
          />
          <Card
            bgGradient="card-gradient-blue"
            icon={Auth}
            subTitle="Authentication of all NOVAPAY gateways that provides users with assurance for secure transactions."
            title="Authentication"
          />
        </div>
        <div className=" pt-[140px] w-[55%]">
          <HeadSection title="Security & Privacy of Users" className="w-fit" />
          <p className="text-white text-2xl pt-[32px]">
            Security is the top priority
          </p>
          <p className="text-white text-base py-[32px]">
            The NOVAPAY gateway prioritizes security as its main focus and
            continuously invests in implementing advanced security features to
            ensure peace of mind for its users.
          </p>
          <CusotmButton title="Referral To Friends " />
        </div>
      </div>
    </div>
  );
};

export default SectionEight;

export const Card = ({ bgGradient, icon, subTitle, title }: CardProps) => {
  return (
    <div
      className={`shadow-card h-[180px] w-[476px] rounded-3xl mb-4 ${bgGradient}`}
    >
      <div className="flex justify-between">
        <div className="w-[calc(100%-131px)] pl-8 py-4">
          <p className="text-white text-[32px] font-[900]">{title}</p>
          <p className="text-white text-sm">{subTitle}</p>
        </div>
        <div className="max-h-[176px]">
          <Image src={icon} alt="pic-i" />
        </div>
      </div>
    </div>
  );
};
