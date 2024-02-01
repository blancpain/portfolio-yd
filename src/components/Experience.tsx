'use client';

import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import LiIcon from './LiIcon';

type DetailsProps = {
  position: string;
  company: string;
  companyLink: string;
  lengthOfEmployment: string;
  address: string;
  details: string;
};

const Details = ({
  position,
  company,
  companyLink,
  lengthOfEmployment,
  address,
  details,
}: DetailsProps) => {
  const ref = useRef<HTMLLIElement | HTMLElement>(null);

  return (
    <li
      ref={ref as React.RefObject<HTMLLIElement>}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center
        justify-between md:w[80%]"
    >
      <LiIcon forwardedRef={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {lengthOfEmployment} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{details}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px]
            md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            details="Worked on a team responsible for developing new features for Google's
search engine, including improving the accuracy and relevance of search results and
developing new tools for data analysis and visualization.
"
            lengthOfEmployment="2022-Present"
            address="Mountain View, CA"
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            details="Worked on a team responsible for developing new features for Google's
search engine, including improving the accuracy and relevance of search results and
developing new tools for data analysis and visualization.
"
            lengthOfEmployment="2022-Present"
            address="Mountain View, CA"
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            details="Worked on a team responsible for developing new features for Google's
search engine, including improving the accuracy and relevance of search results and
developing new tools for data analysis and visualization.
"
            lengthOfEmployment="2022-Present"
            address="Mountain View, CA"
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            details="Worked on a team responsible for developing new features for Google's
search engine, including improving the accuracy and relevance of search results and
developing new tools for data analysis and visualization.
"
            lengthOfEmployment="2022-Present"
            address="Mountain View, CA"
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            details="Worked on a team responsible for developing new features for Google's
search engine, including improving the accuracy and relevance of search results and
developing new tools for data analysis and visualization.
"
            lengthOfEmployment="2022-Present"
            address="Mountain View, CA"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;

// Intern @Facebook
// Summer 2021 | Menlo Park, CA.
// Worked on a team responsible for developing a new mobile app feature that allowed users to create and
// share short-form video content, including designing and implementing a new user interface and developing
// the backend infrastructure to support the feature.
//
// Software Developer @Amazon
// 2020-2021 | Seattle, WA.
// Worked on a team responsible for developing Amazon's mobile app, including implementing new features such
// as product recommendations and user reviews, and optimizing the app's performance and reliability.
//
// Software Developer Intern @Microsoft
// Summer 2019 | Redmond, WA.
// Worked on a team responsible for developing new features for Microsoft's Windows operating system,
// including implementing a new user interface for a system settings panel and optimizing the performance of
// a core system component.
//
// Teaching Assistant @MIT
// Fall 2018 | Massachusetts Ave, Cambridge, MA.
// Assisted in teaching a course on computer programming, held office hours to help students with assignments,
// and graded exams and assignments.
