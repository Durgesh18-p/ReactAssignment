import React from "react";
import { carouselData } from "../Data/data";

const StoryCarousel = () => {
  return (
    <div className="flex  w-full gap-8 justify-center items-center  h-28 overflow-hidden bg-black p-7 space-x-4">
      {carouselData.map((data) => (
        <div key={data.id} className="flex flex-col items-center ">
          <img
            src={data.img}
            alt={`Model ${data.id}`}
            className="object-cover rounded-xl w-20"
          />
          <div className="flex justify-center items-center gap-1">
            <div className="rounded-full h-2 w-2 bg-pink-800"></div>
            <p className="text-white"> {data.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoryCarousel;
