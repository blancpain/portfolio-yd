'use client';
import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { GitHubIcon } from '@/components/Icons';
import mangify from '../../../public/images/projects/mangify.gif';
import watchCo from '../../../public/images/projects/watchCo.gif';
import spaceVue from '../../../public/images/projects/spaceVue.gif';
import battleShip from '../../../public/images/projects/battleship.gif';
import { motion } from 'framer-motion';

const FramerImage = motion(Image);

type FeaturedProjectProps = {
  id: string;
  type: string;
  title: string;
  summary: string;
  img: StaticImageData;
  link: string;
  gitHubLink: string;
};

type ProjectProps = {
  id: string;
  type: string;
  title: string;
  img: StaticImageData;
  link: string;
  gitHubLink: string;
};

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  gitHubLink,
  id,
}: FeaturedProjectProps) => {
  return (
    <article
      id={id}
      className="w-full flex items-center justify-between rounded-3xl border border-solid
        border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark
        dark:border-light lg:flex-col lg:px-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
          rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full
          xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        aria-label="View project"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto rounded-sm"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 760px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline-offset-2"
          aria-label="View project"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>

        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={gitHubLink}
            target="_blank"
            className="w-10"
            aria-label="Github"
          >
            <GitHubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            aria-label="View project"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light
              dark:text-dark sm:px-4 sm:text-base"
          >
            View {title}
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, gitHubLink, id }: ProjectProps) => {
  return (
    <article
      id={id}
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid
        border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
          rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full
          xs:rounded-[1.5rem] md:-right-2 md:w-[101%] xs:h-[102%]"
      />
      <Link
        href={link}
        target="_blank"
        aria-label="View project"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline-offset-2"
          aria-label="View project"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
            aria-label="View project"
          >
            View
          </Link>
          <Link
            href={gitHubLink}
            target="_blank"
            className="w-8 md:w-6"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Yasen | Projects Page</title>
        <meta name="description" content="projects page" />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Check out some of my work!"
            className="mb-16 !text-7xl xl:!text-6xl lg:!text-6xl sm:mb-8 sm:!tex-6xl xs:!text-4xl"
          />

          <div
            className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:!gap-x-8 md:!gap-y-24
              sm:!gap-x-0 xs:!gap-x-0"
          >
            <div className="col-span-12">
              <FeaturedProject
                id="mangify"
                title="mangify"
                type="Featured Project"
                summary="A full-stack meal planning app written in TypeScript, implemented with React, Node, Express, and PostgreSQL."
                link="https://mangify.org/"
                gitHubLink="https://github.com/blancpain/mangify"
                img={mangify}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                id="watchCo"
                title="watchCo"
                type="Project"
                link="https://blancpain.github.io/shopping-cart/"
                gitHubLink="https://github.com/blancpain/shopping-cart"
                img={watchCo}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                id="battleship"
                title="battleship"
                type="Project"
                link="https://blancpain.github.io/battleship/"
                gitHubLink="https://github.com/blancpain/battleship"
                img={battleShip}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                id="spaceVue"
                title="spaceVue"
                type="Featured Project"
                summary="An interactive visualization of the solar system written in TypeScript and implemented with Vue, Firebase and NASA APIs."
                link="https://blancpain.github.io/space-vue/#/"
                gitHubLink="https://github.com/blancpain/space-vue"
                img={spaceVue}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
