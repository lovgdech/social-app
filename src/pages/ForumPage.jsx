import { Check, Folder, MessageCircle, PenLine, User } from "lucide-react";

import { Button } from "@/components/ui/button";

function ForumPage() {
  return (
    <div className="w-full h-full overflow-hidden">
      <div className="w-full h-[300px] relative">
        <img
          className="absolute w-full h-full object-cover"
          src="/assets/images/forums-bg.jpg"
          alt="forums-bg"
        />

        <div className="relative w-full h-full max-w-[1300px] mx-auto px-5 flex flex-col gap-4 items-start justify-center z-10 text-white ">
          <h2 className="text-4xl font-bold">Community Forums</h2>
          <p className="max-w-[500px]">
            Find answers, ask questions, and connect with our community around
            the world.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <p className="flex items-center gap-2">
              <Folder className="text-teal-500" size={16} />
              <span className="text-[12px] uppercase font-medium">
                30 Topics
              </span>
            </p>
            <p className="flex items-center gap-2">
              <MessageCircle className="text-teal-500" size={16} />
              <span className="text-[12px] uppercase font-medium">
                21 Replies
              </span>
            </p>
            <p className="flex items-center gap-2">
              <User className="text-teal-500" size={16} />
              <span className="text-[12px] uppercase font-medium">
                13 Member
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="relative w-full h-full max-w-[1300px] mx-auto px-5 flex items-center justify-between py-2">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-violet-500 flex items-center justify-center">
              <Check color="white" size={20} />
            </div>
            <p>ASK QUESTIONS AND HELP OTHERS</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-teal-500 flex items-center justify-center">
              <Check color="white" size={20} />
            </div>
            <p>DISCUSS SUBJECTS YOU&#39;RE STUDYING</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-sky-500 flex items-center justify-center">
              <Check color="white" size={20} />
            </div>
            <p>MEET LEARNERS AROUND THE WORLD</p>
          </div>
          <Button className="px-12 rounded-lg flex gap-2 items-center py-6 bg-teal-500 hover:bg-teal-600 transition text-base">
            <p>Write post</p>
            <PenLine size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ForumPage;
