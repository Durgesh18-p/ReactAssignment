import React from "react";
import StoryCarousel from "../components/StoryCarousel";
import Post from "../components/Post";

const HomePage = () => {
  return (
    <div className="bg-black w-full h-full">
      <StoryCarousel />
      <Post />
    </div>
  );
};

export default HomePage;
