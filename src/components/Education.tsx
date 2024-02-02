'use client';

import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import LiIcon from './LiIcon';

type DetailsProps = {
  degree: string;
  date: string;
  location: string;
  details: string;
};

const Details = ({ degree, date, location, details }: DetailsProps) => {
  const ref = useRef<HTMLLIElement | HTMLElement>(null);

  return (
    <li
      ref={ref as React.RefObject<HTMLLIElement>}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start
        justify-between md:w-[80%] md:p-6"
    >
      <LiIcon forwardedRef={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {degree}&nbsp;
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {date} | {location}
        </span>
        <p className="font-medium w-full md:text-sm">{details}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className="my-64 md:mt-24 md:mb-24">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px]
            md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start ml-0 lg:ml-4">
          <Details
            degree="Full Stack Open"
            date="2023-2023"
            location="University of Helsinki"
            details="Full stack web development course focusing on development with React, Redux, Node.js, PostgreSQL and MongoDB. More advanced topics include GraphQL, TypeScript, Docker, and end-to-end testing."
          />
          <Details
            degree="Master in International Business Law"
            date="2014-2015"
            location="University of Catolica"
            details="Master in International Business Law with a focus on finance."
          />
          <Details
            degree="Bachelor of Law"
            date="2010-2013"
            location="University of Manchester"
            details="Bachelor of Law, focusing on common law."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
