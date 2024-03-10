import { useState } from "react";

function HeaderPosts() {
  const [activeOption, setActiveOption] = useState(0);

  const options = ["All Members", "My Groups", "My Favorites", "Mentions"];
  return (
    <div className="w-full border hidden sm:flex h-max border-stone-300 pb-1 gap-2 pl-2 bg-white items-center rounded-lg cursor-pointer">
      {options.map((e, index) => (
        <div
          className={`p-2 pb-3 border-b-2 ${
            activeOption === index ? "border-teal-500" : " border-transparent"
          }`}
          key={index}
          onClick={() => setActiveOption(index)}
        >
          <p className="font-medium text-sm">{e}</p>
        </div>
      ))}
    </div>
  );
}

export default HeaderPosts;
