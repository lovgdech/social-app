import { Check, MessageCircle, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useState } from "react";

function MemberItem() {
  const [following, setFollowing] = useState();
  return (
    <div className="w-full rounded-lg overflow-hidden max-w-[350px] border border-stone-300">
      <img
        className="w-full h-[120px] object-cover"
        src="/assets/images/member-bg.jpg"
        alt="backgound"
      />
      <div className="relative W-full flex items-center flex-col gap-4 pb-4 bg-white px-4">
        <img
          className="w-24 rounded-lg h-2w-24 absolute -top-[70px] z-10 object-cover"
          src="/assets/images/member-avatar.jpg"
          alt="avatar"
        />

        <div className="flex flex-col items-center mt-8">
          <h4 className="font-bold text-lg">MetaFans</h4>
          <p className="text-sm text-stone-500">Developer Team</p>
        </div>

        <div className="flex gap-4">
          <div className="flex items-center flex-col">
            <p className="font-medium">11</p>
            <span className="text-sm">Followers</span>
          </div>
          <div className="flex items-center flex-col">
            <p className="font-medium">10</p>
            <span className="text-sm">Followings</span>
          </div>
        </div>

        <div className="w-full flex items-center gap-2">
          {following && (
            <Button
              className="flex-1 w-full flex gap-2 bg-sky-700 hover:bg-sky-800"
              onClick={() => setFollowing(false)}
            >
              <Check size={20} />
              <p>Following</p>
            </Button>
          )}

          {!following && (
            <Button
              className="flex-1 w-full flex gap-2"
              variant="outline"
              onClick={() => setFollowing(true)}
            >
              <Plus size={20} />
              <p>Follow</p>
            </Button>
          )}
          <Button variant="outline">
            <MessageCircle size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MemberItem;
