import React from 'react';

export default function Contact() {
  return (
    <div className="border h-screen">
      <div className="flex justify-center h-full items-center">
        <div className="flex flex-col space-y-12 mb-36">
          <div className="self-center text-primary font-extrabold uppercase text-sm">
            Get In Touch
          </div>
          <div className="self-center font-bold text-6xl">Contact</div>
          <div className="text-center font-semibold text-lg text-secondary">
            Lorem Ipsum is simply dummy text of the printing and type setting
            <br></br>
            industry. Lorem Ipsum has been the industry's standard dummy
            <br></br>
            text eversince the 1500s.
          </div>
          <button className="self-center border w-64 h-16 font-bold uppercase">
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
}

/*
<div className="flex flex-row justify-center h-screen border">
      <div className="flex flex-col justify-center space-y-12">
        <div className="self-center text-primary font-extrabold uppercase text-sm">
          Get In Touch
        </div>
        <div className="self-center font-bold text-6xl">Contact</div>
        <div className="text-center font-semibold text-lg text-secondary">
          Lorem Ipsum is simply dummy text of the printing and type setting
          <br></br>
          industry. Lorem Ipsum has been the industry's standard dummy
          <br></br>
          text eversince the 1500s.
        </div>
        <button className="self-center border w-64 h-16 font-bold uppercase">
          Send Email
        </button>
      </div>
    </div>
*/
