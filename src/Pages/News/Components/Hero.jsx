import { BiSearch } from "react-icons/bi";
import React from "react";
import vector1 from "../../../assets/svg/Vector 3.svg";
import vector2 from "../../../assets/svg/Vector 4.svg";
import lightbulb from "../../../assets/svg/lightbulb 1.svg";
import bell from "../../../assets/svg/bell_2 1.svg";

function Hero() {
	return (
		<>
			<section className="relative grid grid-cols-3 items-center py-20 px-0 text-slate-950">
				<div className="absolute bottom-28 right-40">
					<img src={vector1} alt="" />
				</div>
				<div className="absolute left-0">
					<img src={vector2} alt="" />
				</div>
				<div className="absolute left-72 bottom-28">
					<img src={bell} alt="" />
				</div>
				<div className="absolute right-20 top-12">
					<img src={lightbulb} alt="" />
				</div>

				<div className="col-start-2 flex flex-col items-center gap-5">
					<div className="flex w-full flex-col items-center justify-evenly text-[42px] font-semibold">
						<h1>Latest news</h1>
						<h1 className="text-sky-400">Updates</h1>
					</div>

					<div>
						<p className="text-center font-medium leading-relaxed text-neutral-500">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
							fuga!
						</p>
					</div>

					<div className="my-5 flex items-center rounded-lg bg-zinc-100 px-2">
						<BiSearch />
						<input
							className="w-72 bg-zinc-100 p-2 text-zinc-700 focus:outline-none"
							type="text"
							placeholder="Search"
						/>
					</div>
				</div>
			</section>
		</>
	);
}

export default Hero;
