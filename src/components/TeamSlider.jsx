import React from "react";
import { teamDetails } from "../data/data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper";

function TeamCard() {
	return (
		<Swiper
			slidesPerView={3}
			spaceBetween={30}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination, Autoplay]}
			className="mySwiper h-max w-full pb-16"
		>
			{teamDetails.map((member, key) => {
				return (
					<SwiperSlide key={key} className="px-5">
						<div className="flex h-full flex-col gap-4">
							<div className="flex w-full items-stretch overflow-hidden rounded-2xl">
								<img
									className="h-full w-full object-cover"
									src={member.profile}
									alt="News"
								/>
							</div>

							<div className="w-full">
								<h3 className="w-9/12 text-lg font-semibold">{member.title}</h3>
							</div>

							<p>
								({member.position}){" "}
								<span className="text-violet-650">{member.name}</span>
							</p>
						</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
}

export default TeamCard;
