import { useState } from "react";
import GroupItem from "./GroupItem";

function GroupsList() {
  const [activeOption, setActiveOption] = useState(1);
  return (
    <div className="w-full flex flex-col gap-1 py-2 bg-white rounded-md border border-stone-300">
      <h4 className="font-bold text-lg px-4">Groups</h4>
      <div className="flex items-center gap-4 border-b border-stone-300 px-4">
        <p
          onClick={() => setActiveOption(1)}
          className={`py-2 border-b text-sm font-medium cursor-pointer ${
            activeOption === 1 ? "border-teal-500" : "border-transparent"
          }`}
        >
          Newest
        </p>
        <p
          onClick={() => setActiveOption(2)}
          className={`py-2 border-b text-sm font-medium cursor-pointer ${
            activeOption === 2 ? "border-teal-500" : "border-transparent"
          }`}
        >
          Active
        </p>
        <p
          onClick={() => setActiveOption(3)}
          className={`py-2 border-b text-sm font-medium cursor-pointer ${
            activeOption === 3 ? "border-teal-500" : "border-transparent"
          }`}
        >
          Popular
        </p>
      </div>
      <ul className="mt-1">
        <GroupItem index="1" />
        <GroupItem index="2" />
        <GroupItem index="3" />
        <GroupItem index="4" />
        <GroupItem index="5" />
      </ul>
    </div>
  );
}

export default GroupsList;
