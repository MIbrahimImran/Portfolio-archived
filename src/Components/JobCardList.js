import React from 'react';
import JobCard from './JobCard';

export default function JobCardList() {
  return (
    <div className="flex justify-center flex-row space-x-14 overflow-x-hidden">
      <JobCard></JobCard>
      <JobCard></JobCard>
      <JobCard></JobCard>
      <JobCard></JobCard>
      <JobCard></JobCard>
    </div>
  );
}
