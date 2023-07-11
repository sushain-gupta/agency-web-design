import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import NewsCard from "../../../components/NewsSliderCard";
import image1 from "../../../assets/svg/newsImage-1.svg";
import image2 from "../../../assets/svg/newsImage-2.svg";
import image3 from "../../../assets/svg/newsImage-3.svg";
import image4 from "../../../assets/svg/newsImage-4.svg";
import { Link } from "react-router-dom";

function LatestNews() {
	return (
		<>
			<section className="section flex-col justify-evenly bg-slate-50 p-20 px-0">
				<div className="flex flex-col items-center gap-3">
					<h1 className="text-4xl font-semibold">Our Latest News</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt.{" "}
						<Link className="font-semibold text-violet-600 underline">
							View all
						</Link>
					</p>
				</div>

				<Swiper
					spaceBetween={50}
					pagination={true}
					slidesPerView={3.8}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					modules={[Pagination, Autoplay]}
					className="mySwiper w-full py-14"
				>
					<SwiperSlide>
						<NewsCard
							image={image1}
							date="12/12/2020"
							title="Holopot"
							desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<NewsCard
							image={image2}
							date="12/12/2020"
							title="Nawaloka Hospitals Mobile App"
							desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<NewsCard
							image={image3}
							date="12/12/2020"
							title="Smart Solution For Ambuluwawa Biodiversity Complex"
							desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<NewsCard
							image={image4}
							date="12/12/2020"
							title="Nawaloka Hospitals Mobile App"
							desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<NewsCard
							image={image1}
							date="12/12/2020"
							title="Holopot"
							desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<NewsCard
							image={image2}
							date="12/12/2020"
							title="Nawaloka Hospitals Mobile App"
							desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an"
						/>
					</SwiperSlide>
				</Swiper>
			</section>
		</>
	);
}

export default LatestNews;
