import React from "react";
import { postData } from "../Data/data";
import { HiLightningBolt } from "react-icons/hi";
import { IoChatbubble } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { FaWindowRestore } from "react-icons/fa";

const Post = () => {
  return (
    <div className=" flex justify-center items-center flex-col gap-5 p-8 mt-10 ">
      {postData.map((data) => (
        <div
          key={data.id}
          className=" border-[#111827] border-[2px] p-4 rounded-lg"
        >
          <div className=" h-10 flex gap-3 items-center justify-center  w-80 ">
            <img
              src={data.img}
              alt="singer"
              className="rounded-full w-10 h-full"
            />
            <div className="text-white text-[14px]">
              <p className="font-bold text-2xl">{data.name}</p>
              <p>{data.occupation}</p>
            </div>
          </div>
          <div className="w-full h-60 mt-3">
            <img src={data.img} alt="Post" className="w-full h-full" />
          </div>
          <div className="">
            <div className="flex justify-center items-center ">
              <div className="w-full  flex  ">
                <div className="flex items-center space-x-1 m-2">
                  <HiLightningBolt className="text-white" />
                  <p className="text-white">1k</p>
                </div>
                <div className="flex items-center space-x-1">
                  <IoChatbubble className="text-white" />
                  <p className="text-white">100</p>
                </div>
              </div>
              <div className="flex space-x-2 ml-4">
                <FaLocationArrow className="text-white" />
                <GrMail className="text-white" />
                <FaWindowRestore className="text-white" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
