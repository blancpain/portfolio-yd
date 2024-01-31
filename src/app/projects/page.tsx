"use client";
import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { GitHubIcon } from "@/components/Icons";
import mangify from "../../../public/images/projects/mangify.gif";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

type FeaturedProjectProps = {
  type: string;
  title: string;
  summary: string;
  img: StaticImageData;
  link: string;
  gitHubLink: string;
};

type ProjectProps = {
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
}: FeaturedProjectProps) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 760px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link href={link} target="_blank" className="hover:underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>

        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={gitHubLink} target="_blank" className="w-10">
            <GitHubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark"
          >
            View {title}
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, gitHubLink }: ProjectProps) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
        href={link}
        target="_blank"
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
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link href={link} target="_blank" className="hover:underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            View
          </Link>
          <Link href={gitHubLink} target="_blank" className="w-8">
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
        <meta name="description" content="about page" />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="mangify"
                type="Featured Project"
                summary="Meal planning made easy. Search for recipes, add them to your meal plan, and generate a shopping list."
                link="https://mangify.org/"
                gitHubLink="https://github.com/blancpain/mangify"
                img={mangify}
              />
            </div>
            <div className="col-span-6">
              <Project
                title="mangify"
                type="Featured Project"
                link="https://mangify.org/"
                gitHubLink="https://github.com/blancpain/mangify"
                img={mangify}
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                title="mangify"
                type="Featured Project"
                link="https://mangify.org/"
                gitHubLink="https://github.com/blancpain/mangify"
                img={mangify}
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="mangify"
                type="Featured Project"
                summary="Meal planning made easy. Search for recipes, add them to your meal plan, and generate a shopping list."
                link="https://mangify.org/"
                gitHubLink="https://github.com/blancpain/mangify"
                img={mangify}
              />
            </div>
            <div className="col-span-6">
              <Project
                title="mangify"
                type="Featured Project"
                link="https://mangify.org/"
                gitHubLink="https://github.com/blancpain/mangify"
                img={mangify}
              />
            </div>
            <div className="col-span-6">
              <Project
                title="mangify"
                type="Featured Project"
                link="https://mangify.org/"
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
