import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from './_components/navbar/Navbar';
import Footer from './_components/footer/Footer';
import SectionFourteen from './_components/sectionFourteen/SectionFourteen';
import SectionOne from './_components/sectionOne/SectionOne';

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NovaPay',
  description: 'Crypto Payment',
  icons: {
    icon: '/images/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  antialiased `}>
        <Navbar />
        <div className="min-h-screen flex lg:hidden">
          <SectionOne />
        </div>

        <div className="hidden lg:block">
          <div className="min-h-screen ">{children}</div>
          <SectionFourteen />
          <Footer />
        </div>
      </body>
    </html>
  );
}
