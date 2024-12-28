import type { Config } from 'tailwindcss';

interface ColorObject {
  [key: string]: string;
}

const myColors: ColorObject = {
  transparent: 'transparent',
  primary: '#00FF75',
  white: '#FFFFFF',
  'black-button': '#0F1F39',
  secondary: '#FF00D6',
  accent: '#5956F5',
};

export default {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: myColors,
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    extend: {
      backgroundImage: {
        sectionOne: "url('/images/sec1.svg')",
        sectionTwo: "url('/images/sec2.svg')",
        sectionThirteen: "url('/images/Navigation.webp')",
        sectionFive:"url('/images/sec5.svg')",
        sectionEight:"url('/images/sec8.webp')",
        sectionNine:"url('/images/sec9.svg')",
        sectionTwelve: "url('/images/section12.png')",
      },
      backgroundPosition: {
        '78': '78%',
        sectionFive: "url('/images/sec5.svg')",
        // sectionSeven: "url('/images/sec7.svg')",
        sectionEight: "url('/images/sec8.webp')",
        sectionNine: "url('/images/sec9.svg')",
      },
      fontSize: {
        xs: [
          '14px',
          {
            lineHeight: '21px',
            fontWeight: '400',
          },
        ],

        sm: [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: '600',
          },
        ],
        md: [
          '18px',
          {
            lineHeight: '27px',
            fontWeight: '500',
          },
        ],
        base: [
          '24px',
          {
            lineHeight: '36px',
            fontWeight: '400',
          },
        ],
        lg: [
          '32px',
          {
            lineHeight: '48px',
            fontWeight: '600',
          },
        ],
        xl: [
          '48px',
          {
            lineHeight: '64px',
            fontWeight: '800',
          },
        ],
        '2xl': [
          '56px',
          {
            lineHeight: '64px',
            fontWeight: '800',
          },
        ],
        '3xl': [
          '64px',
          {
            lineHeight: '96px',
            fontWeight: '800',
          },
        ],
        "40":[
          "40px",{
            lineHeight: '60px',
            fontWeight: '700',
          }
        ]
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      boxShadow: {
        card: '1px -2px 4px 0px #ff00d64d inset  ,   -1px 1px 4px 0px #00ff7580 inset',
        slider: '0px 0px 8px 0px #FFFFFFCC inset , 0px 0px 16px 0px #5956F526',
        startupCard:
          '1px 1px 2px 0px #FFFFFF4D inset , -1px -1px 2px 0px #5956F54D inset , -4px -4px 24px 0px #5956F526 inset , 4px 4px 24px 0px #FFFFFF26 inset',
        bussinessCard:
          '1px 1px 2px 0px #FFFFFF4D inset , -1px -1px 2px 0px #5956F54D inset , -4px -4px 24px 0px #5956F526 inset ,  4px 4px 24px 0px #FFFFFF26 inset',
        navbar:
          '0px 24px 40px 0px #020F0F26 ,0.5px 1px 1px 1px #00FF7526 inset , 0px -1px 1px 0px #00FF7526 inset ',
      },
    },
  },
  plugins: [],
} satisfies Config;
