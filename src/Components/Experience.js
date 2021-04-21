import React from 'react';
import JobCardList from './JobCardList';
import { ReactComponent as Navbar } from '../Assets/Icons/navbar.svg';

export default function Experience() {
  return (
    <div className="border h-screen">
      <div className="flex h-1/6 items-center border-2 border-red-600">
        <div className="space-y-8">
          <div className="text-primary font-extrabold uppercase">
            Experience
          </div>
          <div className="font-bold text-4xl">Where I've Worked</div>
        </div>
      </div>
      <div className="flex justify-center items-center h-4/6 border-2 border-green-600">
        <JobCardList></JobCardList>
      </div>
      <div className="flex justify-center items-center h-1/6 border-2 border-blue-600">
        <Navbar></Navbar>
      </div>
    </div>
  );
}

/* 
<div className="border h-screen">
      <div className="space-y-8 mt-12">
        <div className="text-primary font-extrabold uppercase">Experience</div>
        <div className="font-bold text-4xl">Where I've Worked</div>
      </div>
      <div className="mt-28">
        <JobCardList></JobCardList>
      </div>
      <div className="flex justify-center mt-44">
        <Navbar></Navbar>
      </div>
    </div>
*/
