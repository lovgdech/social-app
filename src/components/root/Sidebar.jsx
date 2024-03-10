import { ChevronLeft, ChevronRight, LogOut, Menu } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { links } from "../../contains";
import LinkItem from "./LinkItem";
import { useAuth } from "../../store/auth-provider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function Sidebar() {
  const [toggle, setToggle] = useState(false);
  const { setIsAuth } = useAuth();
  const navigate = useNavigate();

  function handleToggleMenu() {
    setToggle((prevState) => !prevState);
  }

  function handleLogout() {
    setIsAuth(false);
    localStorage.removeItem("social_authentication");
    alert("Logout success!");
    navigate("/auth/sign-in");
  }

  return (
    <aside
      className={`absolute top-0 left-0 w-max h-20 sm:h-screen overflow-hidden sm:overflow-y-auto border-r border-stone-300 flex flex-col justify-between z-50 bg-white transition-all no-scrollbar ${
        toggle && "h-screen"
      }`}
    >
      <div className="w-max ml-5 h-20 flex items-center justify-center flex-shrink-0">
        {toggle ? (
          <ChevronLeft
            className="cursor-pointer"
            size={30}
            onClick={handleToggleMenu}
          />
        ) : (
          <ChevronRight
            className="cursor-pointer"
            size={30}
            onClick={handleToggleMenu}
          />
        )}
      </div>

      <nav className="flex-1 w-full">
        <ul className="flex flex-col gap-1 justify-center">
          {links.map(({ title, icon, path }) => (
            <LinkItem
              key={title}
              title={title}
              Icon={icon}
              path={path}
              toggle={toggle}
            />
          ))}
        </ul>
      </nav>

      {!toggle && (
        <TooltipProvider>
          <Tooltip delayDuration="300">
            <TooltipTrigger asChild>
              <div
                className="w-full h-12 flex items-center justify-center mb-6 font-medium hover:text-teal-500 transition flex-shrink-0"
                onClick={handleLogout}
              >
                <LogOut className="mx-6 cursor-pointer" size={22} />
                <p
                  className={`flex-1 pr-10 ${
                    toggle ? "inline-flex" : "hidden"
                  }`}
                >
                  Log out
                </p>
              </div>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Log out</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}

      {toggle && (
        <div
          className="w-full h-12 flex items-center justify-center mb-6 font-medium hover:text-teal-500 transition flex-shrink-0"
          onClick={handleLogout}
        >
          <LogOut className="mx-6 cursor-pointer" size={22} />
          <p className={`flex-1 pr-10 ${toggle ? "inline-flex" : "hidden"}`}>
            Log out
          </p>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
