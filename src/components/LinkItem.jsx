import { Link } from "react-router-dom";

function LinkItem({ path, title, Icon, toggle }) {
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
