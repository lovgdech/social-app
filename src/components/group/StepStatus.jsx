import { ChevronRight } from "lucide-react";

function StepStatus({ stepIndex }) {
  return (
    <div className="W-full flex flex-wrap gap-2 justify-between items-center border-y p-4 px-8 border-stone-300">
      <div className="flex items-center gap-2 mr-auto">
        <span className="px-2 py-[2px] mr-2 text-white text-sm rounded-full bg-teal-500">
          1
        </span>
        <p>Details</p>
        <ChevronRight size={22} />
      </div>
      <div className="flex items-center gap-2 mr-auto">
        <span
          className={`px-2 py-[2px] mr-2 text-stone-500 text-sm border border-stone-300 rounded-full ${
            stepIndex >= 2 && "text-white bg-teal-500"
          }`}
        >
          2
        </span>
        <p>Settings</p>
        <ChevronRight size={22} />
      </div>
      <div className="flex items-center gap-2 mr-auto">
        <span
          className={`px-2 py-[2px] mr-2 text-stone-500 text-sm border border-stone-300 rounded-full ${
            stepIndex >= 3 && "text-white bg-teal-500"
          }`}
        >
          3
        </span>
        <p>Forum</p>
        <ChevronRight size={22} />
      </div>
      <div className="flex items-center gap-2 mr-auto">
        <span
          className={`px-2 py-[2px] mr-2 text-stone-500 text-sm border border-stone-300 rounded-full ${
            stepIndex >= 4 && "text-white bg-teal-500"
          }`}
        >
          4
        </span>
        <p>Photo</p>
        <ChevronRight size={22} />
      </div>
      <div className="flex items-center gap-2 mr-auto">
        <span
          className={`px-2 py-[2px] mr-2 text-stone-500 text-sm border border-stone-300 rounded-full ${
            stepIndex >= 5 && "text-white bg-teal-500"
          }`}
        >
          5
        </span>
        <p>Cover image</p>
        <ChevronRight size={22} />
      </div>
      <div className="flex items-center gap-2 mr-auto">
        <span
          className={`px-2 py-[2px] mr-2 text-stone-500 text-sm border border-stone-300 rounded-full ${
            stepIndex === 6 && "text-white bg-teal-500"
          }`}
        >
          6
        </span>
        <p>Invite</p>
      </div>
    </div>
  );
}

export default StepStatus;
