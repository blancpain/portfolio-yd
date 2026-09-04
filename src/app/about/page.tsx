'use client';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
/* eslint-disable react/no-unescaped-entities */
import AnimatedText from '@/components/AnimatedText';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Layout from '@/components/Layout';
import Skills from '@/components/Skills';
import profilePic from '../../../public/images/profile/personalPic.webp';

const AnimatedNumbers = ({ value }: { value: number }) => {
  const ref = useRef<HTMLElement>(null);
  const motionValue = useMotionValue(0);

  const springValue = useSpring(motionValue, {
    duration: 3000,
  });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest: number) => {
      if (ref.current && Number(latest.toFixed(0)) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}>0</span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>Yasen | About Page</title>
        <meta name="description" content="about page" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="A little bit about me..."
            className="!text-7xl xl:!text-6xl lg:!text-6xl sm:!text-6xl xs:!text-4xl mb-16 sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="md:!col-span-8 col-span-3 flex flex-col items-start justify-start md:order-2 xl:col-span-4">
              <h2 className="mb-4 font-bold text-dark/75 text-lg uppercase dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I'm <b>Yasen</b>, a backend engineer based in Sofia. I build
                large-scale, service-oriented systems and own features
                end-to-end: from architecture and API design through CI/CD,
                infrastructure, and production support.
              </p>
              <p className="my-4 font-medium">
                I keep full ownership of code quality, security, and
                architecture. I start from the problem and choose technology
                based on constraints, and I like explaining the trade-offs
                behind a decision as much as making it.
              </p>
              <p className="font-medium">
                My production experience spans Python microservices, REST and
                GraphQL APIs, containerized AWS workers, and billion-row data
                platforms, with a strong focus on performance, secure coding,
                and input validation. I'm currently deepening in Rust and C for
                systems and performance-critical work.
              </p>
            </div>

            <div className="md:!col-span-8 relative col-span-3 h-max rounded-2xl border-2 border-dark border-solid bg-light p-8 md:order-1 xl:col-span-4 dark:border-light dark:bg-dark">
              <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Yasen"
                className="h-auto w-full rounded-2xl"
                priority
                sizes="(max-width: 760px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-evenly md:order-3 xl:col-span-8 xl:flex-row xl:items-center">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl xs:text-4xl sm:text-5xl md:text-6xl">
                  <AnimatedNumbers value={30} />+
                </span>
                <h2 className="font-medium text-dark/75 text-xl xs:text-sm capitalize sm:text-base md:text-lg xl:text-center dark:text-light/75">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl xs:text-4xl sm:text-5xl md:text-6xl">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="font-medium text-dark/75 text-xl xs:text-sm capitalize sm:text-base md:text-lg xl:text-center dark:text-light/75">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
