import React from 'react';

export default function Work() {
  return (
    <div className="h-screen">
      <div className="flex h-full">
        <div className="2xl:w-6/12 sm:w-full">
          <div className="h-2/4">
            <div className="mt-10 space-y-8">
              <div className="text-primary font-bold uppercase">Work</div>
              <div className="font-bold text-4xl ">Some of my Projects</div>
            </div>
            <div className="mt-28 flex">
              <div className=" space-y-8">
                <div className="font-extrabold  text-6xl">LoremIpsum</div>
                <div className="font-semibold text-lg text-secondary">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                  <br></br>
                  industry. Lorem Ipsum has been the industry's standard dummy
                  <br></br>
                  text ever since the 1500s.
                </div>
                <div className="flex justify-end underline cursor-pointer">
                  LoremIpsum.com
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center h-2/4">
            <div className="">
              <div className="hidden 2xl:block font-bold text-xl uppercase">
                Stack
              </div>
              <div className="mt-4">
                <ul className="hidden 2xl:inline-flex space-x-10 text-secondary font-bold">
                  <li>Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden 2xl:inline-flex justify-end w-1/12 h-full ">
          <div className="self-center space-y-36">
            <div className="flex justify-center items-center h-9 w-9 rounded-full border-2 border-primary">
              01
            </div>
            <div className="flex justify-center items-center h-9 w-9 rounded-full border-2 border-primary">
              02
            </div>

            <div className="flex justify-center items-center h-9 w-9 rounded-full border-2 border-primary">
              03
            </div>
          </div>
        </div>
        <div className="hidden 2xl:block w-5/12">
          <div className="flex h-full justify-center">
            <div className="self-center border h-96 w-96">Picture</div>
          </div>
        </div>
        <div className="w-1/12"></div>
      </div>
    </div>
  );
}
