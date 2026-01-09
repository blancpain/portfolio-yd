'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }: { name: string; x: string; y: string }) => {
  return (
    <motion.div
      className="flex cursor-pointer items-center justify-center rounded-full font-semibold
        bg-dark text-light py-3 px-6 shadow-dark absolute dark:text-dark dark:bg-light
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent
        xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  // NOTE: workaround as window object not available initially, needs to be wrapped in useEffect
  const [isScreenLarge, setIsScreenLarge] = useState<boolean>(false);
  useEffect(() => {
    const checkScreenSize = () => {
      const screenSize = window.innerWidth > 3072;
      setIsScreenLarge(screenSize);
    };
    checkScreenSize();
  }, []);

  return (
    <>
      <h2 className="font-bold text-8xl mt-32 w-full text-center md:text-6xl">
        Skills
      </h2>
      <div
        className="w-full h-screen mt-72 relative flex items-center justify-center rounded-full
          bg-circularLight dark:bg-circularDark lg:h-[80vh] md:h-[70vh] sm:h-[60vh]
          xs:h-[50vh] xl:bg-circularLightXl xl:dark:bg-circularDarkXl
          lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:!bg-circularLightMd
          md:dark:!bg-circularDarkMd sm:!bg-circularLightSm sm:dark:!bg-circularDarkSm
          !max-w-[2500px] md:mt-24"
      >
        <motion.div
          className="flex cursor-pointer items-center justify-center rounded-full font-semibold
            bg-dark text-light p-8 shadow-dark dark:text-dark dark:bg-light lg:p-6 md:p-4
            xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Backend
        </motion.div>
        <Skill
          name="MongoDB"
          x={isScreenLarge ? '-20vw' : '-25vw'}
          y={isScreenLarge ? '1vw' : '2vw'}
        />
        <Skill
          name="RabbitMQ"
          x={isScreenLarge ? '-2.5vw' : '-5vw'}
          y={isScreenLarge ? '-5vw' : '-10vw'}
        />
        <Skill
          name="Rust"
          x={isScreenLarge ? '10vw' : '20vw'}
          y={isScreenLarge ? '3vw' : '6vw'}
        />
        <Skill
          name="GraphQL"
          x={isScreenLarge ? '-5vw' : '0vw'}
          y={isScreenLarge ? '8vw' : '12vw'}
        />
        <Skill
          name="Next.js"
          x={isScreenLarge ? '7.5vw' : '15vw'}
          y={isScreenLarge ? '-6vw' : '-12vw'}
        />
        <Skill
          name="PHP"
          x={isScreenLarge ? '15vw' : '29vw'}
          y={isScreenLarge ? '-2.5vw' : '-5vw'}
        />
        <Skill
          name="Node.js"
          x={isScreenLarge ? '-2.5vw' : '0vw'}
          y={isScreenLarge ? '-15vw' : '-20vw'}
        />
        <Skill
          name="SQL"
          x={isScreenLarge ? '-20vw' : '-25vw'}
          y={isScreenLarge ? '10vw' : '18vw'}
        />
        <Skill
          name="Docker"
          x={isScreenLarge ? '12.5vw' : '18vw'}
          y={isScreenLarge ? '10vw' : '18vw'}
        />
        <Skill
          name="Python"
          x={isScreenLarge ? '7.5vw' : '12vw'}
          y={isScreenLarge ? '15vw' : '25vw'}
        />
        <Skill
          name="Redis"
          x={isScreenLarge ? '-1vw' : '-2vw'}
          y={isScreenLarge ? '13vw' : '23vw'}
        />
        <Skill
          name="TypeScript"
          x={isScreenLarge ? '-2.5vw' : '-10vw'}
          y={isScreenLarge ? '-9.5vw' : '-25vw'}
        />
      </div>
    </>
  );
};

export default Skills;
