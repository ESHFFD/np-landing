import Image from 'next/image';
import Accordion from '../general/Accordion/Accordion';
import HeadSection from '../headSection/headSection';
import  QusetionImage from '@images/section12.png'

type Item = { title: string; desc: string };
const SectionTwelve = () => {
  const AccordionList: Item[] = [
    {
      title: 'What cryptocurrencies does Novapay support?',
      desc: 'Novapay supports a wide range of cryptocurrencies, including popular ones like USDT, ETH, BNB, and over 15 additional digital currencies on top of 3 successful blockchains such as BNB smartchain, Ethereum, and Polygon.',
    },
    {
      title: 'What cryptocurrencies does Novapay support?',
      desc: 'Novapay supports a wide range of cryptocurrencies, including popular ones like USDT, ETH, BNB, and over 15 additional digital currencies on top of 3 successful blockchains such as BNB smartchain, Ethereum, and Polygon.',
    },
    {
      title: 'What cryptocurrencies does Novapay support?',
      desc: 'Novapay supports a wide range of cryptocurrencies, including popular ones like USDT, ETH, BNB, and over 15 additional digital currencies on top of 3 successful blockchains such as BNB smartchain, Ethereum, and Polygon.',
    },
    {
      title: 'What cryptocurrencies does Novapay support?',
      desc: 'Novapay supports a wide range of cryptocurrencies, including popular ones like USDT, ETH, BNB, and over 15 additional digital currencies on top of 3 successful blockchains such as BNB smartchain, Ethereum, and Polygon.',
    },
    {
      title: 'What cryptocurrencies does Novapay support?',
      desc: 'Novapay supports a wide range of cryptocurrencies, including popular ones like USDT, ETH, BNB, and over 15 additional digital currencies on top of 3 successful blockchains such as BNB smartchain, Ethereum, and Polygon.',
    },
    {
      title: 'What cryptocurrencies does Novapay support?',
      desc: 'Novapay supports a wide range of cryptocurrencies, including popular ones like USDT, ETH, BNB, and over 15 additional digital currencies on top of 3 successful blockchains such as BNB smartchain, Ethereum, and Polygon.',
    },
  ];
  return (
    <div className="    py-20 ">
      <div className=" container  bg-contain bg-no-repeat bg-right text-center flex flex-col gap-8">
        <div className="flex flex-start">
          <HeadSection
            title="Frequesntly Asked Questions"
            className="w-fit text-white"
          />
        </div>
        <div className='relative'>
        <h2 className="text-3xl font-semibold text-white">
          All you need to know about <br></br> NOVAPAY
        </h2>
        <div className="absolute -bottom-[280%] right-[10%] ">
          <Image src={QusetionImage} alt="eleman" quality={75}  />
        </div>
        </div>
        <div className="flex flex-col gap-2">
          {AccordionList.map((item: Item, index) => {
            return (
              <Accordion
                key={`${item.title}-${index}`}
                title={item.title}
                description={item.desc}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionTwelve;
