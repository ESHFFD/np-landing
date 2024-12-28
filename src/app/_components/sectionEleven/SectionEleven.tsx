'use client';
import { useState } from 'react';
import CusotmButton from '../button/CusotmButton';
import CheckBox from '../checkbox/CheckBox';
import HeadSection from '../headSection/headSection';
import CustomInput from '../input/CustomInput';
import CustomTextArea from '../input/CustomTextArea';
import toast from 'react-hot-toast';
const url = 'https://novapay.darkube.app/api/v1/contact-us';
const SectionEleven = () => {
  const [fieldData, setFieldData] = useState({
    name: '',
    lastName: '',
    companyName: '',
    position: '',
    email: '',
    phoneNumber: '',
    comment: '',
  });
  const sendFormData = async () => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: fieldData.name,
        lastname: fieldData.lastName,
        companyName: fieldData.companyName,
        yourPosition: fieldData.position,
        emailAddress: fieldData.email,
        phoneNumber: fieldData.phoneNumber,
        comment: fieldData.comment,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === true) {
          setFieldData({
            name: '',
            lastName: '',
            companyName: '',
            position: '',
            email: '',
            phoneNumber: '',
            comment: '',
          });
          toast.success('request successfuly sent');
        }
        if (data.code == 400) {
          toast.error('All field is required');
        }
      })
      .catch((er) => console.log(er));
  };

  return (
    <div className=" bg-[#060E1C]   py-20 ">
      <div className=" container  flex flex-col gap-8">
        <div className="flex flex-start">
          <HeadSection title="CONTACT US" className="w-fit " />
        </div>
        <h2 className="text-3xl font-semibold text-white text-center">
          Empowering Your Transactions with <br></br>Modern Payment Solutions
        </h2>
        <p className="text-base font-normal text-white text-center">
          Contact us to get you acquainted with modern payment methods more
          quickly
        </p>

        <div className="w-100 grid grid-cols-2  gap-4 mt-8">
          <CustomInput
            value={fieldData.name}
            onChange={(e) =>
              setFieldData((prev) => ({ ...prev, name: e.target.value }))
            }
            placeholder="Name"
          />

          <CustomInput
            value={fieldData.lastName}
            onChange={(e) =>
              setFieldData((prev) => ({ ...prev, lastName: e.target.value }))
            }
            placeholder="Last name"
          />
          <CustomInput
            value={fieldData.companyName}
            onChange={(e) =>
              setFieldData((prev) => ({ ...prev, companyName: e.target.value }))
            }
            placeholder="Company name"
          />

          <CustomInput
            value={fieldData.position}
            onChange={(e) =>
              setFieldData((prev) => ({ ...prev, position: e.target.value }))
            }
            placeholder="Your position"
          />

          <CustomInput
            value={fieldData.email}
            onChange={(e) =>
              setFieldData((prev) => ({ ...prev, email: e.target.value }))
            }
            placeholder="Email address"
          />

          <CustomInput
            value={fieldData.phoneNumber}
            onChange={(e) =>
              setFieldData((prev) => ({ ...prev, phoneNumber: e.target.value }))
            }
            placeholder="Phone number"
          />
        </div>
        <div className="flex flex-col mb-12 gap-8">
          <CustomTextArea
            onChange={(e) =>
              setFieldData((prev) => ({ ...prev, comment: e.target.value }))
            }
            value={fieldData.comment}
            placeholder="Your comment"
          />
          <CheckBox label="I agree that NOVAPAY may contact me at the email above to obtain more information about my submission." />
        </div>

        <div className="flex text-center items-center justify-around align-middle">
          <CusotmButton onClick={sendFormData} title="Send Message" />
        </div>
      </div>
    </div>
  );
};

export default SectionEleven;
{
  /* <CheckBox label="I agree that NOVAPAY may contact me at the email above to obtain more information about my submission." /> */
}
