import { MessageCircleWarning } from "lucide-react";

function CreateGroupStepSix() {
  return (
    <div className="p-4 flex flex-col gap-2">
      <h4 className="font-medium text-xl text-black">Invite Members</h4>
      <div className="w-full flex border border-stone-300 items-center rounded-md overflow-hidden">
        <button className="w-10 h-10 flex bg-red-400 text-white items-center justify-center">
          <MessageCircleWarning size="20" />
        </button>
        <p className="px-4">You have no friends!</p>
      </div>
    </div>
  );
}

export default CreateGroupStepSix;
