import React from 'react';

interface Props {
  title: string;
  className?: string;
  titleClassName?: string;
}
const HeadSection = ({ title, className, titleClassName }: Props) => {
  return (
    <div
      className={`text-center border-[1.5px] border-primary px-8 py-4 rounded-[32px] ${className}`}
    >
      <span className={`text-white text-base ${titleClassName}`}>{title}</span>
    </div>
  );
};

export default HeadSection;
