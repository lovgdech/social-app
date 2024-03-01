import React from "react";
import Blog from "../components/Blog";
import ActiveUser from "../components/ActiveUser";
import CreatePost from "../components/CreatePost";
import HeaderPosts from "../components/HeaderPosts";

function HomePage() {
  return (
    <div className="max-w-[1300px] h-full px-5 mx-auto flex gap-5 justify-between">
      <div className="flex-1 overflow-hidden overflow-y-auto flex flex-col gap-2">
        <Blog />
        <ActiveUser />
      </div>
      <div className="flex-[2] overflow-hidden overflow-y-auto flex flex-col gap-2">
        <CreatePost />
        <HeaderPosts />
      </div>
      <div className="flex-1 overflow-hidden overflow-y-auto">right</div>
    </div>
  );
}

export default HomePage;
