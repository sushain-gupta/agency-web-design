import { BsArrowRight } from "react-icons/bs";
import React from "react";
import backgroundImage from "../../../assets/svg/Rectangle126.svg";
import ball from "../../../assets/png/ball.png";

const Hero = () => {
	return (
		<section className="flex">
			<div className="flex flex-1 flex-col gap-12 p-16">
				<h1 className="text-3xl font-semibold">
					Contact <span className="text-sky-500">Us</span>
				</h1>

				<form className="flex flex-col gap-8">
					<div>
						<label className="text-lg font-medium" htmlFor="email">
							Your Name
						</label>
						<input
							className="my-2 w-full border border-zinc-600 p-4 text-sm focus:outline-none"
							placeholder="Write your name"
							type="email"
						/>
					</div>

					<div>
						<label className="text-lg font-medium" htmlFor="email">
							Your Email
						</label>
						<input
							className="my-2 w-full border border-zinc-600 p-4 text-sm focus:outline-none"
							placeholder="Sample@gmail.com"
							type="email"
						/>
					</div>

					<div>
						<label className="text-lg font-medium" htmlFor="email">
							Message
						</label>
						<textarea
							className="my-2 w-full border border-zinc-600 p-4 text-sm focus:outline-none"
							placeholder="Write here..........."
						/>
					</div>

					<div>
						<button className="float-right flex w-max items-center gap-4 bg-cyan-900 p-3 px-5 text-xl text-gray-100">
							Send
							<BsArrowRight />
						</button>
					</div>
				</form>
			</div>

			<div
				style={{ backgroundImage: `url(${backgroundImage})` }}
				className="flex-1 bg-cover"
			>
				<div className="flex h-full w-full flex-col justify-end bg-gradient-to-b from-slate-50/30 to-neutral-900 text-gray-100 backdrop-blur-sm">
					<div className="flex h-max gap-2 p-12">
						<div className="mt-1">
							<img src={ball} alt="" />
						</div>
						<div>
							<h3 className="text-2xl font-semibold">Address</h3>
							<p className="font-light">
								No 7, Katherine Place, Melbourne 3000, <br /> VIC Australia
							</p>
						</div>
					</div>

					<div className="flex flex-wrap items-center text-center font-light">
						<p className="grow border border-gray-100 p-8">+61 420 992 332</p>
						<p className="grow border border-gray-100 p-8">info@afq.com.au</p>
						<p className="grow border border-gray-100 p-8">
							www.afqtech.com.au
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
