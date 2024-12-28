import Image from 'next/image';
import LOGO from '../../../../public/logo/Logo.svg';

const Footer = () => {
  return (
    <div className="bg-[#0F1F39] py-6">
      <div className="container flex justify-between">
        <div>
          <Image alt="logo" src={LOGO} />
        </div>
        <div className="text-md text-white">© 2024 novapay Inc.</div>
      </div>
    </div>
  );
};

export default Footer;
