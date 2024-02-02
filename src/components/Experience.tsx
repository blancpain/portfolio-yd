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
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start
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
    <div className="my-64 md:mt-24 md:mb-24">
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
            position="Full Stack Web Developer"
            company="Self Employed"
            companyLink="www.google.com"
            details="Created and maintained a wide variety of web applications, written in TypeScript or JavaScript. 
            Worked with a range of technologies, including React and Vue for front-end development, and Node.js and Express for back-end development. 
            Explored full-stack development using SQL and NoSQL databases, including PostgreSQL and MongoDB. Delved into DevOps, using Docker and CI/CD pipelines to deploy and manage applications."
            lengthOfEmployment="2022-Present"
            address="Sofia, Bulgaria"
          />
          <Details
            position="Technical/Business Consultant"
            company="FactSet"
            companyLink="https://www.factset.com/"
            details="Interacted directly with client databases through SQL queries to load, extract, and refine financial data. 
            Led client implementations of a fintech software solution, contributing to over 98% client retention."
            lengthOfEmployment="2022-Present"
            address="Sofia, Bulgaria"
          />
          <Details
            position="Business Development Manager"
            company="HSBC"
            companyLink="https://www.hsbc.com/"
            details="Built the annual operating plan and financial targets for the Global Wealth team, covering over 30 markets. 
            Coordinated the ESG strategy for the team, including the development of new ESG-centered financial products and the implementation of a new sustainability framework."
            lengthOfEmployment="2016-2021"
            address="London, UK"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
