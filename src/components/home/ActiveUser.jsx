import { Link } from "react-router-dom";

function ActiveUser() {
  return (
    <div className="w-full flex flex-col gap-1 py-2 bg-white rounded-md border border-stone-300">
      <h4 className="font-bold text-lg px-4 py-1">Who&#39;s online</h4>
      <ul className="px-4 py-1 flex flex-wrap gap-2">
        <li>
          <Link to="#">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src="/assets/images/avatar.jpg"
              alt="avatar"
            />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src="/assets/images/avatar.jpg"
              alt="avatar"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ActiveUser;
