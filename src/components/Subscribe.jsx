import React from "react";

const Subscribe = () => {
	return (
		<section className="p-32">
			<div className="flex rounded-xl bg-zinc-100 p-10">
				<div className="flex flex-1 flex-col gap-4">
					<h3 className="text-2xl font-semibold">Stay in the loop</h3>
					<p className="text-neutral-500">
						Subscribe to receive the latest news and updates about TDA. <br />{" "}
						We promise not to spam you!
					</p>
				</div>
				<div className="flex flex-1 items-center">
					<div className="m-auto rounded-lg bg-white p-1 pl-2">
						<input
							className="w-64 rounded-l-lg p-2 px-4 text-sm focus:outline-none"
							placeholder="Enter email address"
							type="text"
						/>
						<button className="rounded-lg bg-sky-500 p-2 px-4 text-gray-100">
							Continue
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Subscribe;
