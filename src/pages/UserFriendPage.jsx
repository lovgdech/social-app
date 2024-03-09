import { MessageCircleWarning } from "lucide-react";
import React from "react";

function UserFriendPage() {
  return (
    <div className="w-full flex border border-stone-300 items-center rounded-md overflow-hidden mt-4">
      <button className="w-10 h-10 flex bg-sky-500 text-white items-center justify-center">
        <MessageCircleWarning size="20" />
      </button>
      <p className="px-4">Sorry, no members were found.</p>
    </div>
  );
}

export default UserFriendPage;
