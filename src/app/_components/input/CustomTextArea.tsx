import React, { TextareaHTMLAttributes } from 'react';

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string;
};

const CustomTextArea = ({ placeholder, className, ...rest }: TextAreaProps) => {
  return (
    <div className={`relative w-full  ${className} group  `}>
       <div className="group-hover:opacity-100 opacity-0 rounded-full w-[33px] absolute h-[33px] bg-[#ff001f99] top-[20px] left-[10px]" />
      <div className="  transition-all backdrop-blur-md bg-[#ff001f33]  w-full hover:shadow-[0px_0px_16px_0px_#ff001f99_inset]   rounded-[40px]">
        <textarea
          rows={5}
          placeholder={placeholder}
          className="bg-transparent text-white focus:outline-none focus:ring-0 flex w-full h-full items-center pl-[30px] mt-4 pt-4"
          {...rest}
        ></textarea>
      </div>
     
    </div>
  );
};


export default CustomTextArea;

