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
            to="#"
          >
            Activity
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`py-4 block px-1 text-sm font-stone-500 ${
              pathname === ""
                ? "border-b-2 border-teal-500"
                : "border-b-2 border-transparent"
            }`}
            to="#"
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
            to="#"
          >
            Photos
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`py-4 block px-1 text-sm font-stone-500 ${
              pathname === ""
                ? "border-b-2 border-teal-500"
                : "border-b-2 border-transparent"
            }`}
            to="#"
          >
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`py-4 block px-1 text-sm font-stone-500 ${
              pathname === ""
                ? "border-b-2 border-teal-500"
                : "border-b-2 border-transparent"
            }`}
            to="#"
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
            to="#"
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`py-4 block px-1 text-sm font-stone-500 ${
              pathname === ""
                ? "border-b-2 border-teal-500"
                : "border-b-2 border-transparent"
            }`}
            to="#"
          >
            Invitations
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`py-4 block px-1 text-sm font-stone-500 ${
              pathname === ""
                ? "border-b-2 border-teal-500"
                : "border-b-2 border-transparent"
            }`}
            to="#"
          >
            Forums
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`py-4 block px-1 text-sm font-stone-500 ${
              pathname === ""
                ? "border-b-2 border-teal-500"
                : "border-b-2 border-transparent"
            }`}
            to="#"
          >
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`py-4 block px-1 text-sm font-stone-500 ${
              pathname === ""
                ? "border-b-2 border-teal-500"
                : "border-b-2 border-transparent"
            }`}
            to="#"
          >
            Points
          </NavLink>
        </li>
      </ul>
      <Button variant="ghost" size="icon">
        <MoreHorizontal size="20" />
      </Button>
    </div>
  );
}

export default UserNavigation;
