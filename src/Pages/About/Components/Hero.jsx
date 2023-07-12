import React from "react";
import heroImage from "../../../assets/png/hero-image.png";

function Hero() {
	return (
		<section className="flex h-[90vh] items-center justify-between border-b border-stone-300 bg-stone-100 px-20">
			<div className="flex flex-1 flex-col gap-8 leading-loose">
				<h1 className="text-3xl font-semibold">
					Who <span className="text-sky-500">we are....</span>
				</h1>

				<p className="text-neutral-600">
					At AFQ Tech, we believe in a systematic approach for any project be it
					complex or simple. We are a group of individuals with a various set of
					skill set varies from Digital Marketing to IoT/Robotics solutions. We
					have our dedicated team for your project which uses various methods
					such as agile Scrum & agile Kanban. We ensure top-notch quality,
					on-time delivery, and agility for your project.
				</p>
			</div>

			<div className="flex flex-1">
				<img src={heroImage} className="m-auto" alt="" />
			</div>
		</section>
	);
}

export default Hero;
