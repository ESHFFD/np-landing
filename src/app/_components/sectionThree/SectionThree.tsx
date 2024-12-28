import HeadSection from '../headSection/headSection';
import Image from 'next/image';
import SEC3_BG from '../../../../public/images/sec3-3.png';
import CusotmButton from '../button/CusotmButton';
import CustomInput from '../input/CustomInput';

const SectionThree = () => {
  return (
    <div className="bg-[#060E1C] max-h-[808px]">
      <div className="w-full flex  justify-between container pt-[102px]">
        <div className="flex flex-col max-w-[590px]">
          <HeadSection
            className="max-w-[538px]"
            title="Modular Gateway For Your Business"
          />
          <p className="text-[40px] font-[800] leading-[64px] text-white pt-[32px]">
            A <span className="text-primary">comprehensive</span> platform in
            the field of payments and cryptocurrency
            <span className="text-primary">gateways</span>
          </p>
          <p className="pt-[32px] text-base text-white">
            A complete gateway based on your platform, with the capability to
            generate <span className="text-primary">time-limited</span> payment
            links.
          </p>
          <p className="mt-[56px] text-md text-white">
            Stay informed about any updates that NOVAPAY makes.
          </p>
          <div className="flex items-center align-middle justify-between my-[32px]">
            {/* input */}
            {/* <CustomInput /> */}
            <CustomInput placeholder="Enter your email" className='max-w-[70%]' />
            {/* <div className="circle">
              <div className="blur-div"></div>
            </div> */}
            <CusotmButton title="Notify Me" />
          </div>
        </div>
        <div className="">
          <Image src={SEC3_BG} alt="bg-3" />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
