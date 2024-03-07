import React from "react";

function BlogTrending() {
  return (
    <div className="w-full bg-white p-4 rounded-md flex flex-col gap-2 border border-stone-300">
      <h4 className="text-stone-500 uppercase text-lg font-medium">
        Trending posts
      </h4>
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

export default BlogTrending;
