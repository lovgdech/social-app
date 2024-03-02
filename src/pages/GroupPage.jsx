import { Search } from "lucide-react";
import React, { useState } from "react";
import GroupItem from "../components/group/GroupItem";
import { useNavigate } from "react-router-dom";

function GroupPage() {
  const [activeOption, setActiveOption] = useState(2);
  const navigate = useNavigate();

  return (
    <div className="w-full px-5">
      <div className="w-full h-full overflow-hidden overflow-y-auto flex flex-col gap-2 no-scrollbar pb-32">
        <header className="w-full border border-stone-300 flex items-center justify-between px-8 gap-2 bg-white rounded-lg">
          <div className="flex items-center gap-4">
            <p
              onClick={() => setActiveOption(1)}
              className={`py-4 border-b-2 text-sm font-medium cursor-pointer ${
                activeOption === 1 ? "border-teal-500" : "border-transparent"
              }`}
            >
              All groups
            </p>
            <p
              onClick={() => setActiveOption(2)}
              className={`py-4 border-b-2 text-sm font-medium cursor-pointer ${
                activeOption === 2 ? "border-teal-500" : "border-transparent"
              }`}
            >
              My groups
            </p>
            <p
              onClick={() => navigate("/groups/create")}
              className={`py-4 border-b-2 text-sm font-medium cursor-pointer ${
                activeOption === 3 ? "border-teal-500" : "border-transparent"
              }`}
            >
              Create a group
            </p>
          </div>

          <div className="flex items-center gap-1">
            <Search className="text-stone-500" size={20} />
            <input
              className="p-2 text-base outline-none"
              type="text"
              placeholder="Search..."
            />
          </div>
        </header>
        <div className="grid grid-cols-4 gap-2">
          <GroupItem />
          <GroupItem />
          <GroupItem />
          <GroupItem />
          <GroupItem />
          <GroupItem />
        </div>

        <p className="text-black text-sm">Viewing 1 - 6 of 6 groups</p>
      </div>
    </div>
  );
}

export default GroupPage;
