import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });


export const metadata: Metadata = {
  title: '강원권 중고교 해킹교육 & CTF 대회',
  description: '강원권 중고교생을 위한 해킹교육 및 CTF 대회 정보 안내 페이지입니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
       <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  );
}