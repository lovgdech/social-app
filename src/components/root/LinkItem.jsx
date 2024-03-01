import { Link } from "react-router-dom";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function LinkItem({ path, title, Icon, toggle }) {
  if (toggle === false)
    return (
      <TooltipProvider>
        <Tooltip delayDuration="300">
          <TooltipTrigger asChild>
            <li>
              <Link
                className="w-full h-12 flex items-center justify-center font-medium hover:text-teal-500 transition"
                to={path}
              >
                <Icon className="mx-6" size={22} />
              </Link>
            </li>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>{title}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );

  return (
    <li>
      <Link
        className="w-full h-12 flex items-center justify-center font-medium hover:text-teal-500 transition"
        to={path}
      >
        <Icon className="mx-6" size={22} />
        <p className={`flex-1 pr-10 ${toggle ? "inline-flex" : "hidden"}`}>
          {title}
        </p>
      </Link>
    </li>
  );
}

export default LinkItem;
