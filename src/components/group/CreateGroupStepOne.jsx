import { Star } from "lucide-react";

function CreateGroupStepOne() {
  return (
    <div className="p-4 flex flex-col gap-2">
      <h4 className="font-medium text-xl text-black">
        Enter infomation of my group
      </h4>
      <div className="flex flex-col gap-1">
        <label
          className="flex items-center gap-2 text-black font-medium text-base"
          htmlFor="name"
        >
          <p>Group name</p>
          <span className="flex items-center justify-center text-yellow-800">
            <Star size={8} />
          </span>
        </label>
        <input
          className="outline-none py-2 px-4 rounded-md text-base border border-stone-300 bg-stone-100 focus:border-teal-500"
          type="text"
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          className="flex items-center gap-2 text-black font-medium text-base"
          htmlFor="description"
        >
          <p>Group description</p>
          <span className="flex items-center justify-center text-yellow-800">
            <Star size={8} />
          </span>
        </label>
        <textarea
          className="outline-none py-2 px-4 rounded-md text-base border border-stone-300 bg-stone-100 focus:border-teal-500"
          rows={5}
          required
        />
      </div>
    </div>
  );
}

export default CreateGroupStepOne;
