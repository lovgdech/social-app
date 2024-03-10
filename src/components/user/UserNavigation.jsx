import { MoreHorizontal } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import { Button } from "@/components/ui/button";

function UserNavigation() {
  const location = useLocation();
  let pathname = location.pathname.toString().split("/")[2];

  return (
    <div className="flex items-center bg-white rounded-b-lg border border-stone-300 border-t-0 gap-2 px-2">
      <ul className="flex-1 flex justify-center items-center gap-4">
        <li>
          <NavLink
            className={`py-4 block px-1 text-sm font-stone-500 ${
              pathname === ""
                ? "border-b-2 border-teal-500"
                : "border-b-2 border-transparent"
            }`}
            to="/"
          >
            Activity
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`py-4 block px-1 text-sm font-stone-500 ${
              pathname === "friends"
                ? "border-b-2 border-teal-500"
                : "border-b-2 border-transparent"
            }`}
            to="friends"
          >
            Friends
          </NavLink>
        </li>

        <li>
          <NavLink
            className={`py-4 block px-1 text-sm font-stone-500 ${
              pathname === "photos"
                ? "border-b-2 border-teal-500"
                : "border-b-2 border-transparent"
            }`}
            to="photos"
          >
            Photos
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`py-4 block px-1 text-sm font-stone-500 ${
              pathname === "chats"
                ? "border-b-2 border-teal-500"
                : "border-b-2 border-transparent"
            }`}
            to="chats"
          >
            Messages
          </NavLink>
        </li>
        <li className="hidden md:block">
          <NavLink
            className={`py-4 block px-1 text-sm font-stone-500 ${
              pathname === "groups"
                ? "border-b-2 border-teal-500"
                : "border-b-2 border-transparent"
            }`}
            to="groups"
          >
            Groups
            <span className="text-sm ml-2 px-2 py-1 border border-stone-300 rounded-full">
              14
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`py-4 block px-1 text-sm font-stone-500 ${
              pathname === "profile"
                ? "border-b-2 border-teal-500"
                : "border-b-2 border-transparent"
            }`}
            to="profile"
          >
            Profile
          </NavLink>
        </li>
        <li className="hidden lg:block">
          <NavLink
            className={`py-4 block px-1 text-sm font-stone-500 ${
              pathname === ""
                ? "border-b-2 border-teal-500"
                : "border-b-2 border-transparent"
            }`}
            to="invitations"
          >
            Invitations
          </NavLink>
        </li>
        <li className="hidden md:block">
          <NavLink
            className={`py-4 block px-1 text-sm font-stone-500 ${
              pathname === ""
                ? "border-b-2 border-teal-500"
                : "border-b-2 border-transparent"
            }`}
            to="/forums"
          >
            Forums
          </NavLink>
        </li>
        <li className="hidden md:block">
          <NavLink
            className={`py-4 block px-1 text-sm font-stone-500 ${
              pathname === "settings"
                ? "border-b-2 border-teal-500"
                : "border-b-2 border-transparent"
            }`}
            to="settings"
          >
            Settings
          </NavLink>
        </li>
        <li className="hidden lg:block">
          <NavLink
            className={`py-4 block px-1 text-sm font-stone-500 ${
              pathname === ""
                ? "border-b-2 border-teal-500"
                : "border-b-2 border-transparent"
            }`}
            to="points"
          >
            Points
          </NavLink>
        </li>
      </ul>
      <Button className="hidden md:block" variant="ghost" size="icon">
        <MoreHorizontal size="20" />
      </Button>
    </div>
  );
}

export default UserNavigation;
