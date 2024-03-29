import { Dot, Facebook, Linkedin, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";

function UserNavigation() {
  return (
    <>
      <div className="w-full h-[140px] sm:h-[200px] md:h-[280px] relative">
        <img
          className="w-full h-full object-cover"
          src="/assets/images/profile-bg.jpg"
          alt=""
        />

        <div className="absolute right-5 bottom-5 flex items-center gap-1">
          <Button className="rounded-full" variant="ghost" size="icon">
            <Facebook />
          </Button>
          <Button className="rounded-full" variant="ghost" size="icon">
            <Twitter />
          </Button>
          <Button className="rounded-full" variant="ghost" size="icon">
            <Linkedin />
          </Button>
        </div>
      </div>
      <div className="w-full flex items-center bg-white border border-stone-300 gap-4 p-6 py-4 sm:p-8 sm:py-6">
        <img
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-md"
          src="/assets/images/avatar.jpg"
          alt=""
        />
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-xl md:text-3xl">John</h3>
            <span className="inline-block font-medium rounded-sm text-sm md:text-base ml-4 w-max py-1 px-2 border border-stone-300">
              Developer team
            </span>
          </div>
          <p className="text-sm sm:text-base">
            @user <Dot className="inline-flex" />{" "}
            <br className="inline sm:hidden" /> Joined : November 2, 2024
          </p>
          <div className="flex items-center gap-4">
            <p className="text-medium text-base md:text-xl">
              12{" "}
              <span className="text-sm sm:text-base font-thin">Followers</span>
            </p>
            <p className="text-medium text-base md:text-xl">
              5{" "}
              <span className="text-sm sm:text-base font-thin">Followings</span>
            </p>
            <p className="text-medium text-base md:text-xl">
              8.9k{" "}
              <span className="text-sm sm:text-base font-thin">Points</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserNavigation;
