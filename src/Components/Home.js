import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="flex items-start h-screen">
      <motion.div
        className="space-y-8 mt-32"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ opacity: { duration: 0.7 }, duration: 0.6 }}
      >
        <div className="text-primary font-bold uppercase text-sm sm:text-base">
          About me
        </div>
        <div className="font-bold text-3xl sm:text-4xl">
          Writing code since 2018
        </div>
        <div className="font-semibold sm:text-lg text-secondary">
          Lorem Ipsum is simply dummy text of the printing and type setting
          <br className="hidden md:block"></br>
          industry. Lorem Ipsum has been the industry's standard dummy
          <br className="hidden md:block"></br>
          text eversince the 1500s.
        </div>
        <div className="flex justify-end items-center">
          <div className="w-12 sm:w-24 h-0.5 rounded mr-3 bg-gradient-to-l from-white"></div>
          <div className="italic text-lg">Ibrahim Imran</div>
        </div>
      </motion.div>
    </div>
  );
}
