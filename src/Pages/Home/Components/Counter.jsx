import React from "react";
import bell from "../../../assets/png/bell-2.png";
import vector3 from "../../../assets/png/vector3.png";
import vector2 from "../../../assets/png/vector2.png";
import vector1 from "../../../assets/png/vector1.png";
import succlent from "../../../assets/png/succlent.png";

function Counter() {
	return (
		<>
			<section className="relative grid h-80 grid-cols-4 items-center bg-neutral-900 px-10 text-white">
				<div className="absolute -bottom-0 left-0">
					<img src={vector1} alt="" />
				</div>
				<div className="absolute left-72 -bottom-8">
					<img src={succlent} alt="" />
				</div>
				<div className="absolute -top-20 left-20">
					<img src={vector2} alt="" />
				</div>
				<div className="absolute right-20 -top-12">
					<img src={bell} alt="" />
				</div>
				<div className="absolute right-24 -top-10">
					<img src={vector3} alt="" />
				</div>

				<div className="flex w-full flex-col items-center justify-evenly">
					<h1 className="text-6xl font-semibold">6</h1>
					<p>Happy Clients</p>
				</div>
				<div className="flex flex-col items-center">
					<h1 className="text-6xl font-semibold">11</h1>
					<p>Completed Projects</p>
				</div>
				<div className="flex flex-col items-center">
					<h1 className="text-6xl font-semibold">7M</h1>
					<p>Transsactions</p>
				</div>
				<div className="flex flex-col items-center">
					<h1 className="text-6xl font-semibold">6000+</h1>
					<p>Customers</p>
				</div>
			</section>
		</>
	);
}

export default Counter;
