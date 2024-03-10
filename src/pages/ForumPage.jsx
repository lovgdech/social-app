import { Check, Folder, MessageCircle, PenLine, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import ForumTopic from "../components/forum/ForumTopic";
import ForumStatistic from "../components/forum/ForumStatistic";
import { Link } from "react-router-dom";
import { forums } from "@/contains";
import ForumItem from "../components/forum/ForumItem";

function ForumPage() {
  return (
    <div className="w-full h-full overflow-hidden">
      <div className="w-full h-full overflow-y-auto no-scrollbar pb-32">
        <div className="w-full h-[280px] relative">
          <img
            className="absolute w-full h-full object-cover"
            src="/assets/images/forums-bg.jpg"
            alt="forums-bg"
          />

          <div className="relative w-full h-full max-w-[1300px] mx-auto px-5 flex flex-col gap-4 items-center md:items-start justify-center z-10 text-white ">
            <h2 className="text-4xl font-bold">Community Forums</h2>
            <p className="max-w-[500px] text-center md:text-left">
              Find answers, ask questions, and connect with our community around
              the world.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <p className="flex items-center gap-2">
                <Folder className="text-teal-500 flex-shrink-0" size={16} />
                <span className="text-[12px] uppercase font-medium">
                  30 Topics
                </span>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle
                  className="text-teal-500 flex-shrink-0"
                  size={16}
                />
                <span className="text-[12px] uppercase font-medium">
                  21 Replies
                </span>
              </p>
              <p className="flex items-center gap-2">
                <User className="text-teal-500 flex-shrink-0" size={16} />
                <span className="text-[12px] uppercase font-medium">
                  13 Member
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-white">
          <div className="relative w-full h-full max-w-[1300px] mx-auto px-5 gap-2 flex items-center justify-between py-2">
            <div className="flex items-center gap-4">
              <div className="h-8 w-8 flex-shrink-0 rounded-full bg-violet-500 flex items-center justify-center">
                <Check color="white" size={20} />
              </div>
              <p>ASK QUESTIONS AND HELP OTHERS</p>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <div className="h-8 w-8 flex-shrink-0 rounded-full bg-teal-500 flex items-center justify-center">
                <Check color="white" size={20} />
              </div>
              <p>DISCUSS SUBJECTS YOU&#39;RE STUDYING</p>
            </div>
            <div className="hidden lg:flex items-center gap-4">
              <div className="h-8 w-8 flex-shrink-0 rounded-full bg-sky-500 flex items-center justify-center">
                <Check color="white" size={20} />
              </div>
              <p>MEET LEARNERS AROUND THE WORLD</p>
            </div>
            <Button className="px-12 rounded-lg flex gap-2 items-center py-6 bg-teal-500 hover:bg-teal-600 transition text-sm">
              <p>Write post</p>
              <PenLine size={20} />
            </Button>
          </div>
        </div>

        <div className="relative max-w-[1300px] mx-auto px-5 flex gap-4 z-10 mt-6 flex-wrap">
          <div className="flex flex-1 flex-col gap-4">
            <div className="w-full border border-stone-300 rounded-lg overflow-hidden bg-white">
              <div className="p-4 flex flex-col md:flex-row gap-2 items-start md:items-center justify-between hover:bg-stone-200 transition">
                <div className="flex gap-2 max-w-[300px] w-full flex-1">
                  <MessageCircle className="mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-base font-medium">Blood Donars</h4>
                    <p className="text-sm line-clamp-1">Blood Donation</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm  flex-1 justify-center">
                  <div className="flex flex-col items-center">
                    <p>0</p>
                    <p>Topics</p>
                  </div>
                  <div className="" />
                  <div className="flex flex-col items-center">
                    <p>0</p>
                    <p>Replies</p>
                  </div>
                </div>

                <p className="flex-shrink-0 flex-1 justify-center text-center">
                  5 days, 15 hours ago •
                </p>
              </div>
            </div>
            {forums.map((item, index) => (
              <ForumItem item={item} key={index} />
            ))}
          </div>

          <div className="w-full lg:w-[320px] flex flex-col gap-2">
            <ForumTopic />
            <div className="w-full border border-stone-300 rounded-md px-4 pb-2 bg-white">
              <h4 className="font-medium my-2 text-lg">Forums</h4>
              <ul className="flex flex-col gap-1 list-disc pl-4">
                <li className="">
                  <Link className="font-medium text-sm line-clamp-2" to="#">
                    $$$
                  </Link>
                </li>
                <li className="">
                  <Link className="font-medium text-sm line-clamp-2" to="#">
                    Community Groups
                  </Link>
                </li>
                <li className="">
                  <Link className="font-medium text-sm line-clamp-2" to="#">
                    Information / Vip File
                  </Link>
                </li>
                <li className="">
                  <Link className="font-medium text-sm line-clamp-2" to="#">
                    MetaFans Common Room
                  </Link>
                </li>
              </ul>
            </div>
            <ForumStatistic />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForumPage;
