'use client';
import { motion } from 'framer-motion';

const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 right-full bottom-0 z-30 h-screen w-screen bg-primary dark:bg-primaryDark"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '100%' }}
        exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        className="fixed top-0 right-full bottom-0 z-20 h-screen w-screen bg-light dark:bg-dark"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '100%' }}
        transition={{ delay: 0.2, duration: 0.7, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        className="fixed top-0 right-full bottom-0 z-10 h-screen w-screen bg-dark dark:bg-light"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '100%' }}
        transition={{ delay: 0.4, duration: 0.7, ease: 'easeInOut' }}
      ></motion.div>
    </>
  );
};

export default Transition;
