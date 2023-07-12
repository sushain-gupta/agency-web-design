import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

import employee from "../../../assets/jpg/employee.jpg";
import code from "../../../assets/png/code.png";
import desktop from "../../../assets/png/desktop.png";
import bulb from "../../../assets/png/bulb.png";
import bell from "../../../assets/png/bell.png";

function Hero() {
	return (
		<>
			<section className="flex h-[90vh] items-center justify-center gap-20 bg-slate-950 p-20 text-base">
				<p className="font-outline-1 absolute bottom-[370px] left-[170px] text-[21rem] text-transparent">
					afq
				</p>
				{/* Col 1 */}
				<div className="z-10 grid grid-rows-4">
					<div className="row-start-3 ml-auto mt-auto w-20">
						<img src={bell} alt="" />
					</div>
					{/* CARD */}
					<div className="row-start-2 m-auto flex h-max w-52 flex-col gap-2 rounded-xl bg-white/[0.15] p-5 text-gray-50 backdrop-blur-[1px]">
						<div className="flex w-full gap-2">
							<div className="h-11 w-11 overflow-hidden rounded-full">
								{" "}
								<img
									className=" h-full w-full object-cover"
									src={employee}
									alt=""
								/>
							</div>

							{""}
							<p className="my-auto text-sm">Jhon Doe</p>
						</div>
						<p className="text-xs">⭐⭐⭐⭐⭐ 5.0</p>
						<p>Lorem ipsum dolor sit.</p>
						<p className="text-xs text-gray-500">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
							eius?
						</p>
					</div>
				</div>

				<div className="z-10 flex h-max w-[733px] flex-col place-items-center justify-evenly gap-16">
					<div className="flex h-max flex-col place-items-center justify-evenly gap-10 text-center">
						<h1 className="text-3xl font-bold leading-relaxed text-white">
							Advanced software, advanced research for{" "}
							<span className="text-[#41BBEA]">SIMPLE</span> life
						</h1>
						<p className="leading-9 text-[#CECECE]">
							We harness the latest technologies to develop cutting-edge digital
							solutions for modern business requirements
						</p>

						<button className="flex w-max place-items-center gap-2 rounded-[11px] bg-gray-50/[.44] p-2 font-normal text-[#FFFFFF]">
							Get a Quote
							<p className="flex rounded-md bg-white p-2 text-gray-800">
								{" "}
								<AiOutlineArrowRight />
							</p>
						</button>
					</div>

					<div className="flex w-max justify-center gap-6 text-center text-gray-50">
						<div className="flex w-[40%] flex-col">
							<h2 className="text-4xl font-bold">1234</h2>
							<p className="text-xs">Lorem ipsum dolor sit amet.</p>
						</div>
						<div className="flex w-[40%] flex-col">
							<h2 className="text-4xl font-bold">1234</h2>
							<p className="text-xs">Lorem ipsum dolor sit amet.</p>
						</div>
					</div>
				</div>

				<div className="z-10 grid h-full grid-rows-4">
					<div className="row-span-2 row-start-1 m-auto w-20 -rotate-45">
						<img src={bulb} alt="" />
					</div>
					<div className="row-start-3 flex h-max w-56 flex-col gap-4 rounded-xl bg-white/[0.35] p-5 backdrop-blur-sm">
						<div className="-mx-20 flex h-max w-max gap-5 rounded-md bg-white px-6 py-3">
							<div className="m-auto h-11 w-11 overflow-hidden rounded-full">
								{" "}
								<img className="h-full w-full object-cover" src={code} alt="" />
							</div>
							<div className="flex flex-col gap-2">
								<p className="text-sm">Web Development</p>
								<div className="flex gap-2 text-xs">
									<span className="rounded-md bg-gray-200 p-1 text-gray-500">
										Personal
									</span>
									<span className="rounded-md bg-red-100 p-1 text-red-500">
										Coding
									</span>
								</div>
							</div>
						</div>
						<div className="-mx-10 flex h-max w-max gap-5 rounded-md bg-white px-6 py-3">
							<div className="m-auto h-11 w-11 overflow-hidden rounded-full">
								{" "}
								<img
									className=" h-full w-full object-cover"
									src={desktop}
									alt=""
								/>
							</div>
							<div className="flex flex-col gap-2">
								<p className="text-sm">Game Develepmet</p>
								<div className="flex gap-2 text-xs">
									<span className="rounded-md bg-red-100 p-1 text-red-500">
										Work
									</span>
									<span className="rounded-md bg-violet-100 p-1 text-violet-500">
										Interactive games
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Hero;
