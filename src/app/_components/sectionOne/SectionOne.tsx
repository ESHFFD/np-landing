'use client';
import Image from 'next/image';
import React from 'react';
import BGSection from '../../../../public/images/secbg1.webp';
import CusotmButton from '../button/CusotmButton';
import { v4 as uuidv4 } from 'uuid';

const SectionOne = () => {
  const url =
    'https://novapay.solutions/api/v1/cryptoTransaction/CreateCryptoOrder';
  const data = {
    merchantId: 2,
    gatewayId: 20,
    merchantTrxId: uuidv4(),
    fiatAmount: 1,
  };
  const callApi = async () => {
    localStorage.setItem(
      'nova-gateway-lang',
      JSON.stringify({ selectedLang: 'en' })
    );
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': '6ca47199-4372-4cdf-bd91-c410c08c83d0',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);

        window.open(`https://novapay.solutions/gateway/${data.data.code}`);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  return (
    <div className="lg:h-[775px] lg:max-h-[800px]  relative  ">
      <div className="lg:bg-sectionOne bg-no-repeat bg-cover bg-center h-full">
        <div className="p-[10px] lg:container flex pt-[120px] w-full flex-col lg:flex-row lg:justify-between lg:items-center">
          <div className="lg:max-w-[50%]">
            <p className="text-white pt-2  text-xs lg:text-md">
              A New Experience for Businesses and Customers!
            </p>
            <p className="text-white text-40 lg:text-2xl mt-[10px] ">
              The Most <span className="text-primary">Reliable Payment</span>{' '}
              Solution Platform for Your Business Needs
            </p>
            <p className="text-md text-white mt-[25px]">
              Try NOVAPAY and confidently entrust your transactions to us.
            </p>
            <CusotmButton
              onClick={callApi}
              className="mt-[10px] hidden lg:block"
              title="TRY NOVAPAY GATEWAY DEMO"
            />
          </div>
          <div>
            <Image alt="bg" src={BGSection} priority={true} />
          </div>

          <CusotmButton
            onClick={callApi}
            className="my-3 w-full lg:mt-[10px] lg:my-0 lg:hidden "
            title="TRY NOVAPAY GATEWAY DEMO"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
