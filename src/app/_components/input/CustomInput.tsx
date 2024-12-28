import React, { InputHTMLAttributes } from 'react';
type inputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};
const CustomInput = ({ type, placeholder, className, ...rest }: inputProps) => {
  return (
    <div className={` relative w-full h-[56px] ${className}  group`}>
      <div className="group-hover:opacity-100  absolute opacity-0 rounded-full  w-[33px] h-[33px]   bottom-[10px]  left-[1px] bg-primary" />
      <div className="green-input  hover:bg-[#00FF7533]  transition-all backdrop-blur-md  w-full  h-[56px] rounded-[40px]">
        <input
          type={type}
          placeholder={placeholder}
          className="bg-transparent text-white focus:outline-none focus:ring-0 flex  w-full h-full items-center pl-[30px]"
          {...rest}
        ></input>
      </div>
    </div>
  );
};

export default CustomInput;
