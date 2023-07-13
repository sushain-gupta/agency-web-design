import React from "react";
import NewsCards from "../../../components/NewsCards";

const CardContainer = () => {
	return (
		<section className="flex flex-col gap-20 p-28 pt-0 pb-10">
			<div className="flex w-full flex-wrap gap-12">
				<NewsCards />
			</div>
		</section>
	);
};

export default CardContainer;
