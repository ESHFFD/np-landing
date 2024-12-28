"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Image, { StaticImageData } from "next/image";

interface Props {
  title?: string;
  array:StaticImageData [];
  bgColor: string;
}

const SliderImage = ({ array, title, bgColor }: Props) => {
  return (
    <div className="h-[609px] w-[180px] bg-[#FFFFFF40]  border-[1px] relative border-white rounded-[30px]">
      <div
        className={` absolute w-[180px] h-[131px] ${bgColor} rounded-[50px] -left-[1px] -top-5 shadow-[0px_0px_16px_0px_#FFFFFF80_inset]`}
      >
        <p className="text-md text-white w-full flex  items-center justify-center h-full">
          {title}
        </p>
      </div>
      <div className="mt-[146px]">
        <Swiper
          direction={"vertical"}
          spaceBetween={30}
          loop={true}
          freeMode={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          className="h-[435px] max-w-[140px] rounded-[24px]"
          slidesPerView={3}
        >
          {array.map((coin, i) => (
            <SwiperSlide
              key={`${ i+'title'}`}
              className="max-h-[126px] bg-[#FFFFFFA6] rounded-[24px]  "
            >
              <div className="flex items-center justify-center w-full h-full">
                <Image src={coin} alt="bnb" width={60} height={80} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderImage;
