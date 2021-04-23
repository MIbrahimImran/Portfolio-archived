import React from 'react';

export default function Contact() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center space-y-14">
        <div className="text-primary font-bold uppercase text-sm sm:text-base">
          Get In Touch
        </div>
        <div className="font-bold text-6xl">Contact</div>
        <div className="text-center font-semibold sm:text-lg text-secondary">
          Lorem Ipsum is simply dummy text of the printing and type setting
          <br className="hidden md:block"></br>
          industry. Lorem Ipsum has been the industry's standard dummy
          <br className="hidden md:block"></br>
          text eversince the 1500s.
        </div>
        <a href={`mailto:${'work@ibrahimimran.com'}`}>
          <button
            className="self-center border w-64 h-16 font-bold uppercase "
            title="support@example.com"
          >
            Send Email
          </button>
        </a>
      </div>
    </div>
  );
}
