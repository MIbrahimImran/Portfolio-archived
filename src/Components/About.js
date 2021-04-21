import React from 'react';

export default function About() {
  return (
    <div className="border h-screen">
      <div className="flex h-2/4 items-center border-2 border-red-600">
        <div className="space-y-8">
          <div className="text-primary font-extrabold uppercase">Intro</div>
          <div className="font-bold text-4xl">About Me</div>
          <div className="font-semibold text-lg text-secondary">
            Lorem Ipsum is simply dummy text of the printing and type setting
            <br></br>
            industry. Lorem Ipsum has been the industry's standard dummy
            <br></br>
            text eversince the 1500s.
          </div>
        </div>
      </div>
      <div className="flex h-2/4 items-center border-2 border-blue-600">
        <div className="space-y-8">
          <div className="text-primary font-extrabold uppercase">Skill</div>
          <div className="font-bold text-4xl">Tools &amp; Technology</div>
          <div className="font-semibold text-lg text-secondary">
            Lorem Ipsum is simply dummy text of the printing and type setting
            <br></br>
            industry. Lorem Ipsum has been the industry's standard dummy
            <br></br>
            text eversince the 1500s.
          </div>
        </div>
      </div>
    </div>
  );
}

/* 
<div className="flex-col border h-screen">
      <div className="pt-36 space-y-52">
        <div className="space-y-8">
          <div className="text-primary font-extrabold uppercase">Intro</div>
          <div className="font-bold text-4xl">About Me</div>
          <div className="font-semibold text-lg text-secondary">
            Lorem Ipsum is simply dummy text of the printing and type setting
            <br></br>
            industry. Lorem Ipsum has been the industry's standard dummy
            <br></br>
            text eversince the 1500s.
          </div>
        </div>
        <div className="space-y-8">
          <div className="text-primary font-extrabold uppercase">Intro</div>
          <div className="font-bold text-4xl">About Me</div>
          <div className="font-semibold text-lg text-secondary">
            Lorem Ipsum is simply dummy text of the printing and type setting
            <br></br>
            industry. Lorem Ipsum has been the industry's standard dummy
            <br></br>
            text eversince the 1500s.
          </div>
          <div className="text-red-500 font-extrabold space-y-6 pt-8">
            <ul className="flex space-x-8">
              <li>C/C++</li>
              <li>JavaScript</li>
              <li>Java</li>
            </ul>
            <ul className="flex space-x-8">
              <li>React/Redux</li>
              <li>Node.js</li>
              <li>Three.js</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
*/
