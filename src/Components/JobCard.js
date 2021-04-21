import React from 'react';

export default function JobCards() {
  return (
    <div className="flex flex-col flex-shrink-0 bg-primary rounded-lg p-6 w-80">
      <div className="text-xl font-semibold">Lorem</div>
      <div className="text-2xl mt-5">Lorem Ipsum</div>
      <div className="mt-7 ml-4">
        <ul className="list-disc text-primary space-y-3">
          <li>
            <span className="text-secondary">
              Lorem Ipsum is simply dummy text of the printing and type settin
            </span>
          </li>
          <li>
            <span className="text-secondary">
              Lorem Ipsum is simply dummy text of the printing and type settin
            </span>
          </li>
          <li>
            <span className="text-secondary">
              Lorem Ipsum is simply dummy text of the printing and type settin
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
