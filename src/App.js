import React from "react";
import Header from "./global/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/index";

import Services from "./Pages/Services/index";
import AboutUs from "./Pages/About/index";
import News from "./Pages/News/index";
import Footer from "./global/Footer";

const App = () => {
	// Your logic to calculate the width dynamically
	const getWidth = () => {
		const width = window.screen.width;
		return `${width}px`;
	};

	return (
		<div style={{ width: getWidth() }} className={`app m-auto`}>
			<Header />
			<div className="content">
				<Routes>
					<Route exact path="/" element={<Home />}></Route>
					<Route exact path="/about" element={<AboutUs />}></Route>
					<Route exact path="/services" element={<Services />}></Route>
					<Route exact path="/news" element={<News />}></Route>
				</Routes>
			</div>
			<Footer />
		</div>
	);
};

export default App;
