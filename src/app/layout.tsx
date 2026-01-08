import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Providers } from './prodiders';
import PageAnimatePresence from '@/components/PageAnimatePresence';
import { ScrollToHashElement } from '@/components/ScrollToHashElement';

const monserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});

export const metadata: Metadata = {
  title: "Yasen's Portfolio",
  description: "Yasen Dimitrov's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="8xl:flex 8xl:flex-col 8xl:items-center 8xl:!p-0 8xl:!m-0"
    >
      <body
        className={`${monserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen
        max-w-[3072px]`}
      >
        <Providers>
          <ScrollToHashElement />
          <NavBar />
          <PageAnimatePresence>{children}</PageAnimatePresence>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
