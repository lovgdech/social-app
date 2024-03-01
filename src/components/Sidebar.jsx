import { LogOut, Menu } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { links } from "../contains";
import LinkItem from "./LinkItem";
import { useAuth } from "../store/auth-provider";

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
      className={`absolute top-0 left-0 w-max h-screen overflow-hidden overflow-y-auto border-r border-stone-300 flex flex-col justify-between z-10 bg-white transition-all`}
    >
      <div className="w-max ml-5 h-20 flex items-center justify-center">
        <Menu className="cursor-pointer" size={30} onClick={handleToggleMenu} />
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

      <div
        className="w-full h-12 flex items-center justify-center mb-6 font-medium hover:text-teal-500 transition"
        onClick={handleLogout}
      >
        <LogOut className="mx-6 cursor-pointer" size={22} />
        <p className={`flex-1 pr-10 ${toggle ? "inline-flex" : "hidden"}`}>
          Log out
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;
