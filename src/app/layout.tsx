import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: "Alex's Portfolio",
  description: 'Expert Front End Developer',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={clsx(poppins.variable, 'antialiased')}>{children}</body>
    </html>
  );
}
