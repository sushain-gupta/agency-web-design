import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

function NewsCard({ image, date, title, desc }) {
	return (
		<>
			<div className="flex h-full flex-col justify-between">
				<div className="flex flex-col gap-3">
					<div className="flex max-h-60 w-full overflow-hidden rounded-t-2xl">
						<img
							className="h-full w-full object-cover"
							src={image}
							alt="News"
						/>
					</div>

					<div className="w-full">
						<p className="my-2 font-medium text-neutral-500">{date}</p>
						<h3 className="text-lg font-semibold">{title}</h3>
					</div>
				</div>

				<div className="flex flex-col gap-3">
					<p className="mt-4 pr-2 text-slate-900">{desc}</p>

					<Link className="bottom-0 ml-auto flex items-center gap-2 font-semibold">
						Read more <HiArrowLongRight size={40} />
					</Link>
				</div>
			</div>
		</>
	);
}

export default NewsCard;
