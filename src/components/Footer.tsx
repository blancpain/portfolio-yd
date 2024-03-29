import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light
        dark:border-light sm:text-base py-6 xl:py-0 xs:py-2"
    >
      <Layout className="py-4 flex items-center justify-between lg:flex-col lg:gap-4">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center">
          Built with{' '}
          <span className="text-primary text-2xl px-1 dark:text-primaryDark">
            &#9825;
          </span>
          by&nbsp;
          <Link
            href="https://github.com/blancpain"
            className="underline underline-offset-2"
          >
            Yasen Dimitrov
          </Link>
        </div>
        <Link
          href="https://github.com/blancpain"
          target="_blank"
          className="underline underline-offset-2"
        >
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
