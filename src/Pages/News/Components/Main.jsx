import React from "react";
import cardImage from "../../../assets/svg/Rectangle 19.svg";
import profile from "../../../assets/jpg/profile.jpg";
import NewsCard from "../../../components/NewsCard";

const Main = () => {
	return (
		<section className=" flex flex-col gap-20 p-28 pt-0">
			<div className="flex gap-14">
				<div className="flex-1 overflow-hidden rounded-3xl">
					<img className="h-full w-full object-cover" src={cardImage} alt="" />
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
			<div className="flex w-full flex-wrap justify-between gap-20">
				<NewsCard />
			</div>
		</section>
	);
};

export default Main;
