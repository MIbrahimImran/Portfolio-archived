import React from 'react';

export default function Mininav() {
  return (
    <div className="w-0 font-muli font-semibold text-xs tracking-wider uppercase sticky bottom-0 hidden md:block">
      <div className="pl-1 text-primary transform -rotate-90">
        <p>Explore</p>
      </div>
      <div className="hover:border-blue-500 border-blue-500 border-opacity-40 cursor-pointer h-10 border-l my-2 w-8"></div>
      <div className="hover:border-blue-500 border-blue-500 border-opacity-40 cursor-pointer h-10 border-l my-2 w-8"></div>
      <div className="hover:border-blue-500 border-blue-500 border-opacity-40 cursor-pointer h-10 border-l my-2 w-8"></div>
      <div className="hover:border-blue-500 border-blue-500 border-opacity-40 cursor-pointer h-10 border-l my-2 w-8"></div>
      <div className="hover:border-blue-500 border-blue-500 border-opacity-40 cursor-pointer h-10 border-l my-2 w-8"></div>
    </div>
  );
}
