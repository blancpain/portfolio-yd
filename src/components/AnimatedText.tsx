'use client';
import { motion } from 'framer-motion';

type Props = {
  text: string;
  className?: string;
};

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className = '' }: Props) => {
  return (
    <div className="mx-auto flex w-full items-center justify-center overflow-hidden py-2 text-center sm:py-0">
      <motion.h1
        className={`inline-block w-full font-bold text-8xl text-dark dark:text-light ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            // biome-ignore lint/suspicious/noArrayIndexKey: static text, words can repeat
            key={`${word}-${index}`}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
