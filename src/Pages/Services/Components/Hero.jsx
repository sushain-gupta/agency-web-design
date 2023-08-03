import React from "react";

function Hero() {
	return (
		<section className="px-28 py-20">
			<h1 className="text-3xl font-semibold">
				Our <span className="text-sky-500">Services</span>
			</h1>

			<div className="my-12 flex flex-col justify-center gap-16 px-5">
				<div className="flex gap-12 rounded-3xl border border-gray-300 p-8 shadow-lg">
					<div className="flex-1 overflow-hidden rounded-3xl">
						<img
							className="w-full object-cover"
							src="https://res.cloudinary.com/dkezwrb3a/image/upload/v1689181151/agency-design/services/service-1_ppiw2w.svg"
							alt=""
						/>
					</div>

					<div className="flex flex-1 flex-col justify-between gap-5 leading-loose">
						<h3 className="text-xl font-semibold">
							1. Big Data & Business Analytics
						</h3>
						<p className="text-neutral-500">
							Data is your most valuable asset.But only if you make the most of
							it. AFQ Tech data scientists and analysts are skilled at mining,
							modeling, and extracting value from data. Sourced from a range of
							sectors and with hands-on experience, they put you in charge and
							draw on the best knowledge and expertise to help you navigate your
							way forward.
						</p>
						<button className="w-max rounded-3xl  bg-neutral-900 p-2 px-5 text-gray-100">
							Read more
						</button>
					</div>
				</div>

				<div className="flex flex-row-reverse gap-12 rounded-3xl border border-gray-300 p-8 shadow-lg">
					<div className="flex-1 overflow-hidden rounded-3xl">
						<img
							className="w-full object-cover"
							src="https://res.cloudinary.com/dkezwrb3a/image/upload/v1689181150/agency-design/services/Rectangle_10_zlu16u.svg"
							alt=""
						/>
					</div>

					<div className="flex flex-1 flex-col justify-between gap-5 leading-loose">
						<h3 className="text-xl font-semibold">2. IoT/ AI/ Robotics</h3>
						<p className="text-neutral-500">
							From automation to advanced analytics and seamless experiences, we
							can embed AI in business. We'll deliver new operating models and
							strategic intelligence for smart processes and data-driven <br />
							<br />
							decisions. What, Why and How?
						</p>
						<button className="w-max rounded-3xl bg-neutral-900 p-2 px-5 text-gray-100">
							Read more
						</button>
					</div>
				</div>

				<div className="flex gap-12 rounded-3xl border border-gray-300 p-8 shadow-lg">
					<div className="flex-1 overflow-hidden rounded-3xl">
						<img
							className="w-full object-cover"
							src="https://res.cloudinary.com/dkezwrb3a/image/upload/v1689181150/agency-design/services/Rectangle_11_locipc.svg"
							alt=""
						/>
					</div>

					<div className="flex flex-1 flex-col justify-between gap-5 leading-loose">
						<h3 className="text-xl font-semibold">
							3. Game Development and AR/VR
						</h3>
						<p className="text-neutral-500">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an type and scrambled it to make a{" "}
							<br />
							<br />
							type specimen book. It has survived not only five centu
						</p>
						<button className="w-max rounded-3xl bg-neutral-900 p-2 px-5 text-gray-100">
							Read more
						</button>
					</div>
				</div>

				<div className="flex flex-row-reverse gap-12 rounded-3xl border border-gray-300 p-8 shadow-lg">
					<div className="flex-1 overflow-hidden rounded-3xl">
						<img
							className="w-full object-cover"
							src="https://res.cloudinary.com/dkezwrb3a/image/upload/v1689181150/agency-design/services/Rectangle_10_1_ec0mn8.svg"
							alt=""
						/>
					</div>

					<div className="flex flex-1 flex-col justify-between gap-5 leading-loose">
						<h3 className="text-xl font-semibold">
							4. Web and Software Development
						</h3>
						<p className="text-neutral-500">
							From automation to advanced analytics and seamless experiences, we
							can embed AI in business. We'll deliver new operating models and
							strategic intelligence for smart processes and data-driven
							decisions.
							<br />
							<br />
							What, Why and How?
						</p>
						<button className="w-max rounded-3xl bg-neutral-900 p-2 px-5 text-gray-100">
							Read more
						</button>
					</div>
				</div>

				<div className="flex gap-12 rounded-3xl border border-gray-300 p-8 shadow-lg">
					<div className="flex-1 overflow-hidden rounded-3xl">
						<img
							className="w-full object-cover"
							src="https://res.cloudinary.com/dkezwrb3a/image/upload/v1689181150/agency-design/services/Rectangle_11_1_lpbtea.svg"
							alt=""
						/>
					</div>

					<div className="flex flex-1 flex-col justify-between gap-5 leading-loose">
						<h3 className="text-xl font-semibold">
							5. Mobile Application Development
						</h3>
						<p className="text-neutral-500">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an
							<br />
							<br />
							type and scrambled it to make a type specimen book. It has
							survived not only five centu
						</p>
						<button className="w-max rounded-3xl bg-neutral-900 p-2 px-5 text-gray-100">
							Read more
						</button>
					</div>
				</div>

				<div className="flex flex-row-reverse gap-12 rounded-3xl border border-gray-300 p-8 shadow-lg">
					<div className="flex-1 overflow-hidden rounded-3xl">
						<img
							className="w-full object-cover"
							src="https://res.cloudinary.com/dkezwrb3a/image/upload/v1689181150/agency-design/services/Rectangle_10_2_wlogfs.svg"
							alt=""
						/>
					</div>

					<div className="flex flex-1 flex-col justify-between gap-5 leading-loose">
						<h3 className="text-xl font-semibold">6. SEO</h3>
						<p className="text-neutral-500">
							From automation to advanced analytics and seamless experiences, we
							can embed AI in business. We'll deliver new operating models and
							strategic intelligence for smart processes and data-driven
							decisions.
							<br />
							<br />
							What, Why and How?
						</p>
						<button className="w-max rounded-3xl bg-neutral-900 p-2 px-5 text-gray-100">
							Read more
						</button>
					</div>
				</div>

				<div className="flex gap-12 rounded-3xl border border-gray-300 p-8 shadow-lg">
					<div className="flex-1 overflow-hidden rounded-3xl">
						<img
							className="w-full object-cover"
							src="https://res.cloudinary.com/dkezwrb3a/image/upload/v1689181149/agency-design/services/Rectangle_11_2_uemsh2.svg"
							alt=""
						/>
					</div>

					<div className="flex flex-1 flex-col justify-between gap-5 leading-loose">
						<h3 className="text-xl font-semibold">
							5. Mobile Application Development
						</h3>
						<p className="text-neutral-500">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an
							<br />
							<br />
							type and scrambled it to make a type specimen book. It has
							survived not only five centu
						</p>
						<button className="w-max rounded-3xl bg-neutral-900 p-2 px-5 text-gray-100">
							Read more
						</button>
					</div>
				</div>

				<div className="flex flex-row-reverse gap-12 rounded-3xl border border-gray-300 p-8 shadow-lg">
					<div className="flex-1 overflow-hidden rounded-3xl">
						<img
							className="w-full object-cover"
							src="https://res.cloudinary.com/dkezwrb3a/image/upload/v1689181152/agency-design/services/Rectangle_10_3_rj8kwt.svg"
							alt=""
						/>
					</div>

					<div className="flex flex-1 flex-col justify-between gap-5 leading-loose">
						<h3 className="text-xl font-semibold">6. SEO</h3>
						<p className="text-neutral-500">
							From automation to advanced analytics and seamless experiences, we
							can embed AI in business. We'll deliver new operating models and
							strategic intelligence for smart processes and data-driven
							decisions.
							<br />
							<br />
							What, Why and How?
						</p>
						<button className="w-max rounded-3xl bg-neutral-900 p-2 px-5 text-gray-100">
							Read more
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
