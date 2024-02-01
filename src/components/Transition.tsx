'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Transition = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primary
          dark:bg-primaryDark"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '100%' }}
        exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light dark:bg-dark"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '100%' }}
        transition={{ delay: 0.2, duration: 0.7, ease: 'easeInOut' }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark dark:bg-light"
        initial={{ x: '100%', width: '100%' }}
        animate={{ x: '0%', width: '100%' }}
        transition={{ delay: 0.4, duration: 0.7, ease: 'easeInOut' }}
      ></motion.div>
    </>
  );
};

export default Transition;
