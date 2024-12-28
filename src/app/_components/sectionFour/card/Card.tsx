import React, { ReactNode } from 'react';
import './card.css';
interface Props {
  title: string;
  subtitle: string;
  icon: ReactNode;
}
const Card = ({ title, subtitle, icon }: Props) => {
  return (
    <div className=" relative items-center flex justify-center">
      <div className="glass-card absolute max-w-[390px] max-h-[195px] rounded-[16px] flex justify-center p-[16px]">
        <div className="flex flex-col items-center">
          <p className="text-base !font-[700] text-white">{title}</p>
          <p className="text-center text-[14px] py-[16px] font-[400] text-white">
            {subtitle}
          </p>
          {icon}
        </div>
        <div className="shadow-[0px_0px_12px_0px_#00FF7599] absolute shado bottom-0 bg-primary w-[87px] h-[5px] rounded-[2px]" />
      </div>

      <div className="w-[60px] h-[131px] rectangle-bg" />
    </div>
  );
};

export default Card;
// box-shadow: ;
