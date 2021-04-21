import React from 'react';
import JobCardList from './JobCardList';
import { ReactComponent as Navbar } from '../Assets/Icons/navbar.svg';

export default function Experience() {
  return (
    <div className="h-screen">
      <div className="flex h-1/6 items-center">
        <div className="space-y-8">
          <div className="text-primary font-bold uppercase">Experience</div>
          <div className="font-bold text-4xl">Where I've Worked</div>
        </div>
      </div>
      <div className="flex justify-center items-center h-4/6">
        <JobCardList></JobCardList>
      </div>
      <div className="flex justify-center items-center h-1/6">
        <Navbar></Navbar>
      </div>
    </div>
  );
}
