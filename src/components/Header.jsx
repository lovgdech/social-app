import React from "react";
import { Bell, Search, Store } from "lucide-react";
import { Link } from "react-router-dom";

import logo from "/assets/images/logo.png";
import avatar from "/assets/images/avatar.jpg";
import NavLinkItem from "./NavLinkItem";
import { navLinks } from "../contains";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <div className="w-full h-20 sticky top-0 left-0 bg-white border-b border-slate-300 flex">
      <div className="w-20 h-20" />
      <header className="max-w-[1300px] flex-1 h-full px-5 mx-auto flex justify-between items-center">
        <div className="flex items-center gap-5">
          <Link to="/">
            <img className="h-7 object-contain" src={logo} alt="logo" />
          </Link>
          <div className="items-center relative hidden md:flex">
            <input
              className="p-2 px-4 pr-10 text-base outline-none border border-slate-300 rounded-md focus:border-teal-500 placeholder:text-slate-500 placeholder:text-sm"
              type="text"
              placeholder="Search community"
            />
            <label className="absolute right-2">
              <Search className="text-slate-500" size="18" />
            </label>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <ul className="xl:flex items-center gap-6 hidden">
            {navLinks.map(({ title, path, icon }) => (
              <NavLinkItem key={path} title={title} path={path} Icon={icon} />
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <div className="rounded-full h-8 w-8 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={avatar}
                alt="avatar"
              />
            </div>
            <Button className="rounded-full h-10 w-10 p-0" variant="ghost">
              <Store size={20} />
            </Button>
            <Button className="rounded-full h-10 w-10 p-0" variant="ghost">
              <Bell size={20} />
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
