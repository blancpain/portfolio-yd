'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import LiIcon from './LiIcon';
import TimelineLine from './TimelineLine';

type DetailsProps = {
  degree: string;
  date: string;
  location: string;
  details: string;
};

const Details = ({ degree, date, location, details }: DetailsProps) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      className="mx-auto my-8 flex w-[60%] flex-col items-start justify-between first:mt-0 last:mb-0 md:w-[80%] md:p-6"
    >
      <LiIcon forwardedRef={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="font-bold text-2xl xs:text-lg capitalize sm:text-xl">
          {degree}&nbsp;
        </h3>
        <span className="font-medium text-dark/75 xs:text-sm capitalize dark:text-light/75">
          {date} | {location}
        </span>
        <p className="w-full font-medium md:text-sm">{details}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const listRef = useRef<HTMLUListElement>(null);

  return (
    <div className="my-64 md:mt-24 md:mb-24">
      <h2 className="mb-32 w-full text-center font-bold text-8xl xs:text-4xl md:mb-16 md:text-6xl">
        Education
      </h2>
      <div className="relative mx-auto w-[75%] md:w-full lg:w-[90%]">
        <TimelineLine listRef={listRef} />

        <ul
          ref={listRef}
          className="ml-0 flex w-full flex-col items-start lg:ml-4"
        >
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
