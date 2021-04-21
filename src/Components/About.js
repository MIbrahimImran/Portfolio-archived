import React from 'react';

export default function About() {
  return (
    <div className="h-screen">
      <div className="flex h-2/4 items-center">
        <div className="space-y-8">
          <div className="text-primary font-bold uppercase">Intro</div>
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
      <div className="flex h-2/4 items-center">
        <div className="space-y-8">
          <div className="text-primary font-bold uppercase">Skill</div>
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
