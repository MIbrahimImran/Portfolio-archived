import React from 'react';

export default function JobCards() {
  return (
    <div className="flex flex-col flex-shrink-0 bg-primary rounded-lg p-6 w-80">
      <div className="text-xl font-semibold">Google</div>
      <div className="text-2xl mt-5">Software Engineer</div>
      <div className="mt-7 ml-4">
        <ul className="list-disc text-primary space-y-3">
          <li>
            <span className="text-secondary">
              Using C/C++ I completed most of the work with 21% reduction in
              time.
            </span>
          </li>
          <li>
            <span className="text-secondary">
              Implemented microservices design principles for google maps 2028
              and added support.
            </span>
          </li>
          <li>
            <span className="text-secondary">
              Completed the development of UI/UX design.
            </span>
          </li>
        </ul>
      </div>
      <div className="mt-8 self-end font-semibold text-primary">
        4/16/21 - Present
      </div>
    </div>
  );
}
