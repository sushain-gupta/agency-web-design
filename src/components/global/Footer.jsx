import React from "react";
import FooterLink from "../FooterLinks";

function Footer() {
	return (
		<>
			<section className="flex flex-col bg-slate-950 px-4 py-12 text-slate-200 sm:px-8 lg:px-20">
				<div className="flex flex-col md:flex-row">
					<div className="grid w-full grid-cols-2 gap-8 p-8 max-[500px]:grid-cols-1 sm:grid-cols-2 md:w-3/4 lg:w-1/2 xl:w-3/4 2xl:grid-cols-4">
						<div className="flex flex-col gap-5">
							<h2 className="text-xl">Services</h2>
							<ul className="flex flex-col gap-2">
								<FooterLink to="/" linkName={"Web Hosting"}></FooterLink>
								<FooterLink to="/" linkName={"Domains"}></FooterLink>
								<FooterLink to="/" linkName={"Premium Hosting"}></FooterLink>
								<FooterLink to="/" linkName={"Private Server"}></FooterLink>
								<FooterLink to="/" linkName={"E-mail Hosting"}></FooterLink>
							</ul>
						</div>
						<div className="flex flex-col gap-5">
							<h2 className="text-xl">Support</h2>
							<ul className="flex flex-col gap-2">
								<FooterLink to="/" linkName={"Pricing Plan"}></FooterLink>
								<FooterLink to="/" linkName={"Documentation"}></FooterLink>
								<FooterLink to="/" linkName={"Guide"}></FooterLink>
								<FooterLink to="/" linkName={"Tutorial"}></FooterLink>
							</ul>
						</div>
						<div className="flex flex-col gap-5">
							<h2 className="text-xl">Company</h2>
							<ul className="flex flex-col gap-2">
								<FooterLink to="/" linkName={"About"}></FooterLink>
								<FooterLink to="/" linkName={"Blog"}></FooterLink>
								<FooterLink to="/" linkName={"Join us"}></FooterLink>
								<FooterLink to="/" linkName={"Press"}></FooterLink>
								<FooterLink to="/" linkName={"Partners"}></FooterLink>
							</ul>
						</div>
						<div className="flex flex-col gap-5">
							<h2 className="text-xl">Legal</h2>
							<ul className="flex flex-col gap-2">
								<FooterLink to="/" linkName={"Claim"}></FooterLink>
								<FooterLink to="/" linkName={"Privacy"}></FooterLink>
								<FooterLink to="/" linkName={"Terms"}></FooterLink>
							</ul>
						</div>
					</div>

					<div className="flex w-full flex-col gap-5 md:w-1/2 lg:w-1/2 xl:w-1/4 2xl:w-1/3 p-8">
						<h2 className="text-xl font-bold">Subscribe to our newsletter</h2>
						<p>
							Funding freemium long tail hypotheses first mover advantage assets
							ownership
						</p>
						<div className="flex flex-col gap-2 lg:flex-row">
							<input
								type="email"
								className="w-full rounded-lg p-2 text-slate-900 focus:outline-none"
								placeholder="Your email address…"
							/>
							<button className="rounded-lg bg-[#6E00FA] p-2">Subscribe</button>
						</div>
					</div>
				</div>

				<p className="w-full border-t border-gray-500 pt-10 text-center text-gray-500">
					Design with love © TanahAirStudio 2020. All rights reserved
				</p>
			</section>
		</>
	);
}

export default Footer;
