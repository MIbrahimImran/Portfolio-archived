import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="flex items-center h-screen">
      <div className="space-y-36">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ opacity: { duration: 0.7 }, duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-primary font-bold uppercase text-sm sm:text-base">
            Intro
          </div>
          <div className="font-bold text-3xl sm:text-4xl">About Me</div>
          <div className="font-semibold sm:text-lg text-secondary">
            Lorem Ipsum is simply dummy text of the printing and type setting
            <br className="hidden md:block"></br>
            industry. Lorem Ipsum has been the industry's standard dummy
            <br className="hidden md:block"></br>
            text eversince the 1500s.
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ opacity: { duration: 0.7 }, duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-primary font-bold uppercase text-sm sm:text-base">
            Skill
          </div>
          <div className="font-bold text-3xl sm:text-4xl">
            Tools &amp; Technology
          </div>
          <div className="font-semibold sm:text-lg text-secondary">
            Lorem Ipsum is simply dummy text of the printing and type setting
            <br className="hidden md:block"></br>
            industry. Lorem Ipsum has been the industry's standard dummy
            <br className="hidden md:block"></br>
            text eversince the 1500s.
          </div>
          <div>JavaScript </div>
        </motion.div>
      </div>
    </div>
  );
}
