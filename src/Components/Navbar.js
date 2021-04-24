import Resume from '../Documents/Resume.pdf';
import { ReactComponent as GithubIcon } from '../Assets/Icons/github.svg';
import { ReactComponent as LinkedInLogo } from '../Assets/Icons/linkedin.svg';

export default function Navbar(props) {
  return (
    <nav className="flex flex-row items-center justify-between border-b border-gray-900 h-20">
      <div className="flex-grow-0 font-black text-3xl cursor-default xl:w-52">
        Intract
      </div>
      <div className="hidden md:block">
        <ul className="flex flex-row md:space-x-4 lg:space-x-8 xl:space-x-16 font-semibold uppercase">
          <li className="hover:text-primary hover:border-primary border-gray-900 cursor-pointer py-7 border-b">
            Home
          </li>
          <li className="hover:text-primary hover:border-primary border-gray-900 cursor-pointer py-7 border-b">
            About
          </li>
          <li className="hover:text-primary hover:border-primary border-gray-900 cursor-pointer py-7 border-b">
            Work
          </li>
          <li className="hover:text-primary hover:border-primary border-gray-900 cursor-pointer py-7 border-b">
            Experience
          </li>
          <li className="hover:text-primary hover:border-primary border-gray-900 cursor-pointer py-7 border-b">
            Contact
          </li>
        </ul>
      </div>
      <div className="flex flex-grow-0 sm:w-52 space-x-14">
        <div className="flex flex-row space-x-8">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://google.com"
          >
            <GithubIcon className="stroke-current hover:text-primary cursor-pointer hidden sm:block"></GithubIcon>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://google.com"
          >
            <LinkedInLogo className="stroke-current hover:text-primary cursor-pointer hidden sm:block"></LinkedInLogo>
          </a>
        </div>
        <div
          className="hover:text-primary text-lg font-black uppercase cursor-pointer"
          onClick={() => window.open(Resume)}
        >
          Resume
        </div>
      </div>
    </nav>
  );
}
