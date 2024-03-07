import { Dot, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

function ForumItem({ item }) {
  return (
    <div className="w-full">
      <h3 className="uppercase text-lg font-medium">{item.title}</h3>
      <p className="text-base">{item.sub}</p>
      <div className="w-full border border-stone-300 mt-4 rounded-lg overflow-hidden bg-white">
        {item.data.map((item, i) => (
          <div className="p-4 flex gap-2 items-center justify-between" key={i}>
            <div className="flex gap-2 max-w-[300px] w-full flex-1">
              <MessageCircle className="mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-base font-medium">{item.title}</h4>
                <p className="text-sm line-clamp-1">{item.sub}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <div className="flex flex-col items-center">
                <p>{item.topics}</p>
                <p>Topics</p>
              </div>
              <div className="" />
              <div className="flex flex-col items-center">
                <p>{item.replies}</p>
                <p>Replies</p>
              </div>
            </div>

            <div className="flex items-center gap-2 max-w-[300px] flex-1">
              <img
                className="w-10 h-10 rounded-full"
                src="assets/images/avatar.jpg"
                alt="avatar"
              />
              <div className="text-sm">
                <Link to="#" className="line-clamp-1 font-medium">
                  {item.group}
                </Link>
                <span className="flex items-center text-[12px]">
                  1 year, 11 months ago <Dot />{" "}
                  <Link className="font-medium hover:underline" to="#">
                    John
                  </Link>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForumItem;
