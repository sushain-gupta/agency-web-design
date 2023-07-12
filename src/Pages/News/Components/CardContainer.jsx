import React from "react";
import profile from "../../../assets/jpg/profile.jpg";
import NewsCards from "../../../components/NewsCards";

const CardContainer = () => {
	return (
		<section className="flex flex-col gap-20 p-28 pt-0 pb-10">
			<div className="flex gap-14 rounded-3xl p-5 shadow-xl">
				<div className="flex-1 overflow-hidden rounded-3xl">
					<img
						className="h-full w-full object-cover"
						src="https://res.cloudinary.com/dkezwrb3a/image/upload/v1689164674/furniturelo/newsCards/Rectangle_19-min_hwbne4.png"
						alt=""
					/>
				</div>

				<div className="flex flex-1 flex-col justify-center gap-5">
					<div>
						<h3 className="mb-8 text-[28px] font-semibold">
							Lorem Ipsum is simply dummy text of the printing.
						</h3>
						<p className="leading-loose">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the .
						</p>
					</div>

					<div className="flex items-center gap-5">
						<div className="h-12 w-12 overflow-hidden rounded-full">
							<img
								className="h-full w-full object-cover"
								loading="lazy"
								src={profile}
								alt=""
							/>
						</div>
						<div>
							<h5 className="text-lg font-medium">Name here</h5>
							<p className="text-sm text-gray-500">20.12.2022</p>
						</div>
					</div>
				</div>
			</div>

			<div className="flex w-full flex-wrap gap-12">
				<NewsCards />
			</div>
		</section>
	);
};

export default CardContainer;
