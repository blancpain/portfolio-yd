'use client';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import AnimatedText from '@/components/AnimatedText';
import { GitHubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import mangify from '../../../public/images/projects/mangify.gif';
import recipeHub from '../../../public/images/projects/RecipeHub.png';

const FramerImage = motion.create(Image);

type FeaturedProjectProps = {
  id: string;
  type: string;
  title: string;
  summary: string;
  img: StaticImageData;
  link?: string;
  gitHubLink?: string;
  unoptimized?: boolean;
};

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  gitHubLink,
  id,
  unoptimized = false,
}: FeaturedProjectProps) => {
  return (
    <article
      id={id}
      className="relative flex w-full items-center justify-between rounded-3xl xs:rounded-2xl rounded-br-2xl xs:rounded-br-3xl border border-dark border-solid bg-light p-12 xs:p-4 shadow-2xl lg:flex-col lg:px-8 dark:border-light dark:bg-dark"
    >
      <div className="absolute top-0 -right-3 xs:-right-2 -z-10 h-[103%] w-[101%] xs:w-full rounded-[2.5rem] xs:rounded-[1.5rem] rounded-br-3xl bg-dark sm:h-[102%] dark:bg-light" />
      <Link
        href={link || '#'}
        target={link && !link.startsWith('mailto:') ? '_blank' : undefined}
        className={`w-1/2 overflow-hidden rounded-lg lg:w-full ${link ? 'cursor-pointer' : 'pointer-events-none cursor-default'}`}
        onClick={(e) => !link && e.preventDefault()}
        aria-label="View project"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full rounded-sm"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          unoptimized={unoptimized}
          sizes="(max-width: 760px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>

      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pt-6 lg:pl-0">
        <span className="font-medium text-primary text-xl xs:text-base dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link || '#'}
          target={link && !link.startsWith('mailto:') ? '_blank' : undefined}
          className={`hover:underline-offset-2 ${!link ? 'pointer-events-none cursor-default' : ''}`}
          onClick={(e) => !link && e.preventDefault()}
          aria-label="View project"
        >
          <h2 className="my-2 w-full text-left font-bold text-4xl sm:text-2xl dark:text-light">
            {title}
          </h2>
        </Link>

        <p className="my-2 font-medium text-dark sm:text-sm dark:text-light">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={gitHubLink || '#'}
            target={
              gitHubLink && !gitHubLink.startsWith('mailto:')
                ? '_blank'
                : undefined
            }
            className={`w-10 ${!gitHubLink ? 'pointer-events-none cursor-default' : ''}`}
            onClick={(e) => !gitHubLink && e.preventDefault()}
            aria-label="Github"
          >
            <GitHubIcon />
          </Link>
          <Link
            href={link || '#'}
            target={link && !link.startsWith('mailto:') ? '_blank' : undefined}
            onClick={(e) => !link && e.preventDefault()}
            aria-label="View project"
            className={`ml-4 rounded-lg bg-dark p-2 px-6 font-semibold text-lg text-light sm:px-4 sm:text-base dark:bg-light dark:text-dark ${!link ? 'pointer-events-none cursor-default' : ''}`}
          >
            {link?.startsWith('mailto:') ? 'Request access' : `View ${title}`}
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

      <main className="mb-16 flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Check out some of my work!"
            className="!text-7xl xl:!text-6xl lg:!text-6xl sm:!tex-6xl xs:!text-4xl mb-6 sm:mb-4"
          />
          <p className="mx-auto mb-16 max-w-3xl text-center font-medium text-dark/75 sm:mb-8 md:text-sm dark:text-light/75">
            Side projects where I build the whole thing. Day-to-day I work on
            backend services and data platforms, which you can read about on the{' '}
            <Link
              href="/about"
              className="text-dark underline underline-offset-2 dark:text-light"
            >
              About page
            </Link>
            . I'm also exploring systems programming in Rust and C; that work is
            still early and will show up here once it's worth sharing.
          </p>

          <div className="lg:!gap-x-8 md:!gap-y-24 sm:!gap-x-0 xs:!gap-x-0 grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16">
            <div className="col-span-12">
              <FeaturedProject
                id="mangify"
                title="Mangify"
                type="Featured Project"
                summary="A full-stack Next.js recipes app featuring blazing fast search with Meilisearch. Live now but still under active development!"
                link="https://www.mangify.net"
                gitHubLink="mailto:y_dimitrov@ymail.com?subject=Request%20Access%20RecipeHub"
                img={recipeHub}
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                id="meal-planner"
                title="Meal Planner"
                type="Featured Project"
                summary="A meal planning app written in TypeScript, implemented with React, Node, Express, and PostgreSQL."
                link="https://github.com/blancpain/meal-planner"
                gitHubLink="https://github.com/blancpain/meal-planner"
                img={mangify}
                unoptimized
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
