import React from "react";
import brandImage1 from "../../../assets/svg/l2 1.svg";
import brandImage2 from "../../../assets/svg/l3 1.svg";
import brandImage3 from "../../../assets/svg/l4 1.svg";
import brandImage4 from "../../../assets/svg/l5 1.svg";
import brandImage5 from "../../../assets/svg/l6 1.svg";
import brandImage6 from "../../../assets/svg/uc 1.svg";

const Enagaged = () => {
	return (
		<section className="flex flex-col items-center gap-10 bg-slate-950 p-20 text-gray-100">
			<h3 className="text-3xl font-semibold">Who we are engaged with...</h3>
			<p className="w-1/2 text-center">
				We partner with humble, trusting leaders that think strategically.
				Businessmen and women who believe in the change they're making, embrace
				their mission and want to bring in a partner to accelerate their growth.
			</p>

			<div className="flex gap-10">
				<img src={brandImage1} alt="" />
				<img src={brandImage2} alt="" />
				<img src={brandImage3} alt="" />
				<img src={brandImage4} alt="" />
				<img src={brandImage5} alt="" />
			</div>
			<div>
				<img src={brandImage6} alt="" />
			</div>
		</section>
	);
};

export default Enagaged;
