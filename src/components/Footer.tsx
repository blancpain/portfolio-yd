import Link from 'next/link';
import Layout from './Layout';

const Footer = () => {
  return (
    <footer className="w-full border-dark border-t-2 border-solid py-6 xs:py-2 font-medium text-lg sm:text-base xl:py-0 dark:border-light dark:text-light">
      <Layout className="flex items-center justify-between py-4 lg:flex-col lg:gap-4">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center">
          Built with{' '}
          <span className="px-1 text-2xl text-primary dark:text-primaryDark">
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
