import {
  Dot,
  Globe,
  MessageCircle,
  MoreHorizontal,
  Share2,
  ThumbsUp,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

function Post({ like, comment, image, share }) {
  return (
    <div className="w-full py-4 pb-2 bg-white flex flex-col gap-4 border border-stone-300 rounded-lg">
      <header className="px-4 flex items-center justify-between gap-2">
        <Link to="#">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={`/assets/images/avatar.jpg`}
            alt="blog one"
          />
        </Link>

        <div className="flex-1 flex flex-col justify-start">
          <p className="text-stone-500 text-base">
            <Link className="mr-1 font-bold text-black" to="#">
              Leo Messi
            </Link>
            post an update
          </p>
          <div className="flex items-center gap-1">
            <span className="text-[12px] text-stone-700">just now</span>
            <Dot size={12} />
            <button>
              <Globe className="text-stone-500" size={16} />
            </button>
          </div>
        </div>

        <Button className="rounded-full" size="icon" variant="ghost">
          <MoreHorizontal size="20" />
        </Button>
      </header>

      <div className="w-full flex flex-col gap-4">
        <p className="px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          repellat provident cupiditate iusto adipisci aperiam facere, illo odit
          nihil vitae consequatur. Molestias eum inventore quas in modi, quia
          voluptatem quaerat?
        </p>

        {image && (
          <img
            className="w-full max-h-[500px] object-contain"
            src="/assets/images/sign-in-img.jpg"
          ></img>
        )}
      </div>

      {like || comment || share ? (
        <div className="flex items-center gap-6 px-4 text-stone-500">
          {like && (
            <div className="flex items-center gap-1 text-[#188cf0]">
              <ThumbsUp size={18} />
              <p className="text-sm font-medium">5 Likes</p>
            </div>
          )}
          {comment && (
            <div className="flex items-center gap-1">
              <MessageCircle size={18} />
              <p className="text-sm font-medium">2 Commments</p>
            </div>
          )}
          {share && (
            <div className="flex items-center gap-1">
              <Share2 size={18} />
              <p className="text-sm font-medium">2 Shares</p>
            </div>
          )}
        </div>
      ) : null}

      <div className="border-t border-stone-300 px-4 py-1 flex items-center gap-2 text-stone-500">
        <button
          className={`flex gap-1 items-center px-4 py-2 transition hover:bg-stone-100 rounded-md ${
            like && "text-[#188cf0]"
          }`}
        >
          <ThumbsUp strokeWidth={like ? "3" : "2"} size={20} />
          <p className="text-sm font-bold">Like</p>
        </button>
        <button className="flex gap-1 items-center px-4 py-2 transition hover:bg-stone-100 rounded-md">
          <MessageCircle size={20} />
          <p className="text-sm font-bold">Comment</p>
        </button>
        <button className="flex gap-1 items-center px-4 py-2 transition hover:bg-stone-100 rounded-md ml-auto">
          <Share2 size={20} />
          <p className="text-sm font-bold">Share</p>
        </button>
      </div>
    </div>
  );
}

export default Post;
