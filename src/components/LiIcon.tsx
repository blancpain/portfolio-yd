'use client';
import { motion, useScroll } from 'framer-motion';

type LiIconProps = {
  forwardedRef: React.RefObject<HTMLElement>;
};

const LiIcon: React.FC<LiIconProps> = ({ forwardedRef }) => {
  const { scrollYProgress } = useScroll({
    target: forwardedRef,
    offset: ['center end', 'center center'],
  });

  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light">
      <svg width="75" height="75" viewBox="0 0 100 100" className="-rotate-90">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary dark:stroke-primaryDark stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-light dark:fill-dark"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="stroke-1 animate-pulse fill-primary dark:fill-primaryDark"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
