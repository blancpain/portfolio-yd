'use client';
import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { GitHubIcon } from '@/components/Icons';
import mangify from '../../../public/images/projects/mangify.gif';
import recipeHub from '../../../public/images/projects/RecipeHub.png';
import { motion } from 'framer-motion';

const FramerImage = motion(Image);

type FeaturedProjectProps = {
  id: string;
  type: string;
  title: string;
  summary: string;
  img: StaticImageData;
  link?: string;
  gitHubLink?: string;
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
        href={link || '#'}
        target={link && !link.startsWith('mailto:') ? "_blank" : undefined}
        className={`w-1/2 overflow-hidden rounded-lg lg:w-full ${link ? 'cursor-pointer' : 'pointer-events-none cursor-default'}`}
        onClick={(e) => !link && e.preventDefault()}
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
          href={link || '#'}
          target={link && !link.startsWith('mailto:') ? "_blank" : undefined}
          className={`hover:underline-offset-2 ${!link ? 'pointer-events-none cursor-default' : ''}`}
          onClick={(e) => !link && e.preventDefault()}
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
            href={gitHubLink || '#'}
            target={gitHubLink && !gitHubLink.startsWith('mailto:') ? "_blank" : undefined}
            className={`w-10 ${!gitHubLink ? 'pointer-events-none cursor-default' : ''}`}
            onClick={(e) => !gitHubLink && e.preventDefault()}
            aria-label="Github"
          >
            <GitHubIcon />
          </Link>
          <Link
            href={link || '#'}
            target={link && !link.startsWith('mailto:') ? "_blank" : undefined}
            onClick={(e) => !link && e.preventDefault()}
            aria-label="View project"
            className={`ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light
              dark:text-dark sm:px-4 sm:text-base ${!link ? 'pointer-events-none cursor-default' : ''}`}
          >
            {link?.startsWith('mailto:') ? 'Request access' : `View ${title}`}
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
        href={link || '#'}
        target={link && !link.startsWith('mailto:') ? "_blank" : undefined}
        onClick={(e) => !link && e.preventDefault()}
        aria-label="View project"
        className={`w-full overflow-hidden rounded-lg ${link ? 'cursor-pointer' : 'pointer-events-none cursor-default'}`}
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
          href={link || '#'}
          target={link && !link.startsWith('mailto:') ? "_blank" : undefined}
          className={`hover:underline-offset-2 ${!link ? 'pointer-events-none cursor-default' : ''}`}
          onClick={(e) => !link && e.preventDefault()}
          aria-label="View project"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link || '#'}
            target={link && !link.startsWith('mailto:') ? "_blank" : undefined}
            className={`text-lg font-semibold underline md:text-base ${!link ? 'pointer-events-none cursor-default' : ''}`}
            onClick={(e) => !link && e.preventDefault()}
            aria-label="View project"
          >
            View
          </Link>
          <Link
            href={gitHubLink || '#'}
            target={gitHubLink && !gitHubLink.startsWith('mailto:') ? "_blank" : undefined}
            className={`w-8 md:w-6 ${!gitHubLink ? 'pointer-events-none cursor-default' : ''}`}
            onClick={(e) => !gitHubLink && e.preventDefault()}
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
                id="recipehub"
                title="recipehub"
                type="Featured Project"
                summary="A full-stack Next.js cooking app featuring blazing fast search with Meilisearch. Still under development, expected to go live soon. Stay tuned!"
                link="mailto:y_dimitrov@ymail.com?subject=Request%20Access%20RecipeHub"
                gitHubLink="mailto:y_dimitrov@ymail.com?subject=Request%20Access%20RecipeHub"
                img={recipeHub}
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                id="mangify"
                title="mangify"
                type="Featured Project"
                summary="A full-stack meal planning app written in TypeScript, implemented with React, Node, Express, and PostgreSQL."
                link="https://github.com/blancpain/mangify"
                gitHubLink="https://github.com/blancpain/mangify"
                img={mangify}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
