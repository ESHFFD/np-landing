import React, { ReactNode } from 'react';
import './card.css';
interface Props {
  icon: ReactNode;
  title: string;
  subTitle: string;
}
const CardDetail = ({ icon, subTitle, title }: Props) => {
  return (
    <div className="detail-card w-[260px] h-[260px] rounded-[32px] flex flex-col items-center pt-[24px] px-[16px]">
      <div className="min-h-[88px]">{icon}</div>
      <p className="text-white text-lg py-[16px]">{title}</p>
      <p className="text-white  text-sm text-center">{subTitle}</p>
    </div>
  );
};

export default CardDetail;
