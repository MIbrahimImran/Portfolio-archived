import React from 'react';
import { motion } from 'framer-motion';

import { ReactComponent as ScrollIcon } from '../Assets/Icons/chevrons-down.svg';

export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="h-full w-full">
        <div className="flex h-2/4 pt-36">
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ type: 'spring' }}
            className="space-y-9"
          >
            <div className="text-primary font-extrabold uppercase">
              About me
            </div>
            <div className="font-bold text-4xl">Writing code since 2018</div>
            <div className="font-semibold text-lg text-secondary">
              Lorem Ipsum is simply dummy text of the printing and type setting
              <br></br>
              industry. Lorem Ipsum has been the industry's standard dummy
              <br></br>
              text eversince the 1500s.
            </div>
            <div className="flex justify-end items-center">
              <div className="w-24 h-0.5 rounded mr-3 bg-gradient-to-l from-white"></div>
              <div className="italic text-lg">Ibrahim Imran</div>
            </div>
          </motion.div>
        </div>
        <div className="flex items-end h-2/4 justify-center">
          <div className="mb-24">
            <div className="font-light uppercase">Scroll</div>
            <div className="pl-2.5">
              <ScrollIcon></ScrollIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
