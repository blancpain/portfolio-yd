'use client';
import Layout from '@/components/Layout';
import Image from 'next/image';
import codingSVG from '../../public/images/svgs/codingSVG.svg';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';
import ContactMe from '@/components/HireMe';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Yasen&apos; Portfolio</title>
        <meta name="portfolio site" content="portfolio site" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 lg:w-full lg:pb-3">
              <Image
                src={codingSVG}
                alt="Web developer coding"
                className="w-full h-auto md:!inline-block lg:hidden pr-8 md:pr-0"
                priority
                sizes="(max-width: 760px) 100vw,
                  (max-width: 1200px) 50vw,
                  50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Hi there 👋, I'm Yasen."
                className="!text-7xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl
                  sm:!text-3xl xs:!text-3xl"
              />
              <p className="my-4 text-base font-medium sm:text-sm">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects, showcasing my expertise in web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center sm:pb-4">
                <Link
                  href="/Yasen_Dimitrov_CV.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                    hover:bg-light hover:text-dark border-2 border-solid border-transparent
                    hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark
                    hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume
                  <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:y_dimitrov@ymail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light
                    md:text-base"
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
            className="w-full h-auto md:hidden 8xl:hidden"
          />
        </div>
      </main>
    </>
  );
}
