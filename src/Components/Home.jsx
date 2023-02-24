import React from "react";
import employee from "../assets/employee.jpg";
import code from "../assets/code.png";
import desktop from "../assets/desktop.png";
import bulb from "../assets/bulb.png";
import bell from "../assets/bell.png";

function Home() {
  return (
    <>
      <section className="flex justify-center gap-20 items-center bg-[#070D18] w-screen h-screen text-base">
        <p className="absolute text-transparent font-outline-1 text-[21rem] bottom-[370px] left-[170px]">
          afq
        </p>
        {/* Col 1 */}
        <div className="grid grid-rows-3 z-10">
          <div className="row-start-3 row-span-2 w-20 -rotate-45 ml-auto mt-auto">
            <img src={bell} alt="" />
          </div>
          {/* CARD */}
          <div className="row-start-2 m-auto flex flex-col p-5 h-max bg-white/[0.25] backdrop-blur-sm w-56 text-gray-50 rounded-xl gap-2">
            <div className="flex w-full gap-2">
              <div className="w-11 h-11 rounded-full overflow-hidden">
                {" "}
                <img
                  className=" object-cover w-full h-full"
                  src={employee}
                  alt=""
                />
              </div>

              {""}
              <p className="text-sm my-auto">Jhon Doe</p>
            </div>
            <p className="text-xs">⭐⭐⭐⭐⭐ 5.0</p>
            <p>Lorem ipsum dolor sit.</p>
            <p className="text-xs text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              eius?
            </p>
          </div>
        </div>

        <div className="flex flex-col w-[733px] h-max justify-evenly place-items-center gap-16 z-10">
          <div className="flex flex-col justify-evenly h-max gap-10 text-center place-items-center">
            <h1 className="text-white text-[42px] leading-[74px] font-bold">
              Advanced software, advanced research for{" "}
              <span className="text-[#41BBEA]">SIMPLE</span> life
            </h1>
            <p className="text-[#CECECE] leading-9">
              We harness the latest technologies to develop cutting-edge digital
              solutions for modern business requirements
            </p>

            <button className="flex place-items-center gap-2 font-normal text-[#FFFFFF] bg-gray-50/[.44] w-max p-2 rounded-[11px]">
              Get a Quote
              <p className="bg-white flex text-gray-800 p-2 rounded-md">
                {" "}
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </p>
            </button>
          </div>

          <div className="flex justify-center w-max gap-6 text-center text-gray-50">
            <div className="flex flex-col w-[40%]">
              <h2 className="text-4xl font-bold">1234</h2>
              <p className="text-xs">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="flex flex-col w-[40%]">
              <h2 className="text-4xl font-bold">1234</h2>
              <p className="text-xs">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-4 h-full z-10">
          <div className="row-start-1 row-span-2 w-20 -rotate-45 m-auto">
            <img src={bulb} alt="" />
          </div>
          <div className="row-start-3 flex flex-col p-5 bg-white/[0.35] backdrop-blur-sm w-56 rounded-xl gap-4 h-max">
            <div className="flex -mx-20 w-max h-max gap-5 px-6 py-3 rounded-md bg-white">
              <div className="w-11 h-11 m-auto rounded-full overflow-hidden">
                {" "}
                <img className="object-cover w-full h-full" src={code} alt="" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm">Web Development</p>
                <div className="flex gap-2 text-xs">
                  <button className="bg-gray-200 text-gray-500 p-1 rounded-md">
                    Personal
                  </button>
                  <button className="bg-red-100 text-red-500 p-1 rounded-md">
                    Coding
                  </button>
                </div>
              </div>
            </div>
            <div className="flex w-max -mx-10 h-max gap-5 px-6 py-3 rounded-md bg-white">
              <div className="w-11 h-11 m-auto rounded-full overflow-hidden">
                {" "}
                <img
                  className=" object-cover w-full h-full"
                  src={desktop}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm">Game Develepmet</p>
                <div className="flex gap-2 text-xs">
                  <button className="bg-red-100 text-red-500 p-1 rounded-md">
                    Work
                  </button>
                  <button className="bg-violet-100 text-violet-500 p-1 rounded-md">
                    Interactive games
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
