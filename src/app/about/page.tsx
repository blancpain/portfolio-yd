'use client';
/* eslint-disable react/no-unescaped-entities */
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import profilePic from '../../../public/images/profile/personalPic.webp';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';

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

  return <span ref={ref}></span>;
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
            className="mb-16 !text-7xl xl:!text-6xl lg:!text-6xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2
                md:!col-span-8"
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I'm <b>Yasen</b>, a software developer. With over 4 years of
                professional experience in the field, I am always looking for
                new and innovative ways to bring exciting visions to life.
              </p>
              <p className="font-medium my-4">
                I firmly believe that coding is more than just writing a set of
                instructions - it's the art of solving problems and creating
                digital solutions that meet specific needs.
              </p>
              <p className="font-medium">
                I very much enjoy learning about new technologies, tinkering and
                working on different projects. Currently, I am learning Rust and
                looking to explore the world of systems programming.
              </p>
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light
                p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:!col-span-8"
            >
              <div
                className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark
                  dark:bg-light"
              />
              <Image
                src={profilePic}
                alt="Yasen"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 760px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>

            <div
              className="col-span-2 flex flex-col items-end justify-evenly xl:col-span-8 xl:flex-row
                xl:items-center md:order-3"
            >
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={30} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center
                    md:text-lg sm:text-base xs:text-sm"
                >
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center
                    md:text-lg sm:text-base xs:text-sm"
                >
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
