'use client';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import { GitHubIcon, LinkedInIcon } from './Icons';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import ThemeSwitch from './ThemeSwitch';

const CustomLink = ({
  href,
  title,
  className = '',
  ariaLabel,
}: {
  href: string;
  title: string;
  className?: string;
  ariaLabel?: string;
}) => {
  const currentPathName = usePathname();

  return (
    <Link
      href={href}
      className={`${className} group relative`}
      aria-label={ariaLabel}
    >
      {title}
      <span
        className={`ease absolute -bottom-0.5 left-0 inline-block h-[1px] bg-dark transition-[width]
        duration-300 group-hover:w-full dark:bg-light ${
          currentPathName === href ? 'w-full' : 'w-0'
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({
  href,
  title,
  className = '',
  ariaLabel,
  toggle,
}: {
  href: string;
  title: string;
  className?: string;
  ariaLabel?: string;
  toggle: () => void;
}) => {
  const currentPathName = usePathname();
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={`${className} group relative text-light dark:text-dark my-2`}
      onClick={handleClick}
      aria-label={ariaLabel}
    >
      {title}
      <span
        className={`ease absolute -bottom-0.5 left-0 inline-block h-[1px] bg-light
        transition-[width] duration-300 group-hover:w-full dark:bg-dark ${
          currentPathName === href ? 'w-full' : 'w-0'
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};
const NavBar = () => {
  const [isHamBurgerOpen, setIsHamBurgerOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleHamburgerMenu = () => {
    setIsHamBurgerOpen(!isHamBurgerOpen);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      modalRef.current &&
      e.target instanceof HTMLElement &&
      !modalRef.current.contains(e.target)
    ) {
      setIsHamBurgerOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header
      className="relative flex w-full items-center justify-between px-32 py-8 font-medium
        dark:text-light z-10 lg:px-16 md:px-12 sm:!px-8"
    >
      <button
        className="hidden items-center justify-center lg:flex lg:flex-col pt-2"
        onClick={toggleHamburgerMenu}
        aria-label="Toggle menu"
      >
        <span
          className={`block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out
          dark:bg-light ${
            isHamBurgerOpen ? 'translate-y-1 rotate-45' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`my-0.5 block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out
          dark:bg-light ${isHamBurgerOpen ? 'opacity-0' : 'opacity-100'}`}
        ></span>
        <span
          className={`block h-0.5 w-6 rounded-sm bg-dark transition-all duration-300 ease-out
          dark:bg-light ${
            isHamBurgerOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'
          }`}
        ></span>
      </button>

      <div className="flex w-full items-center justify-between lg:hidden">
        <nav>
          <CustomLink
            href="/"
            title="Home"
            className="mr-4"
            ariaLabel="Home page"
          />
          <CustomLink
            href="/about"
            title="About"
            className="mx-4"
            ariaLabel="About page"
          />
          <CustomLink
            href="/projects"
            title="Projects"
            className="ml-4"
            ariaLabel="Projects page"
          />
        </nav>
        <nav className="flex flex-wrap items-center justify-center">
          <motion.a
            href="https://github.com"
            aria-label="GitHub profile"
            target="_blank"
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="mr-3 w-6"
          >
            <GitHubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/yasdim"
            aria-label="LinkedIn profile"
            target="_blank"
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="w-6"
          >
            <LinkedInIcon />
          </motion.a>

          <button
            className={'ml-2 flex items-center justify-center rounded-full p-1'}
            aria-label="Toggle theme switch"
          >
            <ThemeSwitch />
          </button>
        </nav>
      </div>

      {isHamBurgerOpen ? (
        <motion.div
          className="fixed left-1/2 top-1/2 z-30 flex min-w-[70vw] -translate-x-1/2 -translate-y-1/2
            flex-col items-center justify-between rounded-lg bg-dark/90 py-32
            backdrop-blur-md dark:bg-light/75 large:hidden"
          initial={{ scale: 0, opacity: 0, x: '-50', y: '-50' }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          ref={modalRef}
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              toggle={toggleHamburgerMenu}
              ariaLabel="Home page"
            />
            <CustomMobileLink
              href="/about"
              title="About"
              toggle={toggleHamburgerMenu}
              ariaLabel="About page"
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              toggle={toggleHamburgerMenu}
              ariaLabel="Projects page"
            />
          </nav>
          <nav className="flex flex-wrap items-center justify-around mt-3 w-1/2">
            <motion.a
              href="https://github.com/blancpain"
              aria-label="GitHub profile"
              target="_blank"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.9,
              }}
              className="mr-3 w-6 sm:mx-1 bg-light rounded-full dark:bg-dark"
            >
              <GitHubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/yasdim/"
              aria-label="LinkedIn profile"
              target="_blank"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.9,
              }}
              className="w-6 sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>

            <button
              className={`ml-2 flex items-center justify-center rounded-full p-1 text-light dark:text-dark
                sm:mx-1`}
              aria-label="Toggle theme switch"
            >
              <ThemeSwitch />
            </button>
          </nav>
        </motion.div>
      ) : null}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
