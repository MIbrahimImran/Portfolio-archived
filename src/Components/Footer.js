import React from 'react';
import { ReactComponent as GithubIcon } from '../Assets/Icons/github.svg';
import { ReactComponent as LinkedInLogo } from '../Assets/Icons/linkedin.svg';

export default function Footer() {
  return (
    <footer className="flex flex-row bottom-0 items-center justify-center space-x-14 uppercase border-t border-gray-900 h-20">
      <div className="hover:text-primary cursor-pointer hidden md:block">
        LinkedIn
      </div>
      <GithubIcon className="stroke-current hover:text-primary cursor-pointer hidden sm:block md:hidden"></GithubIcon>
      <div className="flex  sm:space-x-3 cursor-default text-xs md:text-base">
        <div>Design &amp; Built by Ibrahim Imran</div>
        <span>&#183;</span>
        <div>2021</div>
      </div>
      <LinkedInLogo className="stroke-current hover:text-primary cursor-pointer hidden sm:block md:hidden"></LinkedInLogo>
      <div className="hover:text-primary cursor-pointer hidden md:block">
        Github
      </div>
    </footer>
  );
}
