import React from "react";
import WhatWeDoCard from "../../../components/WhatWeDoCard";
import apps from "../../../assets/png/apps.png";
import cloud from "../../../assets/png/cloud.png";
import coding from "../../../assets/png/coding.png";
import console from "../../../assets/png/console.png";
import cyber from "../../../assets/png/cyber.png";
import link from "../../../assets/png/link.png";
import promotion from "../../../assets/png/promotion.png";
import startup from "../../../assets/png/startup.png";

function WhatWeDo() {
	return (
		<>
			<section className="flex flex-col items-center justify-evenly gap-20 p-20 border-t border-gray-300">
				<h1 className="text-4xl font-semibold">What do we do</h1>
				<div className="grid h-max w-full grid-cols-4 items-center gap-12">
					<WhatWeDoCard
						image={apps}
						heading="Web Application"
						text="Platform independant business solutions for maximum availability"
						bgColor="bg-red-100"
					/>
					<WhatWeDoCard
						image={console}
						heading="Game Develepmet"
						text="Interactive games with perfect graphics"
						bgColor="bg-amber-50"
					/>
					<WhatWeDoCard
						image={startup}
						heading="SEO"
						text="Let the world find you on top of others"
						bgColor="bg-blue-50"
					/>
					<WhatWeDoCard
						image={cloud}
						heading="Iot/ AI/ RObotic"
						text="Advanced autonomous technologies to make life simple"
						bgColor="bg-purple-100"
					/>
					<WhatWeDoCard
						image={link}
						heading="BIG Data"
						text="Get your decision making backed by inteligent insight"
						bgColor="bg-orange-100"
					/>
					<WhatWeDoCard
						image={cyber}
						heading="Cyber Security"
						text="Make your digital assets secure and protected"
						bgColor="bg-gray-200"
					/>
					<WhatWeDoCard
						image={coding}
						heading="Mobile Applications"
						text="The simplest but robust technology to accompany with you"
						bgColor="bg-violet-100"
					/>
					<WhatWeDoCard
						image={promotion}
						heading="Digital Marketing"
						text="Business made easy in a digital world"
						bgColor="bg-green-100"
					/>
				</div>
			</section>
		</>
	);
}

export default WhatWeDo;
