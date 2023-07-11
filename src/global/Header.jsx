import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
	let activeNav = "underlineNav";

	return (
		<>
			{/* <Header> */}
			<header className=" flex h-20 w-screen items-center justify-between border-b border-gray-50/10 bg-neutral-900 px-10 text-gray-50">
				<p className="text-3xl font-bold">LOGO</p>
				<nav className="flex h-full items-center gap-16 text-base">
					<ul className="flex h-full items-center gap-16">
						<li className="flex h-full items-center">
							<NavLink
								to="/"
								style={{
									height: "100%",
									display: "flex",
									alignItems: "center",
								}}
								className={({ isActive }) => (isActive ? activeNav : undefined)}
							>
								Home
							</NavLink>
						</li>
						<li className="flex h-full items-center">
							<NavLink
								to="About"
								style={{
									height: "100%",
									display: "flex",
									alignItems: "center",
								}}
								className={({ isActive }) => (isActive ? activeNav : undefined)}
							>
								About us
							</NavLink>
						</li>
						<li className="flex h-full items-center">
							<NavLink
								to="Services"
								style={{
									height: "100%",
									display: "flex",
									alignItems: "center",
								}}
								className={({ isActive }) => (isActive ? activeNav : undefined)}
							>
								Services
							</NavLink>
						</li>
						<li className="flex h-full items-center">
							<NavLink
								to="News"
								style={{
									height: "100%",
									display: "flex",
									alignItems: "center",
								}}
								className={({ isActive }) => (isActive ? activeNav : undefined)}
							>
								News
							</NavLink>
						</li>
					</ul>

					<button className="rounded-md border border-sky-400 px-5 py-2">
						Contact us
					</button>
				</nav>
			</header>
		</>
	);
}

export default Header;
