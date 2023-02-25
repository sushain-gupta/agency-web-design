import React from "react";

function WhatWeDoCard({ image, bgColor, heading, text }) {
  return (
    <>
      <div className="flex h-full flex-col items-center gap-10 text-center">
        <div
          className={`flex h-max w-max items-center justify-center overflow-hidden rounded-2xl p-5 ${bgColor}`}
        >
          <img className="max-h-full max-w-full" src={image} alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">{heading}</h3>
          <p className="text-[#797979]">{text}</p>
        </div>
      </div>
    </>
  );
}

export default WhatWeDoCard;
