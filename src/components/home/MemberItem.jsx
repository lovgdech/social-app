import { Link } from "react-router-dom";

function MemberItem({ index }) {
  return (
    <li>
      <Link
        className="flex gap-2 hover:bg-stone-200 p-4 py-2 transition"
        to="#"
      >
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={`/assets/images/blog-${index}.jpg`}
          alt="blog one"
        />
        <div className="flex-1 flex flex-col">
          <p className="text-black text-base line-clamp-2 font-medium">
            Cristiano Ronaldo
          </p>
          <span className="text-[12px] text-stone-700">
            Active 9 hours, 1 minute ago
          </span>
        </div>
      </Link>
    </li>
  );
}

export default MemberItem;
