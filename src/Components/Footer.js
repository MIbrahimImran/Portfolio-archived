import React from 'react';

export default function Footer() {
  return (
    <div className="flex justify-center items-center md:space-x-14 h-24 uppercase border-t border-gray-900">
      <div className="hover:text-primary cursor-pointer hidden md:block">
        LinkedIn
      </div>
      <div className="cursor-default text-xs md:text-base">
        <div>
          Design &amp; Built by Ibrahim Imran <span>&#183;</span> 2021
        </div>
      </div>
      <div className="hover:text-primary cursor-pointer hidden md:block">
        Github
      </div>
    </div>
  );
}
