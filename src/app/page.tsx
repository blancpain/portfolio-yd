'use client';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedText from '@/components/AnimatedText';
import ContactMe from '@/components/HireMe';
import { LinkArrow } from '@/components/Icons';
import Layout from '@/components/Layout';
import codingSVG from '../../public/images/svgs/codingSVG.svg';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Yasen&apos; Portfolio</title>
        <meta name="portfolio site" content="portfolio site" />
      </Head>
      <main className="flex min-h-screen w-full items-center text-dark dark:text-light">
        <Layout className="pt-0 sm:pt-8 md:pt-16">
          <div className="flex w-full items-center justify-between lg:flex-col">
            <div className="w-1/2 lg:w-full lg:pb-3">
              <Image
                src={codingSVG}
                alt="Web developer coding"
                className="md:!inline-block h-auto w-full pr-8 md:pr-0 lg:hidden"
                priority
                sizes="(max-width: 760px) 100vw,
                  (max-width: 1200px) 50vw,
                  50vw"
              />
            </div>
            <div className="flex w-1/2 flex-col items-start self-center lg:w-full lg:items-center lg:text-center">
              <AnimatedText
                text="Hi there 👋, I'm Yasen."
                className="!text-7xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl xs:!text-3xl"
              />
              <p className="my-4 font-medium text-base sm:text-sm">
                Backend engineer building large-scale, service-oriented systems.
                I own features from architecture through production and work
                AI-natively, with full ownership of quality and security.
              </p>
              <div className="mt-2 flex items-center self-start sm:pb-4 lg:self-center">
                <Link
                  href="/Yasen_Dimitrov_CV.pdf"
                  target="_blank"
                  className="flex items-center rounded-lg border-2 border-transparent border-solid bg-dark p-2.5 px-6 font-semibold text-lg text-light hover:border-dark hover:bg-light hover:text-dark md:p-2 md:px-4 md:text-base dark:bg-light dark:text-dark hover:dark:border-light hover:dark:bg-dark hover:dark:text-light"
                  download={true}
                >
                  Resume
                  <LinkArrow className="ml-1 w-6" />
                </Link>
                <Link
                  href="mailto:y_dimitrov@ymail.com"
                  target="_blank"
                  className="ml-4 font-medium text-dark text-lg capitalize underline md:text-base dark:text-light"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <ContactMe />
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image
            src={lightBulb}
            alt="lightbulb icon"
            className="8xl:hidden h-auto w-full md:hidden"
          />
        </div>
      </main>
    </>
  );
}
