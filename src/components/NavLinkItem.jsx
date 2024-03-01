import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function NavLinkItem({ path, title, Icon }) {
  let location = useLocation();

  let classes = `flex items-center gap-[2px] font-medium capitalize hover:text-teal-500 transition `;
  if (location.pathname === "/" && path === "/activity")
    classes += "text-teal-500 ";
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? classes + "text-teal-500" : classes
      }
      end
      to={path}
    >
      <p>{title}</p>
      {Icon && <Icon className="translate-y-[3px] font-normal" size="18" />}
    </NavLink>
  );
}

export default NavLinkItem;
