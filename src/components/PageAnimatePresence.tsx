// NOTE: https://stackoverflow.com/questions/77691781/exit-animation-on-nextjs-14-framer-motion/77715364#77715364
'use client';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import FrozenRoute from './FrozenRoute';

type PageAnimatePresenceProps = {
  children: React.ReactNode;
};

const PageAnimatePresence = ({ children }: PageAnimatePresenceProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        <FrozenRoute>{children}</FrozenRoute>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageAnimatePresence;
