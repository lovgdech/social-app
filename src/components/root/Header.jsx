import { Bell, Menu, Search, Store } from "lucide-react";
import { Link } from "react-router-dom";

import logo from "/assets/images/logo.png";
import avatar from "/assets/images/avatar.jpg";
import NavLinkItem from "./NavLinkItem";
import { navLinks } from "../../contains";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
  return (
    <div className="w-full h-20 sticky top-0 left-0 bg-white border-b border-slate-300 flex z-10">
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
            {navLinks.map(({ title, path, icon, data }) => (
              <NavLinkItem
                key={path}
                title={title}
                path={path}
                Icon={icon}
                data={data}
              />
            ))}
          </ul>

          <div className="block xl:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="p-4 w-[220px]">
                <ul className="flex flex-col items-center gap-2">
                  {navLinks.map(({ title, path, icon, data }) => (
                    <NavLinkItem
                      key={path}
                      title={title}
                      path={path}
                      Icon={icon}
                      data={data}
                    />
                  ))}
                </ul>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full overflow-hidden p-0"
                >
                  <img
                    className="w-10 h-10 object-cover"
                    src={avatar}
                    alt="avatar"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-max p-0">
                <DropdownMenuLabel className="p-0">
                  <div className="w-full flex p-4 py-2 gap-2 items-center justify-center cursor-pointer">
                    <img
                      className="w-12 h-12 rounded-full object-cover"
                      src={`/assets/images/avatar.jpg`}
                      alt="blog one"
                    />
                    <div className="flex flex-col">
                      <p className="text-black text-base font-medium">
                        Hello, Leo Messi
                      </p>
                      <span className="text-[12px] text-stone-700">
                        Community moderator
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <ul className="flex flex-col w-full py-2">
                  <li className="cursor-pointer hover:bg-teal-100 hover:text-teal-900 block w-full py-2 px-4 pl-9 transition">
                    Profile
                  </li>
                  <li className="flex justify-between items-center cursor-pointer hover:bg-teal-100 hover:text-teal-900 w-full py-2 px-4 pl-9 transition">
                    <p>Topics</p>
                    <span className="p-2 text-[12px] py-[1px] rounded-full flex items-center justify-center bg-teal-500 text-white">
                      0
                    </span>
                  </li>
                  <li className="flex justify-between items-center cursor-pointer hover:bg-teal-100 hover:text-teal-900 w-full py-2 px-4 pl-9 transition">
                    <p>Groups</p>
                    <span className="p-2 text-[12px] py-[1px] rounded-full flex items-center justify-center bg-teal-500 text-white">
                      9
                    </span>
                  </li>
                  <li className="flex justify-between items-center cursor-pointer hover:bg-teal-100 hover:text-teal-900 w-full py-2 px-4 pl-9 transition">
                    <p>Friends</p>
                    <span className="p-2 text-[12px] py-[1px] rounded-full flex items-center justify-center bg-teal-500 text-white">
                      255
                    </span>
                  </li>
                  <li className="flex justify-between items-center cursor-pointer hover:bg-teal-100 hover:text-teal-900 w-full py-2 px-4 pl-9 transition">
                    <p>Messages</p>
                    <span className="p-2 text-[12px] py-[1px] rounded-full flex items-center justify-center bg-teal-500 text-white">
                      22
                    </span>
                  </li>
                  <li className="cursor-pointer hover:bg-teal-100 hover:text-teal-900 block w-full py-2 px-4 pl-9 transition">
                    Settings
                  </li>
                  <li className="cursor-pointer hover:bg-teal-100 hover:text-teal-900 block w-full py-2 px-4 pl-9 transition">
                    Logout
                  </li>
                </ul>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="rounded-full" size="icon" variant="ghost">
              <Store size={20} />
            </Button>
            <Button className="rounded-full" size="icon" variant="ghost">
              <Bell size={20} />
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
