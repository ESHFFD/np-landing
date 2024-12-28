import Image from 'next/image';
import curveCube from '../../../../public/images/curveCube.svg';
import Telegram from '../../../../public/images/socials/telegram.svg';
import Instagram from '../../../../public/images/socials/instagram.svg';
import X from '../../../../public/images/socials/x.png';
import YouTube from '../../../../public/images/socials/youtube.svg';
import Link from 'next/link';
import GoTOTop from '../goToTop/GoTOTop';

const SectionFourteen = () => {
  return (
    <div className="bg-[#00FF7540] py-12">
      <div className="container flex justify-center align-middle items-center">
        <p className="text-base text-white font-semibold">GET IN TOUCH</p>
        <Image alt="bg" src={curveCube} />

        <div className="flex gap-5">
          <Link
            href="/your-x-destination"
            className="p-0  min-w-[10px] w-10 h-10 flex justify-center rounded-2xl bg-white hover:bg-gray-100"
          >
            <Image alt="bg" src={X} />
          </Link>
          <Link
            href="/your-telegram-destination"
            className="min-w-[10px] p-0  w-10 h-10 flex justify-center rounded-2xl bg-white hover:bg-gray-100"
          >
            <Image alt="bg" src={Telegram} />
          </Link>
          <Link
            href="/your-instagram-destination"
            className="min-w-[10px] p-0  w-10 h-10 flex justify-center rounded-2xl bg-white hover:bg-gray-100"
          >
            <Image alt="bg" src={Instagram} />
          </Link>
          <Link
            href="/your-destination"
            className="min-w-[10px] p-0  w-10 h-10 flex justify-center rounded-2xl bg-white hover:bg-gray-100"
          >
            <Image alt="bg" src={YouTube} />
          </Link>
        </div>
      </div>
          <div className='flex justify-end container h-[64px]'>
          <GoTOTop/>
          </div>
    </div>
  );
};

export default SectionFourteen;
