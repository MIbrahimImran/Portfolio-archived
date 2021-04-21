import React from 'react';

export default function Work() {
  return (
    <div className="border h-screen">
      <div className="flex h-full">
        <div className="w-5/12 border-2 border-red-600">
          <div className="h-2/4 border">
            <div className="mt-10 space-y-8">
              <div className="text-primary font-extrabold uppercase">
                About me
              </div>
              <div className="font-bold text-4xl">Some of my work</div>
            </div>
            <div className="mt-28 flex">
              <div className="space-y-8">
                <div className="font-extrabold  text-6xl">AlgoExpert</div>
                <div className="font-semibold text-lg text-secondary">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                  <br></br>
                  industry. Lorem Ipsum has been the industry's standard dummy
                  <br></br>
                  text ever since the 1500s.
                </div>
                <div className="flex justify-end underline cursor-pointer">
                  AlgoExpert.io
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center h-2/4 border">
            <div>
              <div className="font-bold text-xl uppercase">Stack</div>
              <div className="mt-4">
                <ul className="flex space-x-10 text-secondary font-bold">
                  <li>Three.js</li>
                  <li>Node.js</li>
                  <li>JavaScript</li>
                  <li>Tailwind.css</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end w-1/12 h-full border-2 border-green-400">
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
        <div className="w-5/12 border-2 border-blue-600">
          <div className="flex h-full justify-center">
            <div className="self-center border h-96 w-96">Picture</div>
          </div>
        </div>
        <div className="w-1/12 border-2 border-pink-600">End</div>
      </div>
    </div>
  );
}
