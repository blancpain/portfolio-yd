import Link from 'next/link';
import { CircularText } from './Icons';

const ContactMe = () => {
  return (
    <div className="sm:!right-5 fixed bottom-4 left-4 flex 8xl:hidden items-center justify-center md:absolute md:top-0 md:right-8 md:bottom-auto md:left-auto">
      <div className="relative flex h-auto w-48 items-center justify-center md:w-24">
        <CircularText
          className={
            'animate-spin-slow fill-dark motion-reduce:animate-none dark:fill-light'
          }
        />
        <Link
          href="mailto:y_dimitrov@ymai.com"
          className="absolute top-1/2 left-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-dark border-slid bg-dark font-semibold text-light shadow-md hover:bg-light hover:text-dark md:h-12 md:w-12 md:text-[10px] dark:bg-light dark:text-dark hover:dark:border-light hover:dark:bg-dark hover:dark:text-light"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default ContactMe;
