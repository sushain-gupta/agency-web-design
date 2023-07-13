import React from "react";
import Header from "./components/global/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/index";

import Services from "./Pages/Services/index";
import AboutUs from "./Pages/About/index";
import News from "./Pages/News/index";
import Footer from "./global/Footer";
import Contact from "./Pages/Contact/index";

const App = () => {
	// Your logic to calculate the width dynamically
	const getWidth = () => {
		const width = window.screen.width;
		return `${width}px`;
	};

	return (
		<div style={{ width: getWidth() }} className="app m-auto bg-gray-50">
			<Header />
			<div className="content">
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/about" element={<AboutUs />}></Route>
					<Route path="/services" element={<Services />}></Route>
					<Route path="/news" element={<News />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
				</Routes>
			</div>
			<Footer />
		</div>
	);
};

export default App;
