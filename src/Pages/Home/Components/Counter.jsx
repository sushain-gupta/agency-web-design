import React from "react";

function Counter() {
  return (
    <>
      <section className="grid h-80 grid-cols-4 items-center bg-darkBlue text-white">
        <div className="flex w-full flex-col items-center justify-evenly">
          <h1 className="text-6xl font-semibold">6</h1>
          <p>Happy Clients</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-semibold">11</h1>
          <p>Completed Projects</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-semibold">7M</h1>
          <p>Transsactions</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-semibold">6000+</h1>
          <p>Customers</p>
        </div>
      </section>
    </>
  );
}

export default Counter;
