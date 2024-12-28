import Link from 'next/link';
import CusotmButton from '../button/CusotmButton';
import HeadSection from '../headSection/headSection';

const SectionThirteen = () => {
  return (
    <div className="bg-sectionThirteen bg-no-repeat bg-cover bg-center py-20">
      <div className="container  text-center flex flex-col gap-8">
        <div className="flex flex-start justify-start">
          <HeadSection
            title="Vision & Mission"
            className="w-fit "
            titleClassName="!text-[#0F1F39]"
          />
        </div>
        <h3 className="text-2xl font-extrabold">Global Development</h3>

        <div className=" justify-center ">
          <p className="text-base text-[#0F1F39]">
            <strong>Our mission </strong>
            is to provide a secure and efficient payment gateway for users and
            businesses, enabling them to easily and confidently utilize
            cryptocurrencies. We aim to facilitate financial transactions in the
            digital world and enhance trust in blockchain technology.
          </p>

          <p className="text-base text-[#0F1F39]">
            <strong>Our vision </strong>
            is to become the market leader in providing payment services using
            cryptocurrencies. We strive to create a sustainable and innovative
            ecosystem that allows users and businesses to easily and confidently
            use cryptocurrencies in their transactions.
          </p>
        </div>
        <div>
          <Link href={'https://novapay.solutions/merchant'}>
            <CusotmButton
              variant="primary"
              title="Join this mission"
              className="max-w-[200px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionThirteen;
