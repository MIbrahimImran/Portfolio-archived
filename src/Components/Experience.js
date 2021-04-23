import React from 'react';

export default function Experience() {
  return (
    <div className="h-screen border border-red-600">
      <div className="space-y-8 border border-blue-600">
        <div className="text-primary font-bold uppercase text-sm sm:text-base">
          About me
        </div>
        <div className="font-bold text-3xl sm:text-4xl">
          Writing code since 2018
        </div>
      </div>
      <div className="border h-max border-blue-600 mx-24 overflow-y-scroll">
        <table class="table-auto text-left w-full">
          <thead>
            <tr className="text-secondary text-lg w-12">
              <th className="py-4 px-8">Period</th>
              <th className="py-4 px-8">Title</th>
              <th className="py-4 px-8">Where</th>
              <th className="py-4 px-8">Link</th>
            </tr>
          </thead>
          <tbody className="text-lg font-semibold bg-red-600 my-12 h-14">
            <tr className="border-b-4 border-black">
              <td className="py-5 px-9">2018 - 2020</td>
              <td className="py-5 px-9">Desk Clerk</td>
              <td className="py-5 px-9">University of South Florida</td>
              <td className="py-5 px-9">Link</td>
            </tr>
            <tr className="border-b-4 border-black">
              <td className="py-5 px-9">2020 - 2021</td>
              <td className="py-5 px-9">Desk Operation Assistant</td>
              <td className="py-5 px-9">University of South Florida</td>
              <td className="py-5 px-9">Link</td>
            </tr>
            <tr className="border-b-4 border-black">
              <td className="py-5 px-9">2021 - 2023</td>
              <td className="py-5 px-9">Software Engineer Intern</td>
              <td className="py-5 px-9">Google</td>
              <td className="py-5 px-9">Link</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
