import { Link } from "react-router-dom";
import React from "react";

function ForumTopic() {
  return (
    <div className="w-full border border-stone-300 rounded-md px-4 pb-2 bg-white">
      <h4 className="font-medium my-2 text-lg">Recent topics</h4>
      <ul className="flex flex-col gap-1 list-disc pl-4">
        <li>
          <Link
            className="font-medium text-sm line-clamp-2 hover:underline transition"
            to="#"
          >
            [ GET ] Zoom Master PLR + OTO + OTO Bonuses
          </Link>
          <p className="text-stone-500 text-[12px]">2 years, 11 months ago</p>
        </li>
        <li>
          <Link
            className="font-medium text-sm line-clamp-2 hover:underline transition"
            to="#"
          >
            How to Make Money On YouTube Without Making Videos $99
          </Link>
          <p className="text-stone-500 text-[12px]">2 years, 11 months ago</p>
        </li>
        <li>
          <Link
            className="font-medium text-sm line-clamp-2 hover:underline transition"
            to="#"
          >
            Get free access to a hands-on data science project!
          </Link>
          <p className="text-stone-500 text-[12px]">2 years, 11 months ago</p>
        </li>
        <li>
          <Link
            className="font-medium text-sm line-clamp-2 hover:underline transition"
            to="#"
          >
            December Community Highlights
          </Link>
          <p className="text-stone-500 text-[12px]">2 years, 11 months ago</p>
        </li>
        <li>
          <Link
            className="font-medium text-sm line-clamp-2 hover:underline transition"
            to="#"
          >
            [MetaFans for the Military Community] Let’s Connect!
          </Link>
          <p className="text-stone-500 text-[12px]">2 years, 11 months ago</p>
        </li>
      </ul>
    </div>
  );
}

export default ForumTopic;
