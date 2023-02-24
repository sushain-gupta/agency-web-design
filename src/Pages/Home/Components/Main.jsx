import React from "react";
import polygon from "../../../assets/png/polygon.png";
import chart from "../../../assets/png/chart.png";
import clock from "../../../assets/png/clock.png";

function Main() {
  return (
    <>
      <section className="flex h-screen w-screen flex-col items-center justify-evenly gap-5 bg-slate-100 px-20 text-center">
        <div className="flex w-full flex-col items-center gap-5">
          <h1 className="text-3xl font-semibold">
            About <span className="text-sky-500">Lorem</span>
          </h1>
          <p className="w-[65%] text-sm text-gray-600">
            At AFQ Tech, we believe in a systematic approach for any project be
            it complex or simple. We are a group of individuals with a various
            set of skill set varies from Digital Marketing to IoT/Robotics
            solutions. We have our dedicated team for your project which uses
            various methods such as agile Scrum & agile Kanban. We ensure
            top-notch quality, on-time delivery, and agility for your project.
          </p>
        </div>

        <div className="grid w-full grid-cols-3 gap-12 text-sm">
          <div className="flex flex-col items-center justify-evenly gap-2 rounded-xl bg-white p-10 shadow-xl">
            <div className="flex h-[50%] w-[50%] items-center">
              <img className="max-h-full max-w-full" src={polygon} alt="" />
            </div>
            <h3 className="text-xl font-semibold">Cutting Edge Technology</h3>
            <p className="text-gray-500">
              Take the advantage of our cutting-edge solutions to increase your
              Return of Investment on IT.
            </p>
          </div>

          <div className="flex flex-col items-center justify-evenly gap-2 rounded-xl bg-gray-200 p-10">
            <div className="flex h-[50%] w-[50%] items-center overflow-hidden">
              <img className="max-h-full max-w-full" src={chart} alt="" />
            </div>
            <h3 className="text-xl font-semibold">Cutting Edge Technology</h3>
            <p className="text-gray-500">
              Multi-device compatibility ensures that creating, viewing and
              providing quick and easy
            </p>
          </div>

          <div className="flex flex-col items-center justify-evenly gap-2 rounded-xl bg-gray-200 p-10">
            <div className="flex h-[50%] w-[50%] items-center overflow-hidden">
              <img className="max-h-full max-w-full" src={clock} alt="" />
            </div>
            <h3 className="text-xl font-semibold">Cutting Edge Technology</h3>
            <p className="text-gray-500">
              Scalable and dynamic systems with the ever-changing trends to meet
              your dynamic business needs
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
