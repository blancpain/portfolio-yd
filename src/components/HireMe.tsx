import React from 'react';
import { CircularText } from './Icons';
import Link from 'next/link';

const ContactMe = () => {
  return (
    <div
      className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden
        md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:!right-0
        8xl:hidden"
    >
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <CircularText
          className={'fill-dark animate-spin-slow dark:fill-light'}
        />
        <Link
          href="mailto:y_dimitrov@ymai.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2
            -translate-y-1/2 bg-dark text-light shadow-md border border-slid border-dark
            w-20 h-20 rounded-full hover:bg-light hover:text-dark dark:bg-light
            dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
            md:w-12 md:h-12 md:text-[10px] font-semibold"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default ContactMe;
