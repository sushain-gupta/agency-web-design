import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

function NewsCard({ image, date, title, desc }) {
  return (
    <>
      <div className="flex h-[640px] w-full flex-col gap-3">
        <div className="min-h-[45%] w-full overflow-hidden rounded-t-2xl">
          <img
            className="h-full max-h-full w-full object-cover"
            src={image}
            alt=""
          />
        </div>

        <div className="flex h-full flex-col justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-medium text-[#6A6A6A]">{date}</p>
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>

          <div className="flex flex-col">
            <p className="w-[90%] text-[#797979]">{desc}</p>
            <p className="m-3 ml-auto flex items-center gap-2 text-right font-semibold">
              Read more <HiArrowLongRight size={40} />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsCard;
