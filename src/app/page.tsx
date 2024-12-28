import SectionOne from './_components/sectionOne/SectionOne';
import SectionThirteen from './_components/sectionThirteen/SectionThirteen';
import SectionThree from './_components/sectionThree/SectionThree';
import SectionTwelve from './_components/sectionTwelve/SectionTwelve';
import SectionTwo from './_components/sectionTwo.tsx/SectionTwo';
import SectionEight from './_components/sectionEight/SectionEight';
import SectionFive from './_components/sectionFive/SectionFive';
import SectionFour from './_components/sectionFour/SectionFour';
import SecNine from './_components/sectionNine/sectionNine';
import SectionSeven from './_components/sectionSeven/SectionSeven';
import SectionSix from './_components/sectionSix/SectionSix';
import SectionEleven from './_components/sectionEleven/SectionEleven';
import { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },

          // Default options for specific types
          success: {
            duration: 3000,
          },
        }}
      />
      <SectionOne />
      <SectionTwo />
      <SectionThree />

      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SecNine />

      <SectionEleven />
      <SectionTwelve />
      <SectionThirteen />
    </>
  );
}
