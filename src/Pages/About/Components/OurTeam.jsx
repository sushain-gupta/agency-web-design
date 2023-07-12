import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import TeamCard from "../../../components/TeamSlider";

const OurTeam = () => {
	return (
		<section className="p-20 px-5">
			<h3 className="px-14 text-2xl font-semibold">Meet Our Team</h3>

			<div className="m-10">
				<TeamCard />
			</div>
		</section>
	);
};

export default OurTeam;
