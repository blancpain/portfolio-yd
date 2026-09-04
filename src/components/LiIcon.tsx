'use client';
import { motion, useScroll } from 'framer-motion';

type LiIconProps = {
  forwardedRef: React.RefObject<HTMLElement | null>;
};

const LiIcon: React.FC<LiIconProps> = ({ forwardedRef }) => {
  const { scrollYProgress } = useScroll({
    target: forwardedRef,
    offset: ['center end', 'center center'],
  });

  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light">
      <svg
        aria-hidden="true"
        width="75"
        height="75"
        viewBox="0 0 100 100"
        className="xs:h-[40px] xs:w-[40px] -rotate-90 md:h-[60px] md:w-[60px]"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className="fill-none stroke-1 stroke-primary dark:stroke-primaryDark"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="fill-light stroke-[5px] dark:fill-dark"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse fill-primary stroke-1 motion-reduce:animate-none dark:fill-primaryDark"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
