import { ArrowRight, Folder } from "lucide-react";

import { Button } from "@/components/ui/button";
function BlogItem() {
  return (
    <div className="w-full border border-stone-300 rounded-md">
      <img src="/assets/images/post-images-07.jpg" alt="" />
      <div className="w-ful p-4 flex flex-col gap-3">
        <h4 className="text-lg font-medium line-clamp-2">
          What is an Online Community? The Basics & Benefits
        </h4>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1">
            <img
              className="w-8 h-8 rounded-full"
              src="/assets/images/post-images-08.jpg"
              alt=""
            />
            <span className="text-sm text-black">CHARLIE</span>
          </div>
          <div className="flex items-center gap-1">
            <Folder size={18} />
            <span className="text-sm text-black">COMMUNITIES</span>
          </div>
        </div>

        <p className="w-full text-base line-clamp-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
          praesentium expedita quo ipsa ea atque, quaerat nulla enim minus,
          maxime quidem unde cum aliquid incidunt error nemo voluptatibus hic
          aliquam.
        </p>

        <Button
          className="text-stone-500 text-sm uppercase mr-auto w-max flex items-center gap-2 border border-stone-300"
          variant="ghost"
        >
          <p>READ MORE</p>
          <ArrowRight size={18} />
        </Button>
      </div>
    </div>
  );
}

export default BlogItem;
