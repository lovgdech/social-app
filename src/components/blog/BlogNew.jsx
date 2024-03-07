import React from "react";

function BlogNew() {
  return (
    <div className="w-full bg-white p-4 rounded-md flex flex-col gap-2 border border-stone-300">
      <h4 className="text-stone-500 uppercase text-lg font-medium">
        Latest posts
      </h4>
      <img
        className="w-full h-[150px] rounded-md object-cover"
        src="/assets/images/blog-img1.jpg"
        alt=""
      />
      <div>
        <span className="text-[12px] text-stone-500">March 18, 2022</span>
        <p className="font-medium text-lg line-clamp-2">
          What is an Online Community? The Basics & Benefits
        </p>
      </div>
      <div className="flex items-start gap-2 hover:bg-stone-100 cursor-pointer rounded-md overflow-hidden transition">
        <img
          className="w-20 h-20 rounded-md"
          src="/assets/images/blog-img2.jpg"
          alt=""
        />
        <div>
          <span className="text-stone-500 text-[12px]">March 16, 2022</span>
          <p className="text-base font-medium text-black line-clamp-2">
            A new era for international associations – there is no turning
          </p>
        </div>
      </div>
      <div className="flex items-start gap-2 hover:bg-stone-100 cursor-pointer rounded-md overflow-hidden transition">
        <img
          className="w-20 h-20 rounded-md"
          src="/assets/images/blog-imge.jpg"
          alt=""
        />

        <div>
          <span className="text-stone-500 text-[12px]">March 12, 2022</span>
          <p className="text-base font-medium text-black line-clamp-2">
            Learn the Secrets of Online Community Management
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogNew;
