import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
import Footer from '@/components/Footer';
import FooterBar from '@/components/FooterBar';
import WhatsAppButton from '@/components/WhatsAppButton';
config.autoAddCss = false; /* eslint-disable import/first */

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Agrossinos',
  description: 'A ponte para grandes negócios no agro.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />
        <FooterBar />
      </body>
    </html>
  );
}
