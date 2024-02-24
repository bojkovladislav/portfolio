import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import StarsCanvas from '@/components/main/StarsBackground';
import NavBar from '@/components/main/NavBar';
import Footer from '@/components/main/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio',
  description: "Vladyslav Boiko's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-x-hidden`}>
        <StarsCanvas />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
