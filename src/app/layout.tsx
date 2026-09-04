import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import PageAnimatePresence from '@/components/PageAnimatePresence';
import { ScrollToHashElement } from '@/components/ScrollToHashElement';
import { Providers } from './prodiders';

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
      className="8xl:!p-0 8xl:!m-0 8xl:flex 8xl:flex-col 8xl:items-center"
    >
      <body
        className={`${monserrat.variable} min-h-screen w-full max-w-[3072px] bg-light font-mont dark:bg-dark`}
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
