import React from "react";
import { newsArray } from "../data/data";

const NewsCards = () => {
	return (
		<>
			{newsArray.map((news, key) => {
				return (
					<div
						className="mt-10 m-auto flex w-80 flex-col gap-4 rounded-3xl p-5 shadow-xl"
						key={key}
					>
						<div className="w-full overflow-hidden rounded-3xl">
							<img
								className="h-full w-full object-cover"
								loading="lazy"
								src={news.image}
								alt=""
							/>
						</div>

						<div className="flex flex-col gap-4">
							<h4 className="text-xl font-semibold">{news.title}</h4>
							<p>{news.desc}</p>
						</div>

						<div className="flex items-center gap-5">
							<div className="h-12 w-12 overflow-hidden rounded-full">
								<img
									className="h-full w-full object-cover"
									loading="lazy"
									src={news.profile}
									alt=""
								/>
							</div>
							<div>
								<h5 className="text-lg font-medium">{news.name}</h5>
								<p className="text-sm text-gray-500">{news.date}</p>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default NewsCards;
