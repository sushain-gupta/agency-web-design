import React from "react";
import Counter from "./Components/Counter";
import Hero from "./Components/Hero";
import Main from "./Components/Main";
import WhatWeDo from "./Components/WhatWeDo";
import LatestNews from "./Components/LatestNews";

function Home() {
  return (
    <>
      <Hero />
      <Main />
      <WhatWeDo />
      <Counter />
      <LatestNews />
    </>
  );
}

export default Home;
