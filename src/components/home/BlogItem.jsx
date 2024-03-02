import { Link } from "react-router-dom";

function BlogItem({ index }) {
  return (
    <li>
      <Link
        className="flex gap-2 hover:bg-stone-200 p-4 py-2 transition"
        to="#"
      >
        <img
          className="w-16 h-auto rounded-md object-contain"
          src={`/assets/images/blog-${index}.jpg`}
          alt="blog one"
        />
        <div className="flex-1 flex flex-col gap-1">
          <span className="text-[12px] text-stone-700">
            March {18 - index}, 2022
          </span>
          <p className="text-black text-sm line-clamp-2 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            eligendi perspiciatis magnam quod aperiam magni facilis nihil qui?
            Omnis placeat fugit deserunt laboriosam libero itaque quia dolorem
            illum rerum doloremque.
          </p>
        </div>
      </Link>
    </li>
  );
}

export default BlogItem;
