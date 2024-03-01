import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

function NavLinkItem({ path, title, Icon, data = [] }) {
  let location = useLocation();

  let classes = `flex items-center gap-[2px] font-medium capitalize hover:text-teal-500 transition `;
  if (location.pathname === "/" && path === "/activity")
    classes += "text-teal-500 ";

  if (Icon) {
    return (
      <HoverCard>
        <HoverCardTrigger className={classes} asChild>
          <NavLink
            className={({ isActive }) => (isActive ? "text-teal-500" : "")}
            end
            to={path}
          >
            <p>{title}</p>
            <Icon className="translate-y-[3px] font-normal" size="18" />
          </NavLink>
        </HoverCardTrigger>
        <HoverCardContent className="p-0 py-2">
          <ul className="flex flex-col w-full">
            {data?.map((e, i) => (
              <li key={i}>
                <Link
                  className="hover:bg-stone-100 block w-full py-1 px-4 pl-6 transition"
                  to="#"
                >
                  {e}
                </Link>
              </li>
            ))}
          </ul>
        </HoverCardContent>
      </HoverCard>
    );
  }
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? classes + "text-teal-500" : classes
      }
      end
      to={path}
    >
      <p>{title}</p>
    </NavLink>
  );
}

export default NavLinkItem;
