"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import LiIcon from "./LiIcon";

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
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon forwardedRef={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{degree}&nbsp;</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {date} | {location}
        </span>
        <p className="font-medium w-full">{details}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>
      <div className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            degree="Bachelor Of Science In Computer Science"
            date="2016-2020"
            location="Massachusetts Institute Of Technology (MIT)"
            details="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence"
          />
          <Details
            degree="Bachelor Of Science In Computer Science"
            date="2016-2020"
            location="Massachusetts Institute Of Technology (MIT)"
            details="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence"
          />
          <Details
            degree="Bachelor Of Science In Computer Science"
            date="2016-2020"
            location="Massachusetts Institute Of Technology (MIT)"
            details="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
