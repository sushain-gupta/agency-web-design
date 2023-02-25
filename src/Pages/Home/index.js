import React from "react";
import Counter from "./Components/Counter";
import Hero from "./Components/Hero";
import Main from "./Components/Main";
import WhatWeDo from "./Components/WhatWeDo";

function Home() {
  return (
    <>
      <Hero />
      <Main />
      <WhatWeDo />
      <Counter />
    </>
  );
}

export default Home;
